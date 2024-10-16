using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.CourseService;

public class CourseService : ICourseService
{
    private readonly ApplicationDbContext _context;

    public CourseService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(CourseDto courseDto)
    {
        var course = new Course
        {
            CourseName = courseDto.CourseName,
        };

        _context.Courses.Add(course);
        _context.SaveChanges();
    }

    public async Task Delete(int courseId)
    {
        var course = await _context.Courses.FindAsync(courseId);
        if (course == null) return;

        _context.Courses.Remove(course);
        await _context.SaveChangesAsync();
    }

    public async Task<List<CourseDto>> GetAllCourses()
    {
        var courses = await _context.Courses
            .Select(c => new CourseDto
            {
                CourseId = c.CourseId,
                CourseName = c.CourseName,
                Unit = c.Unit,
            }).ToListAsync();
        return courses;
    }

    public async Task<CourseDto> GetById(int id)
    {
        var course = await _context.Courses.FindAsync(id);
        if (course == null)
        {
            return null;
        }

        return new CourseDto
        {
            CourseId = course.CourseId,
            CourseName = course.CourseName,
            Unit = course.Unit
        };
    }

    public async Task Update(CourseDto courseDto)
    {
        var course = await _context.Courses.FindAsync(courseDto.CourseId);
        if (course == null) return;

        course.CourseName = courseDto.CourseName;
        course.Unit = courseDto.Unit;

        _context.Courses.Update(course);
        await _context.SaveChangesAsync();
    }
}
