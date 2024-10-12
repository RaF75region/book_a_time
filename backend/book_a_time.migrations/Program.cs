using System;
using book_a_time.migrations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;

namespace book_a_time
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            // Создание и запуск хоста
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((context, config) =>
                {
                    // Добавляем User Secrets для конфигурации
                    config.AddUserSecrets<Program>();
                })
                .ConfigureServices((hostContext, services) =>
                {
                    // Получаем строку подключения из конфигурации
                    var connectionString = hostContext.Configuration["connection_string"];

                    // Регистрация DbContext с использованием SQLite
                    services.AddDbContext<DbContextSqlLite>(options =>
                        options.UseSqlite(connectionString));

                    // Добавьте другие службы здесь
                });
    }
}
