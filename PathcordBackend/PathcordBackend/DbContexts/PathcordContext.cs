using Microsoft.EntityFrameworkCore;
using PathcordBackend.Entities;

namespace PathcordBackend.DbContexts
{
    public class PathcordContext : DbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Channel> Channels { get; set; } = null!;
        public DbSet<Subscription> Subscriptions { get; set; } = null!;
        public DbSet<TextMessage> Messages { get; set; } = null!;

        public PathcordContext(DbContextOptions<PathcordContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=PathcordDB;Trusted_Connection=True;");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // generate key for SUBSCRIPTIONS using the keys of the USERS and CHANNELS for simulating their M-M relationship
            modelBuilder.Entity<Subscription>().HasKey(s => new
            {
                s.UserId,
                s.ChannelId
            });

            modelBuilder.Entity<Channel>()
                .HasIndex(c => c.Name)
                .IsUnique()
                .HasDatabaseName("Ix_Channel_Name");


            // 1-M relationship between MESSAGES-CHANNELS
            modelBuilder.Entity<TextMessage>()
                .HasOne<Channel>(m => m.Channel)
                .WithMany(c => c.TextMessages)
                .HasForeignKey(m => m.ChannelId);

            // create the tables with predefined rows
            modelBuilder.Entity<User>()
                .HasData(
                new User()
                {
                    UserId = 1,
                    Name = "xMaryx"
                },
                new User()
                {
                    UserId = 2,
                    Name = "D@mien"
                },
                new User()
                {
                    UserId = 3,
                    Name = "Le$hawna"
                }) ;

            modelBuilder.Entity<Channel>()
                .HasData(
                new Channel()
                {
                    ChannelId = 1,
                    Name = "General"
                },
                new Channel()
                {
                    ChannelId = 2,
                    Name = "Legendz"
                });

            modelBuilder.Entity<Subscription>()
                .HasData(
                new Subscription()
                {
                    UserId = 1,
                    ChannelId = 1
                },
                new Subscription()
                {
                    UserId = 1,
                    ChannelId = 2
                },
                new Subscription()
                {
                    UserId = 2,
                    ChannelId = 1
                },
                new Subscription()
                {
                    UserId = 3,
                    ChannelId = 1
                });

            modelBuilder.Entity<TextMessage>()
                .HasData(
                new TextMessage()
                {
                    TextMessageId = 1,
                    UserId = 1,
                    ChannelId = 2,
                    DataStamp = DateTime.UtcNow,
                    Text = "Hello, World!"
                },
                new TextMessage()
                {
                    TextMessageId = 2,
                    UserId = 1,
                    ChannelId = 2,
                    DataStamp = DateTime.UtcNow,
                    Text = "How are y'all?"
                },
                new TextMessage()
                {
                    TextMessageId = 3,
                    UserId = 2,
                    ChannelId = 2,
                    DataStamp = DateTime.UtcNow,
                    Text = "Pretty good, thanks!"
                },
                new TextMessage()
                {
                    TextMessageId = 4,
                    UserId = 3,
                    ChannelId = 1,
                    DataStamp = DateTime.UtcNow,
                    Text = "Why is this chat so empty?"
                });
        }
    }
}
