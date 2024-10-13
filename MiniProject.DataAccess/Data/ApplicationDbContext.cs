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
    }
}
