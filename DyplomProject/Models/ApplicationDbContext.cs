using System;
using Microsoft.EntityFrameworkCore;

namespace DyplomProject.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Country> Countries { get; set; }
    }
}
