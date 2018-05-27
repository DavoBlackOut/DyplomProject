using System;
using System.IO;
using System.Threading.Tasks;
using DyplomProject.Models;
using DyplomProject.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DyplomProject.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        readonly ApplicationDbContext db;

        public AccountsController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<Account> Register([FromBody] Account Account)
        {
            if (await db.Accounts.SingleOrDefaultAsync(x => x.AccountId == Account.AccountId) == null)
            {
                await db.Accounts.AddAsync(Account);

                await db.SaveChangesAsync();

                return Account;
            }

            return null;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<Account> Login([FromBody] Account Account)
        {
            Account LoginedAccount = await db
                .Accounts
                .SingleOrDefaultAsync(x => x.Login == Account.Login && x.Password == Account.Password);

            if (LoginedAccount != null)
            {
                Response.Cookies.Append("AccountId", CookiesManager.Push(LoginedAccount.AccountId).ToString());

                return Account;
            }

            return null;
        }

        [HttpGet]
        [Route("GetAccount")]
        public async Task<Account> GetAccount(int? id)
        {
            if (id == null || id == 0)
            {
                id = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"]));
            }

            Account Account = await db.Accounts.SingleOrDefaultAsync(x => x.AccountId == id.Value);

            return Account;
        }

        [HttpPost]
        [Route("ChangePhoto")]
        public async Task<User> ChangePhoto(IFormFile Photo)
        {
            Account Account = await db
                .Accounts
                .SingleOrDefaultAsync(x => x.AccountId == CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"])));

            if (Account != null)
            {
                if (Photo != null)
                {
                    var path = Path.Combine(
                        Directory.GetCurrentDirectory(), "storage",
                        Account.AccountId.ToString());

                    using (FileStream fs = new FileStream(path, FileMode.Create))
                    {
                        await Photo.CopyToAsync(fs);

                        Account.HasPhoto = true;

                        await db.SaveChangesAsync();
                    }

                    return new User(Account);
                }

                return null;
            }

            return null;
        }

        [Route("GetPhoto")]
        [HttpGet]
        public IActionResult GetPhoto(string Id)
        {
            if (string.IsNullOrEmpty(Id))
            {
                Id = CookiesManager.GetIdByGuid(new Guid(Request.Cookies["AccountId"])).ToString();
            }

            var path = Path.Combine(
                Directory.GetCurrentDirectory(), "storage",
                        Id);
            return PhysicalFile(path, "image/png", "photo.png");
        }
    }
}
