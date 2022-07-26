using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PathcordBackend.Models;
using PathcordBackend.Services;

namespace PathcordBackend.Controllers
{

    [ApiController]
    [Route("/api/{userId}/channels")]
    public class ChannelsController : ControllerBase
    {
        private readonly IPathcordRepository _pathcordRepository;
        private readonly IMapper _mapper;

        public ChannelsController(
            IPathcordRepository pathcordRepository,
            IMapper mapper)
        {
            _pathcordRepository = pathcordRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChannelWithoutMessagesDto>>>  GetChannels()
        {
            var channels = await _pathcordRepository.GetChannelsAsync();

            var results = _mapper.Map<IEnumerable<ChannelWithoutMessagesDto>>(channels);

            //var results = new List<ChannelWithoutMessagesDto>();

            //foreach (var channel in channels)
            //{
            //    results.Add(
            //        new ChannelWithoutMessagesDto
            //        {
            //            Id = channel.ChannelId,
            //            Name = channel.Name
            //        });
            //}
            return Ok(results);
        }

        [HttpGet("{channelId}")]
        public async Task<ActionResult<ChannelDto>> GetChannelById(int channelId)
        {
            var channel = await _pathcordRepository.GetChannelByIdAsync(channelId);

            if (channel == null)
            {
                return NotFound();
            }

            var result = _mapper.Map<ChannelDto>(channel);

            //var result = new ChannelDto
            //{
            //    Id = channel.ChannelId,
            //    Name = channel.Name
            //};

            //result.TextMessages = new List<TextMessageDto>();

            //var messages = channel.TextMessages;

            //foreach(var message in messages)
            //{
            //    result.TextMessages.Add(new TextMessageDto
            //    {
            //        Id = message.ChannelId,
            //        Text = message.Text,
            //        DateTime = message.DataStamp,
            //        UserId = message.UserId
            //    });
            //}

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<ChannelDto>> CreateChannel (
            [FromBody] ChannelForCreationDto channelForCreation)
        {
            var finalChannel = new Entities.Channel()
            {
                Name = channelForCreation.Name
            };

            int result = await _pathcordRepository.AddChannelAsync(finalChannel);

            if (result != 0)
            {
                return BadRequest();
            }

            try
            {
                await _pathcordRepository.SaveChangesAsync();
            } catch (DbUpdateException ex)
            {
                return Conflict();
            }

            return Ok(finalChannel);
        }

        [HttpDelete("{channelId}")]
        public async Task<ActionResult> DeleteChannel(int channelId)
        {
            var channel = await _pathcordRepository.GetChannelByIdAsync(channelId);

            if (channel == null)
            {
                return NotFound();
            }

             _pathcordRepository.DeleteChannelAsync(channel);

            await _pathcordRepository.SaveChangesAsync();

            return NoContent();
        }
    }
}