using Microsoft.EntityFrameworkCore;
using PathcordBackend.DbContexts;
using PathcordBackend.Entities;
using PathcordBackend.Models;

namespace PathcordBackend.Services
{
    public class PathcordRepository : IPathcordRepository
    {
        private readonly PathcordContext _context;

        /// <summary>
        /// Create a new repository
        /// </summary>
        /// <param name="context">The DB context used in the repository</param>
        public PathcordRepository(PathcordContext context)
        {
            _context = context;
        }

        public async Task<Channel?> GetChannelByIdAsync(int channelId)
        {
            return await _context.Channels.Include(c => c.TextMessages).Where(c => c.ChannelId == channelId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Channel>> GetChannelsAsync()
        {
            return await _context.Channels.OrderBy(c => c.Name).ToListAsync();
        }

        public async Task<bool> ChannelExistsAsync (int channelId)
        {
            return await _context.Channels.AnyAsync(c => c.ChannelId == channelId);
        }

        public async Task<int> AddChannelAsync(Channel channel)
        {
            await _context.Channels.AddAsync(channel);

            return 0;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }

        public void DeleteChannelAsync(Channel channel)
        {
            _context.Channels.Remove(channel);
        }
    }
}
