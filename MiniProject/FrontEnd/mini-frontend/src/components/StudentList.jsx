import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchStudents } from '../api/studentApi';
import Button from './ui/Button';

const StudentList = ({ onEdit, onDelete }) => {
    const { data: students, isLoading } = useQuery(['students'], fetchStudents);

    if (isLoading) return <div>Loading students...</div>;

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
                    {students.map((student) => (
                        <tr key={student.studentId}>
                            <td className="py-2 px-4 border-b">{student.firstName}</td>
                            <td className="py-2 px-4 border-b">{student.lastName}</td>
                            <td className="py-2 px-4 border-b">
                                <Button onClick={() => onEdit(student)}>Edit</Button>
                                <Button
                                    onClick={() => onDelete(student.studentId)}
                                    className="bg-red-500 hover:bg-red-600"
                                >
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
