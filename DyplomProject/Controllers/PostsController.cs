using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DyplomProject.Models;
using DyplomProject.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DyplomProject.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        readonly ApplicationDbContext db;
            
        public PostsController(ApplicationDbContext db)
        {
            this.db = db;
        }

        const int PostsCount = 15;

        [Route("GetPosts")]
        [HttpGet]
        public async Task<List<Post>> GetPosts(int? id, int Page = 0)
        {
            if (id == 0 || id == null)
            {
                id = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"]));
            }

            List<Post> Posts = await db
                .Posts
                .Where(x => x.OwnerId == id)
                .ToListAsync();

            Posts.Reverse();

            Posts = Posts.Skip(PostsCount * Page).Take(PostsCount).ToList() ;

            return Posts;
        }

        [Route("SendPost")]
        [HttpPost]
        public async Task<Post> SendPost([FromBody] Post Post)
        {
            Post NewPost = new Post();

            NewPost.Content = Post.Content;

            NewPost.CreatedTime = DateTime.Now.ToString();

            NewPost.OwnerId = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"]));

            await db.Posts.AddAsync(NewPost);

            await db.SaveChangesAsync();

            return NewPost;
        }

        [Route("DeletePost")]
        [HttpDelete]
        public async Task<string> DeletePost(int Id)
        {
            Post Post = await db
                .Posts
                .SingleOrDefaultAsync(x => x.PostId == Id);

            if (Post.OwnerId == CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"])))
            {
                db.Posts.Remove(Post);

                await db.SaveChangesAsync();

                return "Ok";
            }

            return "Fail";
        }
    }
}
