using System;
using System.Collections.Generic;
using System.Linq;

namespace DyplomProject.Services
{
    public static class CookiesManager
    {
        class UserUnit
        {
            public int Id { get; set; }
            public Guid Guid { get; set; }
        }

        static List<UserUnit> UsersMap = new List<UserUnit>();

        public static Guid Push(int Id)
        {
            if (UsersMap.Exists(x => x.Id == Id))
            {
                UserUnit UserUnit = UsersMap.Single(x => x.Id == Id);
                UsersMap.Remove(UserUnit);
            }

            UserUnit NewUserUnit = new UserUnit
            {
                Id = Id,
                Guid = Guid.NewGuid()
            };

            UsersMap.Add(NewUserUnit);

            return NewUserUnit.Guid;
        }

        public static int GetIdByGuid(Guid Guid)
        {
            UserUnit UserUnit = UsersMap.Single(x => x.Guid.ToString() == Guid.ToString());

            return UserUnit.Id;
        }
    }
}
