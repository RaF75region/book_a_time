using System;

namespace book_a_time.grpc.Repositories;

public class RepositoryService: Interfaces.IRepositoryService
{
    private readonly DbContextSqlLite _context;
    public RepositoryService(DbContextSqlLite context)
    {
        _context = context;
    }

    public async Task<IEnumerable<partials.Service>> GetServicesByUser(long id) =>
        await Task.Run(() => _context.Services.Where(s => s.UserId == id).ToList());
}