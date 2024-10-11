using Microsoft.EntityFrameworkCore;
using book_a_time.application;
using book_a_time.application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using book_a_time.api.Controllers;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration["connection_string"];

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddServicesContext()
    .UseCotextDB(connectionString!)
    .UseRepositries();

builder.Services.AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore; // Игнорирование циклов
    });

builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAll",
            builder =>
            {
                builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
    });

var app = builder.Build();

UserControllers.Init(app);
ServiceController.Init(app);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.Run();
