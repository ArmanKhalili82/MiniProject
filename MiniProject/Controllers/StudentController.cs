using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProject.Business.StudentService;
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
        public async Task<IActionResult> GetStudents()
        {
            var students = await _studentService.GetAllStudents();
            return Ok(students);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var student = await _studentService.GetById(id);
            if (student == null)
            {
                return NotFound();
            }
            return student;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Student model)
        {
            await _studentService.Create(model);
            return Ok();
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] Student model)
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
