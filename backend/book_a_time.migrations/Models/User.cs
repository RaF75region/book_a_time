using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace book_a_time.migrations.Models;

public sealed class User
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

public enum UserType {
    User = 0,
    Specialist = 1,
  }
