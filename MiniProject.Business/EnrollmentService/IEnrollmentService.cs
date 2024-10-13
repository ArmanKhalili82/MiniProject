using MiniProject.Models.Models;

namespace MiniProject.Business.EnrollmentService;

public interface IEnrollmentService
{
    Task<List<Enrollment>> GetAllEnrollments();
    Task<Enrollment> GetById(int id);
    Task Create(Enrollment enrollment);
    Task Update(Enrollment enrollment);
    Task Delete(int enrollmentId);
}
