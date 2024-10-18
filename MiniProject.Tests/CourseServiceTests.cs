using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using MiniProject.Business.CourseService;
using MiniProject.DataAccess.Data;
using MiniProject.Models.Dtos;
using MiniProject.Models.Models;

namespace MiniProject.Tests
{
    public class CourseServiceTests
    {
        private DbContextOptions<ApplicationDbContext> GetInMemoryDbOptions()
        {
            return new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase($"CourseServiceTest_{System.Guid.NewGuid()}")
                .Options;
        }

        [Fact]
        public async Task Create_AddCourse()
        {
            // Arrange
            var options = GetInMemoryDbOptions();
            using var context = new ApplicationDbContext(options);
            var courseService = new CourseService(context);

            var newCourseDto = new CourseDto
            {
                CourseName = "Test Course",
                Unit = 3
            };

            // Act
            await courseService.Create(newCourseDto);

            // Assert
            var courses = await context.Courses.ToListAsync();
            Assert.Single(courses);
            Assert.Equal(1, courses.Count);
            Assert.Equal("Test Course", courses[0].CourseName);
            Assert.Equal(3, courses[0].Unit);
        }

        [Fact]
        public async Task GetAllCourses_ShouldReturnAllCourses()
        {
            // Arrange
            var options = GetInMemoryDbOptions();
            using var context = new ApplicationDbContext(options);
            var courseService = new CourseService(context);

            context.Courses.AddRange(
                new Course { CourseName = "Course 1", Unit = 3 },
                new Course { CourseName = "Course 2", Unit = 4 }
            );
            await context.SaveChangesAsync();

            // Act
            var courses = await courseService.GetAllCourses();

            // Assert
            Assert.Equal(2, courses.Count);
        }

        [Fact]
        public async Task GetByIdTests()
        {
            // Arrange
            var options = GetInMemoryDbOptions();
            using var context = new ApplicationDbContext(options);
            var courseService = new CourseService(context);

            var course = new Course { CourseName = "Test Course", Unit = 3 };
            context.Courses.Add(course);
            await context.SaveChangesAsync();

            // Act
            var result = await courseService.GetById(course.CourseId);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test Course", result.CourseName);
            Assert.Equal(3, result.Unit);
        }

        [Fact]
        public async Task Update_ShouldModifyCourse()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase($"CourseServiceTest_{Guid.NewGuid()}")
                .Options;

            using var context = new ApplicationDbContext(options);
            var courseService = new CourseService(context);

            var course = new Course { CourseName = "Old Course", Unit = 2 };
            context.Courses.Add(course);
            await context.SaveChangesAsync();

            var updatedCourseDto = new CourseDto
            {
                CourseId = course.CourseId,  // Ensure we're using the correct ID
                CourseName = "Updated Course",
                Unit = 5
            };

            // Act
            await courseService.Update(updatedCourseDto);

            // Assert
            var updatedCourse = await context.Courses.FindAsync(course.CourseId);
            Assert.NotNull(updatedCourse);
            Assert.Equal("Updated Course", updatedCourse.CourseName);
            Assert.Equal(5, updatedCourse.Unit);
        }

        [Fact]
        public async Task Delete_ShouldRemoveCourse()
        {
            // Arrange
            var options = GetInMemoryDbOptions();
            using var context = new ApplicationDbContext(options);
            var courseService = new CourseService(context);

            var course = new Course { CourseName = "Course to Delete", Unit = 3 };
            context.Courses.Add(course);
            await context.SaveChangesAsync();

            // Act
            await courseService.Delete(course.CourseId);

            // Assert
            var deletedCourse = await context.Courses.FindAsync(course.CourseId);
            Assert.Null(deletedCourse);
        }










        //[Fact]
        //public async void Test1()
        //{
        //    var _contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
        //        .UseInMemoryDatabase("CourseServiceTest")
        //        .ConfigureWarnings(a =>
        //            a.Ignore(InMemoryEventId.TransactionIgnoredWarning))
        //        .Options;

        //    using var context = new ApplicationDbContext(_contextOptions);

        //    context.Database.EnsureDeleted();
        //    context.Database.EnsureCreated();

        //    context.SaveChanges();

        //    var course = new CourseService(context);

        //    var newCourseDto = new CourseDto
        //    {
        //        CourseName = "Test Course",
        //        Unit = 3
        //    };

        //    await course.Create(newCourseDto);


        //    var courses = context.Courses.ToList();
        //    Assert.Equal(3, courses.Count);
        //    Assert.Equal("Test Course", courses[2].CourseName);
        //    Assert.Equal(3, courses[2].Unit);
        //}
    }
}