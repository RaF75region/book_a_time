using book_a_time.gprc;
using book_a_time.grpc.Repositories.Interfaces;
using Grpc.Core;

namespace book_a_time.grpc.Services;

public class UserServicesService : ServesRequests.ServesRequestsBase
{
    private readonly IRepository<partials.Service> _repository;
    private readonly IRepositoryService _repositoryService;

    public UserServicesService(IRepository<partials.Service> repository,
        IRepositoryService repositoryService)
    {
        _repository = repository;
        _repositoryService = repositoryService;
    }

    public override async Task<MessageReplyService> AddOrUpdateUserService(MessageService request, ServerCallContext context)
    {
        partials.Service service = request;
        var errorString = await _repository.Insert(service);
        return new MessageReplyService()
        {
            Error = string.IsNullOrEmpty(errorString) ? false : true,
            Message = string.IsNullOrEmpty(errorString) ? string.Empty : errorString,
            SingleUserService = request
        };
    }

    public override async Task<MessageReplyService> GetUserServices(MessageUserId userId, ServerCallContext context)
    {
        long id = userId.UserId;

        var service = await _repositoryService.GetServicesByUser(id);

        if (service == null)
            return new()
            {
                Error = true,
                Message = "No service found"
            };
        var result = new MessageReplyService();
        // MessageService[] messageServices = 
        // result.MultipleUserService.AddRange((IEnumerable<MessageService>)service);
        return new()
        {
            Error = false,
            Message = string.Empty,
            // MultipleUserService = ,
            // UserService = service
        };
    }
}
