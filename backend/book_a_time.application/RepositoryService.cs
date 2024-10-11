using book_a_time.application.Interfaces;
using book_a_time.migrations;
using book_a_time.migrations.Models;
using Microsoft.EntityFrameworkCore;

namespace book_a_time.application;

public class RepositoryService : IRepositoryService
{
    private readonly DbContextSqlLite _context;

    public RepositoryService(DbContextSqlLite context)
    {
        _context = context;
    }
    public async Task<Service> AddAsync(Service service, CancellationToken cancellationToken = default)
    {
        await _context.AddAsync(service, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return service;
    }

    public Task<Service?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default) =>
        _context.Services.FirstOrDefaultAsync(s => s.Id == id, cancellationToken);

    public async Task<IEnumerable<Service?>> GetByUserIdAsync(long userId, CancellationToken cancellationToken = default) =>
        await _context.Services.Where(s => s.UserId == userId).ToListAsync();

    public async Task RemoveAsync(Service service, CancellationToken cancellationToken = default)
    {
        _context.Services.Remove(service);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task UpdateAsync(Service service, CancellationToken cancellationToken = default)
    {
        _context.Services.Update(service);

        await _context.SaveChangesAsync(cancellationToken);
    }
        
}
