using System.ComponentModel.DataAnnotations;

namespace MiniProject.Models.Models;

public class Course
{
    [Key]
    public int CourseId { get; set; }
    [Required]
    public string CourseName { get; set; }
    [Required]
    public int Unit {  get; set; }
    public List<StudentCourse> StudentCourses { get; set; }
    public List<TeacherCourse> TeacherCourses { get; set; }
    public List<Enrollment> Enrollments { get; set; }
}
