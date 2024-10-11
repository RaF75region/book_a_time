using System;
using book_a_time.application;
using book_a_time.application.Interfaces;
using book_a_time.migrations.Models;
using Microsoft.AspNetCore.Mvc;

namespace book_a_time.api.Controllers;

public static class ServiceController
{
    const string url = "v1/service";
    public static void Init(WebApplication app)
    {
        app.MapPost($"{url}/create", async (
            [FromServices] IRepositoryService _repository,
            [FromBody] Service service
        ) =>
        {
            try
            {
                var obj = await _repository.AddAsync(service);
                return new ReturnModel<Service>()
                {
                    Error = false,
                    Message = "Service created",
                    Data = obj
                };
            }
            catch (Exception ex)
            {
                return new ReturnModel<Service>()
                {
                    Error = false,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Services")
        .WithName("Create")
        .WithOpenApi();

        app.MapGet($"{url}/", async (
            [FromServices] IRepositoryService _repository,
            [FromQuery] Guid id
        ) =>
        {
            try
            {
                var service = await _repository.GetByIdAsync(id);
                return new ReturnModel<Service>()
                {
                    Error = false,
                    Message = "Service created",
                    Data = service
                };
            }
            catch (Exception ex)
            {
                return new ReturnModel<Service>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Services")
        .WithName("Get")
        .WithOpenApi();

        app.MapGet($"{url}/list", async (
            [FromServices] IRepositoryService _repository,
            [FromQuery] long userId
        ) =>
        {
            try
            {
                var services = await _repository.GetByUserIdAsync(userId);
                return new ReturnModel<IEnumerable<Service?>>()
                {
                    Error = false,
                    Data = services
                };
            }
            catch (Exception ex)
            {
                return new ReturnModel<IEnumerable<Service?>>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Services")
        .WithName("GetList")
        .WithOpenApi();

        app.MapPut($"{url}/update", async (
            [FromServices] IRepositoryService _repository,
            [FromBody] Service service
        ) =>
        {
            try
            {
                await _repository.UpdateAsync(service);
                return new ReturnModel<Service>()
                {
                    Error = false,
                    Message = "Service updated"
                };
            }
            catch (Exception ex)
            {
                return new ReturnModel<Service>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Services")
        .WithName("Update")
        .WithOpenApi();

        app.MapDelete($"{url}", async (
            [FromServices] IRepositoryService _repository,
            [FromBody] Service service
        ) =>
        {
            try
            {
                await _repository.RemoveAsync(service);
                return new ReturnModel<Service>()
                {
                    Error = false,
                    Message = "Service removed"
                };
            }
            catch (Exception ex)
            {
                return new ReturnModel<Service>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Services")
        .WithName("removed")
        .WithOpenApi();
    }
}
