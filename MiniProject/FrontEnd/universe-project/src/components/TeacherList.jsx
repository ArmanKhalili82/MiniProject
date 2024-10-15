import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers } from '../redux/slices/teachersSlice'; 
import Button from './ui/Button';

const TeacherList = ({ onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.items);
  const status = useSelector((state) => state.teachers.status);
  const error = useSelector((state) => state.teachers.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getTeachers());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading teachers...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.teacherId}>
              <td className="py-2 px-4 border-b">{teacher.firstName}</td>
              <td className="py-2 px-4 border-b">{teacher.lastName}</td>
              <td className="py-2 px-4 border-b">
                <Button onClick={() => onEdit(teacher)} className="mr-2">Edit</Button>
                <Button onClick={() => onDelete(teacher.teacherId)} className="bg-red-500 hover:bg-red-600">
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

export default TeacherList;
