using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProject.Business.EnrollmentService;
using MiniProject.Models.Dtos;
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
        public async Task<ActionResult<IEnumerable<EnrollmentDto>>> GetEnrollments()
        {
            try
            {
                var enrollments = await _enrollmentService.GetAllEnrollments();
                return Ok(enrollments);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving enrollment data: " + ex.Message);
            }
            //var enrollments = await _enrollmentService.GetAllEnrollments();
            //return Ok(enrollments);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EnrollmentDto>> GetEnrollment(int id)
        {
            try
            {
                var enrollment = await _enrollmentService.GetById(id);
                if (enrollment == null)
                {
                    return NotFound($"Enrollment with ID {id} not found.");
                }
                return Ok(enrollment);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving enrollment data: " + ex.Message);
            }
            //var enrollment = await _enrollmentService.GetById(id);
            //if (enrollment == null)
            //{
            //    return NotFound();
            //}
            //return enrollment;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] EnrollmentDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                await _enrollmentService.Create(model);
                return CreatedAtAction(nameof(GetEnrollment), new { id = model.EnrollmentId }, model);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error creating new enrollment: " + ex.Message);
            }
            //await _enrollmentService.Create(model);
            //return Ok();
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] EnrollmentDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var existingEnrollment = await _enrollmentService.GetById(model.EnrollmentId);
                if (existingEnrollment == null)
                {
                    return NotFound($"Enrollment with ID {model.EnrollmentId} not found.");
                }

                await _enrollmentService.Update(model);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating enrollment: " + ex.Message);
            }
            //await _enrollmentService.Update(model);
            //return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var existingEnrollment = await _enrollmentService.GetById(id);
                if (existingEnrollment == null)
                {
                    return NotFound($"Enrollment with ID {id} not found.");
                }

                await _enrollmentService.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error deleting enrollment: " + ex.Message);
            }
        }

        //[HttpDelete("Delete/{id}")]
        //public async Task Delete(int id)
        //{
        //    await _enrollmentService.Delete(id);
        //}
    }
}
