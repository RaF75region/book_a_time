using Microsoft.AspNetCore.SignalR;

namespace book_a_time.grpc;

public class NotificationHub:Hub
{
public async Task SendMessage(string user, string message)
    {
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }
}
