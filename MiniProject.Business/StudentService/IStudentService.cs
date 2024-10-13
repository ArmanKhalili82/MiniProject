using MiniProject.Models.Models;

namespace MiniProject.Business.StudentService;

public interface IStudentService
{
    Task<List<Student>> GetAllStudents();
    Task<Student> GetById(int id);
    Task Create(Student student);
    Task Update(Student student);
    Task Delete(int studentId);
}
