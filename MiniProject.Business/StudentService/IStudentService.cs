using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.StudentService;

public interface IStudentService
{
    Task<List<StudentDto>> GetAllStudents();
    Task<StudentDto> GetById(int id);
    Task Create(StudentDto studentDto);
    Task Update(StudentDto studentDto);
    Task<StudentDetailDto> GetStudentDetails(int id);
    Task Delete(int studentId);
}
