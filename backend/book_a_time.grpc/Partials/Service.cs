using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using book_a_time.grpc.partials;

namespace book_a_time.grpc.partials;

public sealed partial record Service
{
    [Key]
    public Guid Id { get; init; }
    [Required]
    public string Title { get; init; } = null!;
    [Required]
    public string Description { get; init; }  = null!;
    [Required]
    [Range(15, int.MaxValue, ErrorMessage = "TimeProgress must be greater than 0.")]
    public int TimeProgress { get; init; }
    [Required]
    [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than 0.")]
    public decimal Price { get; init; }
    [ForeignKey(nameof(User))] 
    public long UserId { get; set; }
    public User? User { get; set; }
}
