using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class Profile
    {
        public int ProfileId { get; set; }

        [Required]
        [MaxLength(150)]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [MaxLength(250)]
        public string ProfessionalTitle {  get; set; } = string.Empty;
        [Required]

        public string? ProfileImageUrl { get; set; }

        [MaxLength(500)]
        public string CVUrl { get; set; }
        [Required]
        [MaxLength(255)]
        public string Email { get; set; } = string.Empty;

        [MaxLength(30)]
        public string? Phone {  get; set; }

        [MaxLength(200)]
        public string? Location { get; set; }

        public string UpdatedAt { get; set; }
    }
}
