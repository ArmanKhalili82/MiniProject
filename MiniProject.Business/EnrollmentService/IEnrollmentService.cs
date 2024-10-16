using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Business.EnrollmentService;

public interface IEnrollmentService
{
    Task<List<EnrollmentDto>> GetAllEnrollments();
    Task<EnrollmentDto> GetById(int id);
    Task Create(EnrollmentDto enrollmentDto);
    Task Update(EnrollmentDto enrollmentDto);
    Task Delete(int enrollmentId);
}
