import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTeachers } from '../api/teacherApi';
import Button from './ui/Button';

const TeacherList = ({ onEdit, onDelete }) => {
    const { data: teachers, isLoading, error } = useQuery(['teachers'], fetchTeachers);

    if (isLoading) return <div>Loading teachers...</div>;
    if (error) return <div>Error loading teachers: {error.message}</div>;

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
                                <Button onClick={() => onEdit(teacher)}>Edit</Button>
                                <Button
                                    onClick={() => onDelete(teacher.teacherId)}
                                    className="bg-red-500 hover:bg-red-600 ml-2"
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

export default TeacherList;
