using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DyplomProject.Models;
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

        [Route("GetPosts")]
        [HttpGet]
        public async Task<List<Post>> GetPosts(int? id)
        {
            if (id == 0 || id == null)
            {
                id = Int32.Parse(Request.Cookies["AccountId"]);
            }

            List<Post> Posts = await db
                .Posts
                .Where(x => x.OwnerId == id)
                .ToListAsync();

            Posts.Reverse();

            return Posts;
        }

        [Route("SendPost")]
        [HttpPost]
        public async Task<Post> SendPost([FromBody] Post Post)
        {
            Post NewPost = new Post();

            NewPost.Content = Post.Content;

            NewPost.CreatedTime = DateTime.Now.ToString();

            NewPost.OwnerId = Int32.Parse(Request.Cookies["AccountId"]);

            await db.Posts.AddAsync(NewPost);

            await db.SaveChangesAsync();

            return NewPost;
        }
    }
}
