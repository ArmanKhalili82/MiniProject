import React from 'react';
import Button from './ui/Button';

const DataTable = ({ data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Student</th>
            <th className="py-2 px-4 border-b">Teacher</th>
            <th className="py-2 px-4 border-b">Course</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.enrollmentId}>
              <td className="py-2 px-4 border-b">{item.student.firstName} {item.student.lastName}</td>
              <td className="py-2 px-4 border-b">{item.teacher.firstName} {item.teacher.lastName}</td>
              <td className="py-2 px-4 border-b">{item.course.courseName}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <Button onClick={() => onEdit(item)}>Edit</Button>
                <Button onClick={() => onDelete(item.enrollmentId)} className="bg-red-500 hover:bg-red-600">
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

export default DataTable;
