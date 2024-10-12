
using System.Net.Http.Json;
using System.Text;
using book_a_time.application;
using book_a_time.migrations.Models;
using Newtonsoft.Json;

namespace book_a_time.TelegramBot.ProviderApi;

public class ProviderApi : IProviderApi
{
    private readonly HttpClient _httpClient;

    public ProviderApi(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<ReturnModel<User>> CreateUserAync(User user)
    {
        var content = new StringContent(JsonConvert.SerializeObject(user), Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync("/v1/user/create", content);

        response.EnsureSuccessStatusCode();

        return await response.Content.ReadFromJsonAsync<ReturnModel<User>>() ?? null!;
    }

    public async Task<ReturnModel<User>> GetDataAsync()
    {
        var response = await _httpClient.GetAsync("data");
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadFromJsonAsync<ReturnModel<User>>() ?? null!; //JsonConvert.DeserializeObject<ReturnModel<User>>(result);
    }
}
