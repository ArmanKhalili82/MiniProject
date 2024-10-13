using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Models;

namespace MiniProject.Business.StudentService;

public class StudentService : IStudentService
{
    private readonly ApplicationDbContext _context;

    public StudentService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(Student student)
    {
        _context.Students.Add(student);
        _context.SaveChanges();
    }

    public async Task Delete(int studentId)
    {
        var student = await _context.Students.FindAsync(studentId);
        _context.Students.Remove(student);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Student>> GetAllStudents()
    {
        var students = await _context.Students.Include(s => s.Enrollments).ToListAsync();
        return students;
    }

    public async Task<Student> GetById(int id)
    {
        var student = await _context.Students.FindAsync(id);
        return student;
    }

    public async Task Update(Student student)
    {
        _context.Students.Update(student);
        await _context.SaveChangesAsync();
    }
}
