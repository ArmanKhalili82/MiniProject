using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.TeacherService;

public class TeacherService : ITeacherService
{
    private readonly ApplicationDbContext _context;

    public TeacherService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(TeacherDto teacherDto)
    {
        var teacher = new Teacher
        {
            FirstName = teacherDto.FirstName,
            LastName = teacherDto.LastName,
        };

        _context.Teachers.Add(teacher);
        _context.SaveChanges();
    }

    public async Task Delete(int teacherId)
    {
        var teacher = await _context.Teachers.FindAsync(teacherId);
        if (teacher == null) return;

        _context.Teachers.Remove(teacher);
        await _context.SaveChangesAsync();
    }

    public async Task<List<TeacherDto>> GetAllTeachers()
    {
        var teachers = await _context.Teachers
            .Select(t => new TeacherDto
            {
                TeacherId = t.TeacherId,
                FirstName = t.FirstName,
                LastName = t.LastName
            })
            .ToListAsync();
        return teachers;
    }

    public async Task<TeacherDto> GetById(int id)
    {
        var teacher = await _context.Teachers.FindAsync(id);
        if (teacher == null)
        {
            return null;
        }

        return new TeacherDto
        {
            TeacherId = teacher.TeacherId,
            FirstName = teacher.FirstName,
            LastName = teacher.LastName
        };
    }

    public async Task Update(TeacherDto teacherDto)
    {
        var teacher = await _context.Teachers.FindAsync(teacherDto.TeacherId);
        if (teacher == null) return;

        teacher.FirstName = teacherDto.FirstName;
        teacher.LastName = teacherDto.LastName;

        _context.Teachers.Update(teacher);
        await _context.SaveChangesAsync();
    }
}
