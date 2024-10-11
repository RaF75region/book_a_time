// See https://aka.ms/new-console-template for more information
using book_a_time.gprc;
using Microsoft.Extensions.DependencyInjection;
using book_a_time.TelegramBot;
using book_a_time.TelegramBot.ProviderApi;
using Grpc.Net.Client;
using Microsoft.Extensions.Configuration;
using book_a_time.TelegramBot.Answers.Messages;

var builder = new ConfigurationBuilder()
            .AddUserSecrets<Program>();

IConfiguration configuration = builder.Build();

keyBotTelegram = configuration["key_for_telegram"];
grpcChannel = GrpcChannel.ForAddress("https://localhost:7163");
UserClient = new UserRequests.UserRequestsClient(grpcChannel);

Url_Api = configuration["url_api"] ?? string.Empty;

var serviceProvider = new ServiceCollection()
    .AddHttpClient<IProviderApi,ProviderApi>(option =>
    {
        option.BaseAddress = new Uri(Url_Api);
        option.DefaultRequestHeaders.Add("Accept", "application/json");
    })
    .Services
    .AddSingleton<Messages>()
    .AddSingleton<TelegramService>()
    .BuildServiceProvider();

var telegram = serviceProvider.GetRequiredService<TelegramService>();
var t = telegram.StartListen(new CancellationTokenSource());
t.Start();

partial class Program
{    
    public static string keyBotTelegram { get; private set; } = null!;
    public static string Url_Api { get; private set; } = null!;
    public static GrpcChannel grpcChannel{ get; private set; } = null!;
    public static UserRequests.UserRequestsClient? UserClient { get; private set; } = null!;
}