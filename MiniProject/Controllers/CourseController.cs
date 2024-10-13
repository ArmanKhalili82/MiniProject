using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiniProject.Business.CourseService;
using MiniProject.Models.Models;

namespace MiniProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _courseService;

        public CourseController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet("GetCourses")]
        public async Task<IActionResult> GetCourses()
        {
            var courses = await _courseService.GetAllCourses();
            return Ok(courses);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var course = await _courseService.GetById(id);
            if (course == null)
            {
                return NotFound();
            }
            return course;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Course model)
        {
            await _courseService.Create(model);
            return Ok();
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] Course model)
        {
            await _courseService.Update(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public async Task Delete(int id)
        {
            await _courseService.Delete(id);
        }
    }
}
