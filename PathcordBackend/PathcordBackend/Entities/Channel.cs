using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PathcordBackend.Entities
{
    public class Channel
    {
        public int ChannelId { get; set; }

        public string Name { get; set; }

        public IList<Subscription> Subscriptions { get; set; } = new List<Subscription>();
        public IList<TextMessage> TextMessages { get; set; } = new List<TextMessage>();
    }
}
