using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class ContactMessage
    {
        [Key]
        public int MessageId { get; set; }

        [Required]
        [MaxLength(150)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(255)]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        [MaxLength(250)]
        public string Subject { get; set; } = string.Empty;

        [Required]
        public string Message {  get; set; } = string.Empty;

        [Required]
        [MaxLength(30)]
        public string Status { get; set; } = "New";

        public DateTime CreatedAt { get; set; }

        public DateTime? ReadAt { get; set; }

        public ICollection<MessageReply> Replies { get; set; } = new List<MessageReply>();
    }
}
