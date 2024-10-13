using System.ComponentModel.DataAnnotations;

namespace MiniProject.Models.Models;

public class Enrollment
{
    [Key]
    public int EnrollmentId { get; set; }
    public int StudentId { get; set; }
    public Student Student { get; set; }
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; }
    public int CourseId { get; set; }
    public Course Course { get; set; }
}
