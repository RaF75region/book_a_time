using System;
using book_a_time.gprc;
using Telegram.Bot;
using Telegram.Bot.Exceptions;
using Telegram.Bot.Polling;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;
using Telegram.Bot.Types.ReplyMarkups;
using book_a_time.TelegramBot.ProviderApi;
using book_a_time.TelegramBot.Answers.Messages;

namespace book_a_time.TelegramBot;

public class TelegramService
{
    public TelegramBotClient _botClient;
    private IProviderApi _providerHttp;
    private readonly Messages _messages;

    public TelegramService(IProviderApi providerHttp, Messages messages)
    {
        _botClient = new(Program.keyBotTelegram);
        _providerHttp = providerHttp;
        _messages= messages;
    }
    public Task StartListen(CancellationTokenSource tokenSource)
    {
        ReceiverOptions receiverOptions = new()
        {
            AllowedUpdates = { }
        };

        _botClient.StartReceiving(
            updateHandler: HandleUpdateAsync,
            pollingErrorHandler: HandlePollingErrorAsync,
            receiverOptions: receiverOptions,
            cancellationToken: tokenSource.Token
        );
        Console.ReadLine();
        return Task.CompletedTask;
    }

    private async Task HandlePollingErrorAsync(ITelegramBotClient client, Exception exception, CancellationToken token)
    {
        var ErrorMessage = exception switch
        {
            ApiRequestException apiRequestException
                => $"Telegram API Error:\n[{apiRequestException.ErrorCode}]\n{apiRequestException.Message}",
            _ => exception.ToString()
        };

        await Task.Yield();
    }

    private async Task HandleUpdateAsync(ITelegramBotClient client, Update update, CancellationToken token)
    {
        switch (update.Type)
        {
            case UpdateType.Message:
                await _messages.SendMessageAsync(client, update);
                break;
            case UpdateType.EditedMessage:
                break;
            case UpdateType.ChatJoinRequest:
                break;
            case UpdateType.CallbackQuery:
                break;
            case UpdateType.PreCheckoutQuery:
                break;
        }
    }
}
