import React, { useState } from 'react';
import StudentList from '../components/StudentList';
import CreateOrUpdateStudentDialog from '../components/CreateOrUpdateStudentDialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteStudent } from '../api/studentApi';

const StudentPage = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const queryClient = useQueryClient();

    const deleteMutation = useMutation(deleteStudent, {
        onSuccess: () => queryClient.invalidateQueries(['students']),
    });

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setDialogOpen(true);
    };

    const handleDelete = (id) => {
        deleteMutation.mutate(id);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedStudent(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Students</h1>
            <button
                onClick={() => setDialogOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Student
            </button>
            <CreateOrUpdateStudentDialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                student={selectedStudent}
            />
            <StudentList onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default StudentPage;
