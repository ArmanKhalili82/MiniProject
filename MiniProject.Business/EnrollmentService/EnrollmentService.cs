using Microsoft.EntityFrameworkCore;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Models;

namespace MiniProject.Business.EnrollmentService;

public class EnrollmentService : IEnrollmentService
{
    private readonly ApplicationDbContext _context;

    public EnrollmentService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Create(Enrollment enrollment)
    {
        _context.Enrollments.Add(enrollment);
        _context.SaveChanges();
    }

    public async Task Delete(int enrollmentId)
    {
        var enrollment = await _context.Enrollments.FindAsync(enrollmentId);
        _context.Enrollments.Remove(enrollment);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Enrollment>> GetAllEnrollments()
    {
        var enrollments = await _context.Enrollments.ToListAsync();
        return enrollments;
    }

    public async Task<Enrollment> GetById(int id)
    {
        var enrollment = await _context.Enrollments.FindAsync(id);
        return enrollment;
    }

    public async Task Update(Enrollment enrollment)
    {
        _context.Enrollments.Update(enrollment);
        await _context.SaveChangesAsync();
    }
}
