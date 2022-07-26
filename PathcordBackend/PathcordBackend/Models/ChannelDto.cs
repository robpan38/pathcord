namespace PathcordBackend.Models
{
    public class ChannelDto
    {
        public int ChannelId { get; set; }

        public string Name { get; set; } = string.Empty;

        public ICollection<TextMessageDto> TextMessages { get; set; } = new List<TextMessageDto>();

        public int NumberOfMessages
        {
            get
            {
                return TextMessages.Count;
            }
        }
    }
}
