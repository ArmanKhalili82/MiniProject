import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTeachers } from '../api/teacherApi';
import { fetchCourses } from '../api/courseApi';
import { createEnrollment, updateEnrollment } from '../api/enrollmentApi';
import CustomDialog from './ui/Dialog';
import Select from './ui/Select';
import Button from './ui/Button';

const CreateOrUpdateEnrollmentDialog = ({ enrollment, isOpen, onClose }) => {
  const [studentId, setStudentId] = useState(enrollment?.studentId || '');
  const [teacherId, setTeacherId] = useState(enrollment?.teacherId || '');
  const [courseId, setCourseId] = useState(enrollment?.courseId || '');

  const queryClient = useQueryClient();

  const { data: teachers, isLoading: teachersLoading } = useQuery(['teachers'], fetchTeachers);
  const { data: courses, isLoading: coursesLoading } = useQuery(['courses'], fetchCourses);

  const mutation = useMutation(
    enrollment ? updateEnrollment : createEnrollment,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['enrollments']);
        onClose();
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEnrollment = { studentId, teacherId, courseId, enrollmentId: enrollment?.enrollmentId };
    mutation.mutate(newEnrollment);
  };

  return (
    <CustomDialog
      isOpen={isOpen}
      onOpenChange={onClose}
      title={enrollment ? 'Update Enrollment' : 'Create Enrollment'}
      triggerText={enrollment ? 'Edit' : 'Add Enrollment'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Student ID"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />

        <Select
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
          options={teachers?.map((teacher) => ({
            value: teacher.teacherId,
            label: `${teacher.firstName} ${teacher.lastName}`,
          }))}
          placeholder="Select a Teacher"
        />

        <Select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          options={courses?.map((course) => ({
            value: course.courseId,
            label: course.courseName,
          }))}
          placeholder="Select a Course"
        />

        <Button type="submit" className="w-full">
          {enrollment ? 'Update' : 'Create'}
        </Button>
      </form>
    </CustomDialog>
  );
};

export default CreateOrUpdateEnrollmentDialog;
