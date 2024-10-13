using book_a_time.migrations.Models;

namespace book_a_time.application.Interfaces;

public interface IRepositoryUser
{
    public Task AddUserAsync(User user, CancellationToken cancellationToken = default);
    public Task<User?> GetUserByIddAsync(long id, CancellationToken cancellationToken = default);
    public Task ChangeTypeAsync(long id ,UserType type, CancellationToken cancellationToken = default);
    public Task<IEnumerable<User>> GetUsersAsyncByType(UserType type, CancellationToken cancellationToken = default);
    public Task<User> UpdateAsync (User user, CancellationToken cancellationToken = default);
}
