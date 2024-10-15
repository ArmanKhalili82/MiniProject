import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../redux/slices/studentsSlice';
import Button from './ui/Button';

const StudentList = ({ onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.items);
  const status = useSelector((state) => state.students.status);
  const error = useSelector((state) => state.students.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getStudents());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading students...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">National Id</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td className="py-2 px-4 border-b">{student.firstName}</td>
              <td className="py-2 px-4 border-b">{student.lastName}</td>
              <td className="py-2 px-4 border-b">{student.nationalId}</td>
              <td className="py-2 px-4 border-b">
                <Button onClick={() => onEdit(student)}>Edit</Button>
                <Button onClick={() => onDelete(student.studentId)} className="bg-red-500 hover:bg-red-600 ml-2">
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

export default StudentList;
