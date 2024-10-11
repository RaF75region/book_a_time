namespace book_a_time.grpc.partials;

public sealed partial class User
{
    public static implicit operator User(gprc.User value) =>
                new()
                {
                    Id = value.Id,
                    Name = value.Name,
                    UrlPhoto = value.UrlPhoto,
                    Type = value.Type,
                    Email = value.Email,
                    FullName = value.FullName,
                    Rating = value.Rating,
                };
}
