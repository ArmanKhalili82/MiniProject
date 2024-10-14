import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchEnrollments, deleteEnrollment } from '../api/enrollmentApi';

const EnrollmentList = () => {
  const queryClient = useQueryClient();

  // Fetch all enrollments using react-query
  const { data: enrollments, isLoading, error } = useQuery(['enrollments'], fetchEnrollments);

  // Delete enrollment mutation
  const deleteMutation = useMutation(deleteEnrollment, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['enrollments']);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Enrollments</h2>
      <ul>
        {enrollments.map((enrollment) => (
          <li key={enrollment.enrollmentId}>
            {enrollment.student.firstName} - {enrollment.course.CourseName} - {enrollment.teacher.firstName}
            <button onClick={() => deleteMutation.mutate(enrollment.enrollmentId)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentList;
