﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MiniProject.Models.Models;

public class Student
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int StudentId { get; set; }
    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }
    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }
    public int NationalId { get; set; }
    public List<StudentCourse> StudentCourses { get; set; }
    public List<Enrollment> Enrollments { get; set; }
}
