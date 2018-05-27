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
    public class MessagesController : Controller
    {
        readonly ApplicationDbContext db;

        public MessagesController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [Route("GetUnreadedMessagesCount")]
        [HttpGet]
        public async Task<int> GetUnreadedMessagesCount()
        {
            int Id = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"]));

            return await db
                .Messages
                .Where(x => x.GetterId == Id && string.IsNullOrEmpty(x.ReadTime))
                .CountAsync();
        }

        [Route("GetUnreadedMessagesCountFromUser")]
        [HttpGet]
        public async Task<int> GetUnreadedMessagesCountFromUser(int id)
        {
            int Id = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"]));

            return await db
                .Messages
                .Where(x => x.SenderId == id && x.GetterId == Id && string.IsNullOrEmpty(x.ReadTime))
                .CountAsync();
        }
    }
}
