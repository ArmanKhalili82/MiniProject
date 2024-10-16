using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProject.Business.StudentService;
using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet("GetStudents")]
        public async Task<ActionResult<IEnumerable<StudentDto>>> GetStudents()
        {
            var students = await _studentService.GetAllStudents();
            return Ok(students);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StudentDto>> GetStudent(int id)
        {
            var student = await _studentService.GetById(id);
            if (student == null)
            {
                return NotFound();
            }
            return student;
        }

        [HttpGet("{id}/details")]
        public async Task<ActionResult<StudentDetailDto>> GetStudentDetails(int id)
        {
            var studentDetails = await _studentService.GetStudentDetails(id);
            if (studentDetails == null)
            {
                return NotFound();
            }
            return Ok(studentDetails);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] StudentDto model)
        {
            await _studentService.Create(model);
            return Ok();
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] StudentDto model)
        {
            await _studentService.Update(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public async Task Delete(int id)
        {
            await _studentService.Delete(id);
        }
    }
}
