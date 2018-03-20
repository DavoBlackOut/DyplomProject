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


        public class CustomWebSocketClient
        {
            public int AccountId;
            public WebSocket WebSocket;
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


            List<CustomWebSocketClient> WebSocketClients = new List<CustomWebSocketClient>();

            app.Use(async (context, next) =>
            {
                await WebSocketConfiguration(context, next, WebSocketClients);
            });
        }

        private static async Task WebSocketConfiguration(HttpContext context, Func<Task> next, List<CustomWebSocketClient> WebSocketClients)
        {
            if (context.Request.Path == "/ws")
            {
                if (context.WebSockets.IsWebSocketRequest)
                {
                    WebSocket WebSocket = await context.WebSockets.AcceptWebSocketAsync();
                    WebSocketClients.Add(new CustomWebSocketClient() { WebSocket = WebSocket, AccountId = Int32.Parse(context.Request.Cookies["AccountId"]) });

                    var buffer = new byte[1024 * 4];
                    WebSocketReceiveResult result = await WebSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                    while (!result.CloseStatus.HasValue)
                    {
                        Dictionary<String, object> JsonMessage = JsonConvert.DeserializeObject<Dictionary<String, Object>>(Encoding.UTF8.GetString(buffer));

                        Message Message = new Message()
                        {
                            Text = JsonMessage["text"].ToString(),

                            SendTime = DateTime.Now.ToString(),
                            SenderId = Int32.Parse(context.Request.Cookies["AccountId"]),
                            GetterId = Int32.Parse(JsonMessage["getterId"].ToString())
                        };

                        WebSocketClients
                            .Where(x => x.AccountId == Message.GetterId)
                            .ToList()
                            .ForEach(x => { x
                                .WebSocket
                                .SendAsync(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(Message)), result.MessageType, result.EndOfMessage, CancellationToken.None); });

                        //await WebSocketClients[JsonMessage["getterId"].ToString()].SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);

                        result = await WebSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                    }
                    WebSocketClients.Remove(WebSocketClients.Single(x => x.WebSocket == WebSocket));
                    await WebSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
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
        }
    }
}
