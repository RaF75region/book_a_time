using System;
using book_a_time.application.Interfaces;
using book_a_time.migrations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace book_a_time.application;

public static class ConfigurationsService
{
    public static IApplicationConfigurationBuilder AddServicesContext(this IServiceCollection services)
        => new ApplicationConfigurationBuilder(services);
    
    public static IApplicationConfigurationBuilder AddRepositories(this IServiceCollection services) 
        => new ApplicationConfigurationBuilder(services);
}

public interface IApplicationConfigurationBuilder
{
    IApplicationConfigurationBuilder UseCotextDB(string connectionString);
    IApplicationConfigurationBuilder UseRepositries();
}

public class ApplicationConfigurationBuilder : IApplicationConfigurationBuilder
{
    private readonly IServiceCollection _services;

    public ApplicationConfigurationBuilder(IServiceCollection services)
    {
        _services = services;
    }

    public IApplicationConfigurationBuilder UseCotextDB(string connectionString)
    {
        _services.AddDbContext<DbContextSqlLite>(c => c.UseSqlite(connectionString));
        return this;
    }

    public IApplicationConfigurationBuilder UseRepositries()
    {
        _services.AddScoped<IRepositoryUser, RepositoryUser>();
        _services.AddScoped<IRepositoryService, RepositoryService>();
        return this;
    }
}