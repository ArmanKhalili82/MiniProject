using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.CourseService
{
    public interface ICourseService
    {
        Task<List<CourseDto>> GetAllCourses();
        Task<CourseDto> GetById(int id);
        Task Create(CourseDto courseDto);
        Task Update(CourseDto courseDto);
        Task Delete(int courseId);
    }
}
