using Microsoft.EntityFrameworkCore;
using MiniProject.Models.Models;

namespace MiniProject.DataAccess.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Student> Students { get; set; }
    public DbSet<Teacher> Teachers { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Enrollment> Enrollments { get; set; }
    public DbSet<StudentCourse> StudentCourses { get; set; }
    public DbSet<TeacherCourse> TeacherCourses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuring the many-to-many relationship between Student and Course
        modelBuilder.Entity<StudentCourse>()
            .HasKey(sc => new { sc.StudentId, sc.CourseId });

        modelBuilder.Entity<StudentCourse>()
            .HasOne(sc => sc.Student)
            .WithMany(s => s.StudentCourses)
            .HasForeignKey(sc => sc.StudentId);

        modelBuilder.Entity<StudentCourse>()
            .HasOne(sc => sc.Course)
            .WithMany(c => c.StudentCourses)
            .HasForeignKey(sc => sc.CourseId);

        // Configuring the many-to-many relationship between Teacher and Course
        modelBuilder.Entity<TeacherCourse>()
            .HasKey(tc => new { tc.TeacherId, tc.CourseId });

        modelBuilder.Entity<TeacherCourse>()
            .HasOne(tc => tc.Teacher)
            .WithMany(t => t.TeacherCourses)
            .HasForeignKey(tc => tc.TeacherId);

        modelBuilder.Entity<TeacherCourse>()
            .HasOne(tc => tc.Course)
            .WithMany(c => c.TeacherCourses)
            .HasForeignKey(tc => tc.CourseId);

        modelBuilder.Entity<Enrollment>()
            .HasOne(e => e.Student)
            .WithMany(s => s.Enrollments)
            .HasForeignKey(e => e.StudentId);

        modelBuilder.Entity<Enrollment>()
            .HasOne(e => e.Teacher)
            .WithMany(t => t.Enrollments)
            .HasForeignKey(e => e.TeacherId);

        modelBuilder.Entity<Enrollment>()
            .HasOne(e => e.Course)
            .WithMany(c => c.Enrollments)
            .HasForeignKey(e => e.CourseId);

        // Configuring composite keys for join tables
        //modelBuilder.Entity<StudentCourse>().HasKey(sc => new { sc.StudentId, sc.CourseId });
        //modelBuilder.Entity<TeacherCourse>().HasKey(tc => new { tc.TeacherId, tc.CourseId });

        // Seed data for Students
        modelBuilder.Entity<Student>().HasData(
            new Student { StudentId = 1, FirstName = "John", LastName = "Doe", NationalId = 123456 },
            new Student { StudentId = 2, FirstName = "Jane", LastName = "Smith", NationalId = 654321 }
        );

        // Seed data for Teachers
        modelBuilder.Entity<Teacher>().HasData(
            new Teacher { TeacherId = 1, FirstName = "Alice", LastName = "Johnson" },
            new Teacher { TeacherId = 2, FirstName = "Bob", LastName = "Brown" }
        );

        // Seed data for Courses
        modelBuilder.Entity<Course>().HasData(
            new Course { CourseId = 1, CourseName = "Mathematics", Unit = 3 },
            new Course { CourseId = 2, CourseName = "Physics", Unit = 4 }
        );

        // Seed data for Enrollments
        modelBuilder.Entity<Enrollment>().HasData(
            new Enrollment { EnrollmentId = 1, StudentId = 1, TeacherId = 1, CourseId = 1 },
            new Enrollment { EnrollmentId = 2, StudentId = 2, TeacherId = 2, CourseId = 2 }
        );

        // Seed data for StudentCourse (many-to-many relationship)
        modelBuilder.Entity<StudentCourse>().HasData(
            new StudentCourse { StudentId = 1, CourseId = 1 },
            new StudentCourse { StudentId = 2, CourseId = 2 }
        );

        // Seed data for TeacherCourse (many-to-many relationship)
        modelBuilder.Entity<TeacherCourse>().HasData(
            new TeacherCourse { TeacherId = 1, CourseId = 1 },
            new TeacherCourse { TeacherId = 2, CourseId = 2 }
        );
    }
}
