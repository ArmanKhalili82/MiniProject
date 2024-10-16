using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.StudentService;

public class StudentService : IStudentService
{
    private readonly ApplicationDbContext _context;

    public StudentService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(StudentDto studentDto)
    {
        var student = new Student
        {
            FirstName = studentDto.FirstName,
            LastName = studentDto.LastName,
            NationalId = studentDto.NationalId
        };

        _context.Students.Add(student);
        await _context.SaveChangesAsync();
    }

    public async Task Delete(int studentId)
    {
        var student = await _context.Students.FindAsync(studentId);
        if (student == null) return;

        _context.Students.Remove(student);
        await _context.SaveChangesAsync();
    }

    public async Task<List<StudentDto>> GetAllStudents()
    {
        var students = await _context.Students
            .Select(s => new StudentDto
            {
                StudentId = s.StudentId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                NationalId = s.NationalId
            }).ToListAsync();
        return students;
    }

    public async Task<StudentDto> GetById(int id)
    {
        var student = await _context.Students.FindAsync(id);
        if (student == null)
        {
            return null;
        }

        return new StudentDto
        {
            StudentId = student.StudentId,
            FirstName = student.FirstName,
            LastName = student.LastName,
            NationalId = student.NationalId
        };
    }

    public async Task Update(StudentDto studentDto)
    {
        var student = await _context.Students.FindAsync(studentDto.StudentId);
        if (student == null) return;

        student.FirstName = studentDto.FirstName;
        student.LastName = studentDto.LastName;
        student.NationalId = studentDto.NationalId;

        _context.Students.Update(student);
        await _context.SaveChangesAsync();
    }

    public async Task<StudentDetailDto> GetStudentDetails(int id)
    {
        var student = await _context.Students
            .Include(s => s.Enrollments)
                .ThenInclude(e => e.Course)
            .Include(s => s.Enrollments)
                .ThenInclude(e => e.Teacher)
            .FirstOrDefaultAsync(s => s.StudentId == id);

        if (student == null)
        {
            return null;
        }

        var studentDetailDto = new StudentDetailDto
        {
            StudentId = student.StudentId,
            FirstName = student.FirstName,
            LastName = student.LastName,
            Courses = student.Enrollments
                .Where(e => e.Course != null)
                .Select(e => new CourseDto
                {
                    CourseId = e.Course.CourseId,
                    CourseName = e.Course.CourseName
                }).ToList(),
            Teachers = student.Enrollments
                .Where(e => e.Teacher != null)
                .Select(e => new TeacherDto
                {
                    TeacherId = e.Teacher.TeacherId,
                    FirstName = e.Teacher.FirstName,
                    LastName = e.Teacher.LastName
                }).ToList()
        };

        return studentDetailDto;
    }
}
