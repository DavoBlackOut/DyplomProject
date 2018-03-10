using System;
namespace DyplomProject.Models
{
    public class Message
    {
        public int MessageId
        {
            get;
            set;
        }

        public string Text
        {
            get;
            set;
        }

        public string SendTime
        {
            get;
            set;
        }

        public string ReadTime
        {
            get;
            set;
        }

        public int SenderId
        {
            get;
            set;
        }

        public int GetterId
        {
            get;
            set;
        }
    }

    public class MessageView
    {
        public string Text
        {
            get;
            set;
        }

        public int GetterId
        {
            get;
            set;
        }
    }
}
