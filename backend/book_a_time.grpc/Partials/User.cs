using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using book_a_time.gprc;

namespace book_a_time.grpc.partials;

public sealed partial class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public long Id { get; set;}
    [MaxLength(100)]
    public string? Name { get; set;}
    public string? FullName { get; set;}
    public string? Email { get; set;}
    [MaxLength(100)]
    public UserType Type{ get; set;}
    public string? UrlPhoto { get;set; }
    public float Rating { get; set; }
    public ICollection<Service>? Services { get; set; }
}