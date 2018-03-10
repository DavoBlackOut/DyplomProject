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
    public class UsersController : Controller
    {
        readonly ApplicationDbContext db;

        public UsersController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetUsers")]
        public async Task<List<User>> GetUser()
        {
            List<User> Users = new List<User>();

            await db.Accounts.ForEachAsync(Account => Users.Add(new User(Account)));

            return Users;
        }

        [HttpGet]
        [Route("GetDialog")]
        public async Task<List<Message>> GetDialog(int id)
        {
            int Id = Convert.ToInt32(Request.Cookies["AccountId"]);

            List<Message> Messages = await db
                .Messages
                .Where(x => (x.GetterId == Id && x.SenderId == Id)
                      ||
                       (x.GetterId == Id && x.SenderId == id))
                .ToListAsync();

            Messages.ForEach(Message =>
            {
                if (string.IsNullOrEmpty(Message.ReadTime))
                {
                    Message.ReadTime = DateTime.Now.ToString();
                }
            });

            await db.SaveChangesAsync();

            return Messages;
        }

        [HttpPost]
        [Route("SendMessage")]
        public async Task<Message> SendMessage([FromBody] MessageView MessageView)
        {
            int Id = Convert.ToInt32(Request.Cookies["AccountId"]);

            Message Message = new Message();

            Message.Text = MessageView.Text;
            Message.SendTime = DateTime.Now.ToString();

            Message.SenderId = Id;
            Message.GetterId = MessageView.GetterId;

            await db.Messages.AddAsync(Message);

            await db.SaveChangesAsync();

            return Message;
        }
    }
}
