using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MiniProject.Models.Models;

public class Course
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int CourseId { get; set; }
    [Required]
    public string CourseName { get; set; }
    [Required]
    public int Unit {  get; set; }
    public List<StudentCourse> StudentCourses { get; set; }
    public List<TeacherCourse> TeacherCourses { get; set; }
    public List<Enrollment> Enrollments { get; set; }
}
