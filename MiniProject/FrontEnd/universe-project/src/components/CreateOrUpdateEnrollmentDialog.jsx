import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../redux/slices/studentsSlice';
import { getTeachers } from '../redux/slices/teachersSlice';
import { getCourses } from '../redux/slices/coursesSlice'; 
import { createEnrollment, updateEnrollment } from '../redux/slices/enrollmentsSlice'; 
import CustomDialog from './ui/Dialog';
import Button from './ui/Button';

const CreateOrUpdateEnrollmentDialog = ({ isOpen, onClose, enrollment }) => {
    const [studentId, setStudentId] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [courseId, setCourseId] = useState('');
    const dispatch = useDispatch();
  
    const { items: students } = useSelector((state) => state.students)
    const { items: teachers } = useSelector((state) => state.teachers);
    const { items: courses } = useSelector((state) => state.courses);
  
    useEffect(() => {
      if (isOpen) {
        dispatch(getStudents());
        dispatch(getTeachers());
        dispatch(getCourses());
      }
  
      if (enrollment) {
        setStudentId(enrollment.studentId);
        setTeacherId(enrollment.teacherId);
        setCourseId(enrollment.courseId);
      } else {
        setStudentId('');
        setTeacherId('');
        setCourseId('');
      }
    }, [isOpen, enrollment, dispatch]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const enrollmentData = {
        enrollmentId: enrollment?.enrollmentId,
        studentId: parseInt(studentId, 10),
        teacherId: parseInt(teacherId, 10),
        courseId: parseInt(courseId, 10),
      };
  
      if (enrollment) {
        dispatch(updateEnrollment(enrollmentData));
      } else {
        dispatch(createEnrollment(enrollmentData));
      }
  
      onClose();
    };
  
    return (
      <CustomDialog isOpen={isOpen} onOpenChange={onClose} title={enrollment ? 'Edit Enrollment' : 'Add Enrollment'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <input
            type="number"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Student ID"
            className="w-full px-3 py-2 border rounded-lg"
            required
          /> */}

          <select
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select a Student</option>
            {students.map((student) => (
              <option key={student.studentId} value={student.studentId}>
                {student.firstName} {student.lastName}
              </option>
            ))}
          </select>

          <select
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select a Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.teacherId} value={teacher.teacherId}>
                {teacher.firstName} {teacher.lastName}
              </option>
            ))}
          </select>
          <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select a Course</option>
            {courses.map((course) => (
              <option key={course.courseId} value={course.courseId}>
                {course.courseName}
              </option>
            ))}
          </select>
          <Button type="submit" className="w-full">
            {enrollment ? 'Update' : 'Create'}
          </Button>
        </form>
      </CustomDialog>
    );
  };

export default CreateOrUpdateEnrollmentDialog;
