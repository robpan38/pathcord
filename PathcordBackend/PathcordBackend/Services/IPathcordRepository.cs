using PathcordBackend.Entities;

namespace PathcordBackend.Services
{
    public interface IPathcordRepository
    {
        // CHANNELS
        Task<IEnumerable<Channel>> GetChannelsAsync();
        Task<Channel?> GetChannelByIdAsync(int channelId);
        Task<int> AddChannelAsync(Channel channel);
        Task<bool> ChannelExistsAsync(int channelId);
        void DeleteChannelAsync(Channel channel);
        Task<bool> SaveChangesAsync();
    }
}
