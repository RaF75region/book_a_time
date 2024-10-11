namespace book_a_time.application;

public class ReturnModel<T>
{
    public bool Error { get; set; }
    public string? Message { get; set; }
    public T? Data { get; set; }
}
