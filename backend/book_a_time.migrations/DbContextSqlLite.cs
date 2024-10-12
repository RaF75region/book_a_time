using System;
using book_a_time.migrations.Models;
using Microsoft.EntityFrameworkCore;

namespace book_a_time.migrations;

public class DbContextSqlLite : DbContext
{
    public DbContextSqlLite(DbContextOptions<DbContextSqlLite> options)
        : base(options)
    {
    }
    public DbSet<User> Users { get; set; }
    public DbSet<Service> Services { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Service>()
            .HasOne(s => s.User)
            .WithMany(u => u.Services)
            .HasForeignKey(s => s.UserId);
    }
}