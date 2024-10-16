using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.TeacherService;

public interface ITeacherService
{
    Task<List<TeacherDto>> GetAllTeachers();
    Task<TeacherDto> GetById(int id);
    Task Create(TeacherDto teacherDto);
    Task Update(TeacherDto teacherDto);
    Task Delete(int teacherId);
}
