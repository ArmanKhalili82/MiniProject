import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../api/courseApi';
import Button from './ui/Button';

const CourseList = ({ onEdit, onDelete }) => {
    const { data: courses, isLoading, error } = useQuery(['courses'], fetchCourses);

    if (isLoading) return <div>Loading courses...</div>;
    if (error) return <div>Error loading courses: {error.message}</div>;

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
                                <Button onClick={() => onEdit(course)}>Edit</Button>
                                <Button
                                    onClick={() => onDelete(course.courseId)}
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

export default CourseList;
