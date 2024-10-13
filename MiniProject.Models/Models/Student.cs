using System.ComponentModel.DataAnnotations;

namespace MiniProject.Models.Models;

public class Student
{
    [Key]
    public int StudentId { get; set; }
    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }
    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }
    [Required]
    public int NationalId { get; set; }
    public List<StudentCourse> StudentCourses { get; set; }
    public List<Enrollment> Enrollments { get; set; }
}
