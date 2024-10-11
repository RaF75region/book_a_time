namespace book_a_time.grpc.Repositories.Interfaces;

public interface IRepositoryService
{
    public Task<IEnumerable<partials.Service>> GetServicesByUser(long id);
}
