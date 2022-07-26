using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PathcordBackend.Entities
{
    public class TextMessage
    {
        public int TextMessageId { get; set; }
        public int ChannelId { get; set; }
        public Channel Channel { get; set; }
        public int UserId { get; set; }
        public DateTime DataStamp { get; set; }
        public string Text { get; set; }
    }
}
