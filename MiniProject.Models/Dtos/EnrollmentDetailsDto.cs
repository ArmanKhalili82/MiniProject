using MiniProject.Models.Models;

namespace MiniProject.Models.Dtos;

public class EnrollmentDetailsDto
{
    public int EnrollmentId { get; set; }
    public int StudentId { get; set; }
    public int TeacherId { get; set; }
    public int CourseId { get; set; }
    public StudentDto Student { get; set; }
    public TeacherDto Teacher { get; set; }
    public CourseDto Course { get; set; }
}
