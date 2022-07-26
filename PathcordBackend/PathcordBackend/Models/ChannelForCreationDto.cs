using System.ComponentModel.DataAnnotations;

namespace PathcordBackend.Models
{
    public class ChannelForCreationDto
    {
        [Required(ErrorMessage = "Error: Channel's name is required.")]
        [MaxLength(200, ErrorMessage = "Error: Channel's name cannot be longer than 200 characters.")]
        public string Name { get; set; } = string.Empty;
    }
}
