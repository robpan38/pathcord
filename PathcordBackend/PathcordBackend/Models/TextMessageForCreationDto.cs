using System.ComponentModel.DataAnnotations;

namespace PathcordBackend.Models
{
    public class TextMessageForCreationDto
    {
        [Required(ErrorMessage = "Error: Message's text is required.")]
        [MaxLength(5000, ErrorMessage = "Error: Message's text cannot be longer than 5000 characters.")]
        public string Text { get; set; } = string.Empty;
        public DateTime DateTime { get; set; }
        public int UserId { get; set; }
    }
}
