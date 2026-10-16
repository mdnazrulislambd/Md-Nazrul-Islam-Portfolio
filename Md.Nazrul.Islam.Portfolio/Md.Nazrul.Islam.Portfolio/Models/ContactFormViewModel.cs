using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class ContactFormViewModel
    {
        [Required, StringLength(150)]
        public string Name { get; set; } = string.Empty;

        [Required, EmailAddress, StringLength(255)]
        public string Email {  get; set; } = string.Empty;

        [Required, StringLength(250)]
        public string Subject { get; set; } = string.Empty;

        [Required, StringLength(2000, MinimumLength =10)]
        public string Message {  get; set; } = string.Empty;

        // Honeypot: real visitors never see or fill this field
        public string? Website { get; set; }
    }
}
