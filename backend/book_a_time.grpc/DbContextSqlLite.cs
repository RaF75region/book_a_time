using Microsoft.EntityFrameworkCore;
namespace book_a_time.grpc;

public class DbContextSqlLite : DbContext
{
    public DbContextSqlLite(DbContextOptions<DbContextSqlLite> options)
            : base(options)
    {
    }
    public DbSet<partials.User> Users { get; set; }
    public DbSet<partials.Service> Services { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<partials.Service>()
            .HasOne(s => s.User)
            .WithMany(u => u.Services)
            .HasForeignKey(s => s.UserId);
    }
}
