using book_a_time.grpc.Services;
using book_a_time.grpc;
using Microsoft.EntityFrameworkCore;
using book_a_time.grpc.Repositories;
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration["connection_string"];
keyBotTelegram = builder.Configuration["key_for_telegram"];

// IBot tg = new TelegramService();
// await tg.StartListen(new CancellationTokenSource());


builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddScoped<book_a_time.grpc.Repositories.Interfaces.IRepositoryService, RepositoryService>();
builder.Services.AddSignalR();
builder.Services.AddGrpc();

builder.Services.AddCors(o => o.AddPolicy("AllowAll", builder =>
{
    builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));
builder.Services.AddDbContext<DbContextSqlLite>(opt =>
{
    opt.UseSqlite(connectionString);
});

var app = builder.Build();
app.UseCors();
app.UseGrpcWeb(new GrpcWebOptions{DefaultEnabled=true});
// Configure the HTTP request pipeline.
app.MapGrpcService<GreeterService>().EnableGrpcWeb()
.RequireCors("AllowAll");
app.MapGrpcService<UserService>().EnableGrpcWeb()
.RequireCors("AllowAll");
app.MapGrpcService<UserServicesService>().EnableGrpcWeb()
.RequireCors("AllowAll");
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
app.MapHub<NotificationHub>("/notificationHub");
app.Run();

partial class Program
{    
    public static string keyBotTelegram { get; private set; }
}