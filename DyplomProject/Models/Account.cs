using System;
namespace DyplomProject.Models
{
    public class Account
    {
        public int AccountId
        {
            get;
            set;
        }

        public string Login
        {
            get;
            set;
        }

        public string Password
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string Surname
        {
            get;
            set;
        }

        public string Email
        {
            get;
            set;
        }

        public int CountryId
        {
            get;
            set;
        }

        public bool HasPhoto
        {
            get;
            set;
        }
    }

    public class User
    {
        public int UserId
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string Surname
        {
            get;
            set;
        }

        public string Email
        {
            get;
            set;
        }

        public int CountryId
        {
            get;
            set;
        }

        public bool HasPhoto
        {
            get;
            set;
        }

        public User(Account Account)
        {
            UserId = Account.AccountId;

            Name = Account.Name;
            Surname = Account.Surname;

            Email = Account.Email;

            CountryId = Account.CountryId;

            HasPhoto = Account.HasPhoto;
        }
    }
}
