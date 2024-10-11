using book_a_time.migrations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = new ConfigurationBuilder()
            .AddJsonFile("appsetings.json", optional: false)
            .AddUserSecrets<Program>();

IConfiguration configuration = builder.Build();

string connectionString = configuration["connection_string"];

var serviceProvider = new ServiceCollection()
    .AddDbContext<DbContextSqlLite>(options =>
        options.UseSqlite(connectionString))  // Подключение к SQL Server с использованием строки подключения
    .BuildServiceProvider();
