import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">School Management System</h1>
            <nav className="space-y-2">
                <Link to="/students" className="block bg-blue-500 text-white px-4 py-2 rounded">
                    Students
                </Link>
                <Link to="/teachers" className="block bg-blue-500 text-white px-4 py-2 rounded">
                    Teachers
                </Link>
                <Link to="/courses" className="block bg-blue-500 text-white px-4 py-2 rounded">
                    Courses
                </Link>
                <Link to="/enrollments" className="block bg-blue-500 text-white px-4 py-2 rounded">
                    Enrollments
                </Link>
            </nav>
        </div>
    );
};

export default HomePage;
