using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class MessageReply
    {
        [Key]
        public int ReplyId { get; set; }

        public int MessageId { get; set; }

        public int UserId { get; set; }

        [Required]
        public string ReplyText { get; set; } = string.Empty;

        public DateTime RepliedAd { get; set; }

        public bool EmailSent { get; set; }

        public ContactMessage? Message { get; set; }

        public User? User { get; set; }
    }
}
