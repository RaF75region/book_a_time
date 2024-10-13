using System;
using book_a_time.application;
using book_a_time.application.Interfaces;
using book_a_time.migrations.Models;
using Microsoft.AspNetCore.Mvc;

namespace book_a_time.api.Controllers;

public static class UserControllers
{
    const string url = "v1/user";
    public static void Init(WebApplication app)
    {
        app.MapPost($"{url}/create", async (
            [FromServices] IRepositoryUser repositoryUser,
            [FromBody] User user
        ) =>
        {
            try
            {
                await repositoryUser.AddUserAsync(user);
                return new ReturnModel<User>()
                {
                    Error = false,
                    Message = "User created successfully",
                };
            }
            catch(Exception ex)
            {
                return new ReturnModel<User>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Users")
        .WithName("CreateUser")
        .WithOpenApi();

        app.MapGet($"{url}/", async (
            [FromServices] IRepositoryUser repositoryUser,
            [FromQuery] long idUser
        ) =>
        {
            try
            {
                var user = await repositoryUser.GetUserByIddAsync(idUser);
                return new ReturnModel<User>()
                {
                    Error = false,
                    Data = user
                };
            }
            catch(Exception ex)
            {
                return new ReturnModel<User>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Users")
        .WithName("GetUser")
        .WithOpenApi();

        app.MapPatch($"{url}/update-type", async (
            [FromServices] IRepositoryUser repositoryUser,
            [FromQuery] long idUser,
            [FromQuery] UserType newType
        ) =>
        {
            try
            {
                await repositoryUser.ChangeTypeAsync(idUser, newType);
                return new ReturnModel<User>()
                {
                    Error = false,
                    Message = "User type updated successfully"
                };
            }
            catch(Exception ex)
            {
                return new ReturnModel<User>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Users")
        .WithName("UpdateType")
        .WithOpenApi();

        app.MapGet($"{url}/get-spicialists", async (
            [FromServices] IRepositoryUser repositoryUser,
            [FromQuery] UserType type
        ) =>
        {
            try
            {
                var users = await repositoryUser.GetUsersAsyncByType(type);
                return new ReturnModel<IEnumerable<User>>()
                {
                    Error = false,
                    Data = users
                };
            }
            catch(Exception ex)
            {
                return new ReturnModel<IEnumerable<User>>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Users")
        .WithName("getUserByType")
        .WithOpenApi();

        app.MapPut($"{url}/update", async (
            [FromServices] IRepositoryUser repositoryUser,
            [FromBody] User user
        ) =>
        {
            try
            {
                await repositoryUser.UpdateAsync(user);
                return new ReturnModel<User>()
                {
                    Error = false,
                    Data = user
                };
            }
            catch(Exception ex)
            {
                return new ReturnModel<User>()
                {
                    Error = true,
                    Message = ex?.InnerException?.Message
                };
            }
        })
        .WithTags("Users")
        .WithName("update")
        .WithOpenApi();
    }
}
