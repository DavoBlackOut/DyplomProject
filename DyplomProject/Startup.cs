using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using DyplomProject.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace DyplomProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=Application.db"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await (next());
                }
            });

            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            WebSocketOptions WebSocketOptions = new WebSocketOptions()
            {
                KeepAliveInterval = TimeSpan.FromSeconds(120),
                ReceiveBufferSize = 4 * 1024
            };
            app.UseWebSockets(WebSocketOptions);

            List<HttpContext> WebSocketClients = new List<HttpContext>();

            app.Use(async (context, next) =>
            {
                if (context.Request.Path == "/ws")
                {
                    if (context.WebSockets.IsWebSocketRequest)
                    {
                        WebSocket WebSocket = await context.WebSockets.AcceptWebSocketAsync();

                        if (!WebSocketClients.Contains(context))
                        {
                            WebSocketClients.Add(context);
                        }

                        var buffer = new byte[1024 * 4];
                        WebSocketReceiveResult result = await WebSocket
                            .ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                        Dictionary<String, object> JsonMessage = JsonConvert
                            .DeserializeObject<Dictionary<String, Object>>(Encoding
                            .UTF8
                            .GetString(buffer));

                        MessageView Message = new MessageView()
                        {
                            Text = JsonMessage["text"].ToString(),
                            GetterId = Int32.Parse(JsonMessage["getterId"].ToString()),
                        };

                        while (!result.CloseStatus.HasValue)
                        {
                            foreach (HttpContext Client in WebSocketClients)
                            {
                                if (Client.Request.Cookies["AccountId"] == Message.GetterId.ToString())
                                {

                                    await WebSocket
                                    .SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);

                                    result = await WebSocket
                                        .ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                                }
                            }
                        }
                        await WebSocket
                            .CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }
                }
                else
                {
                    await next();
                }
            });
        }
    }
}
