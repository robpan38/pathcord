using System.ComponentModel.DataAnnotations;

namespace PathcordBackend.Models
{
    public class UserForCreationDto
    {
        [Required(ErrorMessage = "Error: User's name required")]
        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;
    }
}
