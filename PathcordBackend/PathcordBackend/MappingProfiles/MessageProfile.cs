using AutoMapper;

namespace PathcordBackend.MappingProfiles
{
    public class MessageProfile: Profile
    {
        public MessageProfile()
        {
            CreateMap<Entities.TextMessage, Models.TextMessageDto>();
            CreateMap<Models.TextMessageDto, Entities.TextMessage>();

            CreateMap<Entities.TextMessage, Models.TextMessageForCreationDto>();
            CreateMap<Models.TextMessageForCreationDto, Entities.TextMessage>();
        }
    }
}
