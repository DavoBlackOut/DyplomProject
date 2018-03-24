using System;
namespace DyplomProject.Models
{
    public class Post
    {
        public int PostId
        {
            get;
            set;
        }

        public string Content
        {
            get;
            set;
        }

        public string CreatedTime
        {
            get;
            set;
        }

        public int OwnerId
        {
            get;
            set;
        }

    }
}
