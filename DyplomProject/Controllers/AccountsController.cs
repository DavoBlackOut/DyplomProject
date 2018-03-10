using System.Threading.Tasks;
using DyplomProject.Models;
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
                Response.Cookies.Append("AccountId", LoginedAccount.AccountId.ToString());
            }

            return null;
        }
    }
}
