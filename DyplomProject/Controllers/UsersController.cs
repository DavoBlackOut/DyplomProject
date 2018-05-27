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
    public class UsersController : Controller
    {
        readonly ApplicationDbContext db;

        public UsersController(ApplicationDbContext db)
        {
            this.db = db;
        }

        const int UsersCount = 15;

        [HttpGet]
        [Route("GetUsers")]
        public async Task<List<User>> GetUsers(string SearchString, int Country = 0, int Page = 0)
        {
            SearchString = SearchString ?? "";

            List<User> Users = new List<User>();

            await db
                .Accounts
                .Where(x =>
                       (x.Name.Contains(SearchString)
                        || x.Surname.Contains(SearchString))
                       && (x.CountryId == Country || Country == 0))
                .ForEachAsync(Account => Users.Add(new User(Account)));

            Users = Users
                .Skip(UsersCount * Page)
                .Take(UsersCount)
                .ToList();

            return Users;
        }

        const int MessagesCount = 15;

        [HttpGet]
        [Route("GetDialog")]
        public async Task<List<Message>> GetDialog(int id, int Page = 0)
        {
            int Id = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"]));

            List<Message> Messages = await db
                .Messages
                .Where(x => (x.GetterId == id && x.SenderId == Id)
                      ||
                       (x.GetterId == Id && x.SenderId == id))
                .ToListAsync();

            Messages.ForEach(Message =>
            {
                if (string.IsNullOrEmpty(Message.ReadTime) && Message.GetterId == Id)
                {
                    Message.ReadTime = DateTime.Now.ToString();
                }
            });

            Messages.Reverse();

            Messages = Messages
                .Skip(MessagesCount * Page)
                .Take(MessagesCount)
                .ToList();

            await db.SaveChangesAsync();

            return Messages;
        }

        [HttpPost]
        [Route("sendMessage")]
        public async Task<Message> SendMessage([FromBody] MessageView MessageView)
        {
                int Id = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"]));

                Message Message = new Message();

                Message.Text = MessageView.Text;
                Message.SendTime = DateTime.Now.ToString();

                Message.SenderId = Id;
                Message.GetterId = MessageView.GetterId;

                await db.Messages.AddAsync(Message);

                db.SaveChanges();

                return Message;
        }
    }
}
