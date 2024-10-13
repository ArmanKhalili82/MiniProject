using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProject.Business.StudentService;
using MiniProject.Business.TeacherService;
using MiniProject.Models.Models;

namespace MiniProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService _teacherService;

        public TeacherController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }

        [HttpGet("GetTeachers")]
        public async Task<IActionResult> GetTeachers()
        {
            var teachers = await _teacherService.GetAllTeachers();
            return Ok(teachers);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Teacher>> GetTeacher(int id)
        {
            var teacher = await _teacherService.GetById(id);
            if (teacher == null)
            {
                return NotFound();
            }
            return teacher;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Teacher model)
        {
            await _teacherService.Create(model);
            return Ok();
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] Teacher model)
        {
            await _teacherService.Update(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public async Task Delete(int id)
        {
            await _teacherService.Delete(id);
        }
    }
}
