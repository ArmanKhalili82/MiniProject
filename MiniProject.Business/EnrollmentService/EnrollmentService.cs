using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.EnrollmentService;

public class EnrollmentService : IEnrollmentService
{
    private readonly ApplicationDbContext _context;

    public EnrollmentService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(EnrollmentDto enrollmentDto)
    {
        var enrollment = new Enrollment
        {
            StudentId = enrollmentDto.StudentId,
            TeacherId = enrollmentDto.TeacherId,
            CourseId = enrollmentDto.CourseId
        };

        _context.Enrollments.Add(enrollment);
        await _context.SaveChangesAsync();
    }

    public async Task Delete(int enrollmentId)
    {
        var enrollment = await _context.Enrollments.FindAsync(enrollmentId);
        if (enrollment == null) return;

        _context.Enrollments.Remove(enrollment);
        await _context.SaveChangesAsync();
    }

    public async Task<List<EnrollmentDto>> GetAllEnrollments()
    {
        var enrollments = await _context.Enrollments
            .Select(e => new EnrollmentDto
            {
                EnrollmentId = e.EnrollmentId,
                StudentId = e.StudentId,
                TeacherId = e.TeacherId,
                CourseId = e.CourseId
            })
            .ToListAsync();
        return enrollments;
    }

    public async Task<EnrollmentDto> GetById(int id)
    {
        var enrollment = await _context.Enrollments.FindAsync(id);
        if (enrollment == null)
        {
            return null;
        }

        return new EnrollmentDto
        {
            EnrollmentId = enrollment.EnrollmentId,
            StudentId = enrollment.StudentId,
            TeacherId = enrollment.TeacherId,
            CourseId = enrollment.CourseId
        };
    }

    public async Task Update(EnrollmentDto enrollmentDto)
    {
        var enrollment = await _context.Enrollments.FindAsync(enrollmentDto.EnrollmentId);
        if (enrollment == null) return;

        enrollment.StudentId = enrollmentDto.StudentId;
        enrollment.TeacherId = enrollmentDto.TeacherId;
        enrollment.CourseId = enrollmentDto.CourseId;

        _context.Enrollments.Update(enrollment);
        await _context.SaveChangesAsync();
    }
}
