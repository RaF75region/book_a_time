using book_a_time.gprc;
using Grpc.Core;

namespace book_a_time.grpc.Services;

public class UserService : UserRequests.UserRequestsBase
{
    private readonly IRepository<partials.User> _repository;
    public UserService(
        IRepository<partials.User> repository)
    {
        _repository = repository;
    }

    public override async Task<Reply> AddUser(User user, ServerCallContext context)
    {
        partials.User u = user;
        var errorString = await _repository.Insert(u, obj => obj.Id == user.Id);
        return new Reply()
        {
            User = user,
            Error = string.IsNullOrEmpty(errorString) ? false : true,
            Messsage = string.IsNullOrEmpty(errorString) ? string.Empty : errorString,
        };
    }

    public override async Task<Reply> UpdateUserType(ChangeUserType newType, ServerCallContext context)
    {
        string errorString = string.Empty;
        if (long.TryParse(context.RequestHeaders.Get("userId")?.Value, out long userId))
        {
            var user = await _repository.GetByIdAsync(userId);
            if (user == null)
            {
                errorString = "User not found";
                return new Reply()
                {
                    Error = string.IsNullOrEmpty(errorString) ? false : true,
                    Messsage = string.IsNullOrEmpty(errorString) ? string.Empty : errorString,
                };
            }
            user.Type = newType.NewType;
            errorString = await _repository.Update(user);
        };
        return new Reply()
        {
            Error = string.IsNullOrEmpty(errorString) ? false : true,
            Messsage = string.IsNullOrEmpty(errorString) ? string.Empty : errorString,
        };
    }

    public override async Task<Reply> GetUserForId(GetUser request, ServerCallContext context)
    {
        var user = await _repository.GetByIdAsync(request.Id);
        return new Reply
        {
            User = user != null ? new gprc.User
            {
                Id = user.Id,
                Name = user.Name,
                UrlPhoto = user.UrlPhoto,
                Type = user.Type,
                FullName = user.FullName,
            } : null,
            Error = user == null
        };
    }
}
