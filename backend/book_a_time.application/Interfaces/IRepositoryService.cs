using book_a_time.migrations.Models;

namespace book_a_time.application.Interfaces;

public interface IRepositoryService
{

    public Task<Service> AddAsync(Service service, CancellationToken cancellationToken = default);
    public Task<Service?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
    public Task<IEnumerable<Service?>> GetByUserIdAsync(long userId, CancellationToken cancellationToken = default);
    public Task UpdateAsync(Service service, CancellationToken cancellationToken = default);
    public Task RemoveAsync(Service service, CancellationToken cancellationToken = default);
}
