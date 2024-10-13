using MiniProject.Models.Models;

namespace MiniProject.Business.TeacherService;

public interface ITeacherService
{
    Task<List<Teacher>> GetAllTeachers();
    Task<Teacher> GetById(int id);
    Task Create(Teacher teacher);
    Task Update(Teacher teacher);
    Task Delete(int teacherId);
}
