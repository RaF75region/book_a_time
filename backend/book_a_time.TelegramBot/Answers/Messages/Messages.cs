using System;
using book_a_time.migrations.Models;
using book_a_time.TelegramBot.ProviderApi;
using Telegram.Bot;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;
using Telegram.Bot.Types.ReplyMarkups;

namespace book_a_time.TelegramBot.Answers.Messages;

public sealed class Messages
{
    private readonly IProviderApi _api;
    public Messages(IProviderApi api)
    {
        _api = api;
    }
    public async Task SendMessageAsync(
        ITelegramBotClient client,
        Update update
        )
    {
        switch (update.Message.Text)
        {
            case "/start":
                var t = await client.GetUserProfilePhotosAsync(update.Message.From.Id);

                var largestPhoto = t.Photos[0].Last();
                var file = await client.GetFileAsync(largestPhoto.FileId);

                string fileUrl = $"https://api.telegram.org/file/bot{Program.keyBotTelegram}/{file.FilePath}";

                var user = update.Message.From;

                var result = await _api.CreateUserAync(new()
                {
                    Id = user.Id,
                    Name = user.Username,
                    Type = UserType.User,
                    UrlPhoto = fileUrl,
                    FullName = user.FirstName,
                    Rating = 0.0f,
                    Title = string.Empty,
                    Tags = string.Empty,
                    About = string.Empty
                });

                if (!result.Error)
                    await client.SendTextMessageAsync(update.Message.Chat.Id, "Поздравляю!!! <b>ваша учетная запись создана успешно</b>",
                            parseMode: ParseMode.Html,
                            protectContent: true
                        );
                else
                    await client.SendTextMessageAsync(update.Message.Chat.Id, "<b>Учетная запись уже создана</b>",
                                parseMode: ParseMode.Html,
                                protectContent: true
                            );
                break;
        }
    }
}
