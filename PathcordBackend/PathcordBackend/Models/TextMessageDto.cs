namespace PathcordBackend.Models
{
    public class TextMessageDto
    {
        public int TextMessageId { get; set; }
        public string Text { get; set; } = string.Empty;
        public DateTime DateTime { get; set; }
        public int UserId { get; set; }


    }
}
