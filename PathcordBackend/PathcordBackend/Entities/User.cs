using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PathcordBackend.Entities
{
    public class User
    {
        public int UserId { get; set; }

        public string Name { get; set; }

        public IList<Subscription> Subscriptions { get; set; } = new List<Subscription>();
    }
}
