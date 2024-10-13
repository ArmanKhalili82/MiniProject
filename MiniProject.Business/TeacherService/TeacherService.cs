using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Models;

namespace MiniProject.Business.TeacherService;

public class TeacherService : ITeacherService
{
    private readonly ApplicationDbContext _context;

    public TeacherService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(Teacher teacher)
    {
        _context.Teachers.Add(teacher);
        _context.SaveChanges();
    }

    public async Task Delete(int teacherId)
    {
        var teacher = await _context.Teachers.FindAsync(teacherId);
        _context.Teachers.Remove(teacher);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Teacher>> GetAllTeachers()
    {
        var teachers = await _context.Teachers.Include(s => s.Enrollments).ToListAsync();
        return teachers;
    }

    public async Task<Teacher> GetById(int id)
    {
        var teacher = await _context.Teachers.FindAsync(id);
        return teacher;
    }

    public async Task Update(Teacher teacher)
    {
        _context.Teachers.Update(teacher);
        await _context.SaveChangesAsync();
    }
}
