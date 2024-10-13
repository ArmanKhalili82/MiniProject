using MiniProject.Models.Models;

namespace MiniProject.Business.CourseService
{
    public interface ICourseService
    {
        Task<List<Course>> GetAllCourses();
        Task<Course> GetById(int id);
        Task Create(Course course);
        Task Update(Course course);
        Task Delete(int courseId);
    }
}
