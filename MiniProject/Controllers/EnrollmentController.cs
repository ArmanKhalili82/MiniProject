using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProject.Business.EnrollmentService;
using MiniProject.Models.Models;

namespace MiniProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnrollmentController : ControllerBase
    {
        private readonly IEnrollmentService _enrollmentService;

        public EnrollmentController(IEnrollmentService enrollmentService)
        {
            _enrollmentService = enrollmentService;
        }

        [HttpGet("GetEnrollments")]
        public async Task<IActionResult> GetEnrollments()
        {
            var enrollments = await _enrollmentService.GetAllEnrollments();
            return Ok(enrollments);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Enrollment>> GetEnrollment(int id)
        {
            var enrollment = await _enrollmentService.GetById(id);
            if (enrollment == null)
            {
                return NotFound();
            }
            return enrollment;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Enrollment model)
        {
            await _enrollmentService.Create(model);
            return Ok();
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] Enrollment model)
        {
            await _enrollmentService.Update(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public async Task Delete(int id)
        {
            await _enrollmentService.Delete(id);
        }
    }
}
