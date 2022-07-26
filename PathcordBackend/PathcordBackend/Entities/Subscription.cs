using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PathcordBackend.Entities
{
    public class Subscription
    {
        public int UserId { get; set; }
        public User User { get; set; }

        public int ChannelId { get; set; }
        public Channel Channel { get; set; }
    }
}
