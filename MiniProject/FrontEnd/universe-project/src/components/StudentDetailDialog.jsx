import React, { useEffect } from 'react';
import CustomDialog from './ui/Dialog';
import Button from './ui/Button';

const StudentDetailDialog = ({ isOpen, onClose, studentId, studentDetails, getStudentDetails }) => {
  useEffect(() => {
    if (isOpen && studentId) {
      getStudentDetails(studentId);
    }
  }, [isOpen, studentId, getStudentDetails]);

  if (!studentDetails) return null;

  const courses = studentDetails.courses || [];
  const teachers = studentDetails.teachers || [];


  return (
    <CustomDialog isOpen={isOpen} onOpenChange={onClose} title="Student Details">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">Student Name</h2>
          <p>{studentDetails.firstName} {studentDetails.lastName}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Courses</h2>
          <ul className="list-disc ml-6">
            {courses.map((course) => (
              <li key={course.courseId}>{course.courseName}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Teachers</h2>
          <ul className="list-disc ml-6">
            {teachers.map((teacher) => (
              <li key={teacher.teacherId}>{teacher.firstName} {teacher.lastName}</li>
            ))}
          </ul>
        </div>
        <Button onClick={onClose} className="mt-4">Close</Button>
      </div>
    </CustomDialog>
  );
};

export default StudentDetailDialog;
