using AutoMapper;

namespace PathcordBackend.MappingProfiles
{
    public class ChannelProfile : Profile
    {
        public ChannelProfile()
        {
            CreateMap<Entities.Channel, Models.ChannelDto>();
            CreateMap<Models.ChannelDto, Entities.Channel>();

            CreateMap<Entities.Channel, Models.ChannelWithoutMessagesDto>();
            CreateMap<Models.ChannelWithoutMessagesDto, Entities.Channel>();

            CreateMap<Models.ChannelForCreationDto, Entities.Channel>();
            CreateMap<Entities.Channel, Models.ChannelForCreationDto>();
        }
    }
}
