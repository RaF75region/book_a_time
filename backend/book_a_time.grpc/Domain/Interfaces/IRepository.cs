namespace book_a_time.grpc;

public interface IRepository<TEntity> where TEntity : class
{
    public Task<string> Insert(TEntity item, Func<TEntity, bool>? idExistsPredicate = null);
    public Task<string> Update(TEntity item);
    public Task<TEntity?> GetByIdAsync(long id);
}