using System;

namespace book_a_time.grpc.partials;

public partial record Service
{
    public static implicit operator Service(gprc.MessageService value) =>
                    new()
                    {
                        Title = value.Title,
                        Description = value.Description,
                        TimeProgress = value.TimeProgress,
                        Price = decimal.Parse(value.Price.ToString()),
                        UserId = value.UserId,
                    };
}
