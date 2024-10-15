import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../redux/slices/coursesSlice'; 
import Button from './ui/Button';

const CourseList = ({ onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.items);
  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCourses());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading courses...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Course Name</th>
            <th className="py-2 px-4 border-b">Units</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              <td className="py-2 px-4 border-b">{course.courseName}</td>
              <td className="py-2 px-4 border-b">{course.unit}</td>
              <td className="py-2 px-4 border-b">
                <Button onClick={() => onEdit(course)} className="mr-2">Edit</Button>
                <Button onClick={() => onDelete(course.courseId)} className="bg-red-500 hover:bg-red-600">
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

export default CourseList;
