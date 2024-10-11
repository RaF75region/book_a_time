using book_a_time.application;
using book_a_time.migrations.Models;

namespace book_a_time.TelegramBot.ProviderApi;

public interface IProviderApi
{
    public Task<ReturnModel<User>> CreateUserAync(User user);
}
