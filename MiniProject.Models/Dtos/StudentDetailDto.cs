namespace MiniProject.Models.Dtos;

public class StudentDetailDto
{
    public int StudentId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public List<CourseDto> Courses { get; set; }
    public List<TeacherDto> Teachers { get; set; }
}
