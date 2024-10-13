using book_a_time.application.Interfaces;
using book_a_time.migrations;
using book_a_time.migrations.Models;
using Microsoft.EntityFrameworkCore;

namespace book_a_time.application;

public class RepositoryUser : IRepositoryUser
{
    private readonly DbContextSqlLite _context;

    public RepositoryUser(DbContextSqlLite context)
    {
        _context = context;
    }

    public async Task AddUserAsync(User user, CancellationToken cancellationToken = default)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task<IEnumerable<User>> GetUsersAsyncByType(UserType type, CancellationToken cancellationToken = default)
    {
        return await Task.Run(() => _context.Users.Where(u => u.Type == type));
    }

    public async Task<User?> GetUserByIddAsync(long id, CancellationToken cancellationToken = default)
    {
        var obj = await _context.Users.FirstOrDefaultAsync(u => u.Id.Equals(id)).WaitAsync(cancellationToken);
        return obj;
    }

    public async Task ChangeTypeAsync(long id ,UserType type, CancellationToken cancellationToken = default)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id.Equals(id)).WaitAsync(cancellationToken);

        if (user == null)
            return;

        user.Type = type;
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task<User> UpdateAsync(User user, CancellationToken cancellationToken = default)
    {
        _context.Update(user);
        await _context.SaveChangesAsync(cancellationToken);
        return user;
    }
}
