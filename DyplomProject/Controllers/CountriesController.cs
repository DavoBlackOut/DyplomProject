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
    public class CountriesController : Controller
    {
        readonly ApplicationDbContext db;

        public CountriesController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        [Route("GetCountry")]
        public async Task<Country> GetCountry(int Id)
        {
            return await db.Countries.SingleOrDefaultAsync(x => x.CountryId == Id);
        }

        [HttpGet]
        [Route("GetCountries")]
        public async Task<List<Country>> GetCountries()
        {
            return await db.Countries.ToListAsync();
        }
    }
}
