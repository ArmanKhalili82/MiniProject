using System.ComponentModel.DataAnnotations;

namespace MiniProject.Models.Models;

public class Teacher
{
    [Key]
    public int TeacherId { get; set; }
    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }
    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }
    public List<TeacherCourse> TeacherCourses { get; set; }
    public List<Enrollment> Enrollments { get; set; }
}
