using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Models;

namespace MiniProject.Business.CourseService;

public class CourseService : ICourseService
{
    private readonly ApplicationDbContext _context;

    public CourseService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(Course course)
    {
        _context.Courses.Add(course);
        _context.SaveChanges();
    }

    public async Task Delete(int courseId)
    {
        var course = await _context.Courses.FindAsync(courseId);
        _context.Courses.Remove(course);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Course>> GetAllCourses()
    {
        var courses = await _context.Courses.Include(s => s.Enrollments).ToListAsync();
        return courses;
    }

    public async Task<Course> GetById(int id)
    {
        var course = await _context.Courses.FindAsync(id);
        return course;
    }

    public async Task Update(Course course)
    {
        _context.Courses.Update(course);
        await _context.SaveChangesAsync();
    }
}
