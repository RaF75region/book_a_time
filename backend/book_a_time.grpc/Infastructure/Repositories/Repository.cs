using book_a_time.gprc;
using Microsoft.EntityFrameworkCore;

namespace book_a_time.grpc;

public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
{
    private readonly DbContextSqlLite _context;
    private readonly DbSet<TEntity> _dbSet;
    private readonly ILogger<Repository<TEntity>> _logger;
    public Repository(
        DbContextSqlLite context,
        ILogger<Repository<TEntity>> logger)
    {
        _context = context;
        _dbSet = context.Set<TEntity>();
        _logger = logger;
    }

    public async Task<TEntity?> GetByIdAsync(long id)
    {
        TEntity? resultObj = null;
        try
        {
            resultObj = await _dbSet.FindAsync(id);
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message, [DateTime.UtcNow]);
        }
        return resultObj;
    }

    public async Task<string> Insert(TEntity item, Func<TEntity, bool>? idExistsPredicate = null)
    {
        try
        {
            if (idExistsPredicate != null && _dbSet.Any(idExistsPredicate))
            {
                return "Item with the same ID already exists";
            }
            await _dbSet.AddAsync(item);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message, [DateTime.UtcNow]);
            return e.Message;
        }
        return string.Empty;
    }

    public async Task<string> Update(TEntity item)
    {
        try
        {
            _context.Update(item);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message, [DateTime.UtcNow]);
            return e.Message;
        }
        return string.Empty;
    }
}
