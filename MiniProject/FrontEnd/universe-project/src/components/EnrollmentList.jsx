import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEnrollments } from '../redux/slices/enrollmentsSlice'; 
import Button from './ui/Button';

const EnrollmentList = ({ onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const enrollments = useSelector((state) => state.enrollments.items);
  const status = useSelector((state) => state.enrollments.status);
  const error = useSelector((state) => state.enrollments.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getEnrollments());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading enrollments...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Student ID</th>
            <th className="py-2 px-4 border-b">Teacher ID</th>
            <th className="py-2 px-4 border-b">Course ID</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment.enrollmentId}>
              <td className="py-2 px-4 border-b">{enrollment.student.firstName}</td>
              <td className="py-2 px-4 border-b">{enrollment.teacher.firstName}</td>
              <td className="py-2 px-4 border-b">{enrollment.course.courseName}</td>
              <td className="py-2 px-4 border-b">
                <Button onClick={() => onEdit(enrollment)} className="mr-2">Edit</Button>
                <Button onClick={() => onDelete(enrollment.enrollmentId)} className="bg-red-500 hover:bg-red-600">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentList;
