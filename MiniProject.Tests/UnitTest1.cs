using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using MiniProject.Business.CourseService;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Dtos;

namespace MiniProject.Tests
{
    public class UnitTest1
    {
        [Fact]
        public async void Test1()
        {
            var _contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase("CourseServiceTest")
                .ConfigureWarnings(a =>
                    a.Ignore(InMemoryEventId.TransactionIgnoredWarning))
                .Options;

            using var context = new ApplicationDbContext(_contextOptions);

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            context.SaveChanges();

            var course = new CourseService(context);

            var newCourseDto = new CourseDto
            {
                CourseName = "Test Course",
                Unit = 3
            };

            await course.Create(newCourseDto);


            var courses = context.Courses.ToList();
            Assert.Equal(3, courses.Count);
            Assert.Equal("Test Course", courses[2].CourseName);
            Assert.Equal(3, courses[2].Unit);
        }
    }
}