import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TeacherList from '../components/TeacherList';
import CreateOrUpdateTeacherDialog from '../components/CreateOrUpdateTeacherDialog';
import { deleteTeacher } from '../api/teacherApi';
import Button from '../components/ui/Button';

const TeacherPage = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const queryClient = useQueryClient();

    const deleteMutation = useMutation(deleteTeacher, {
        onSuccess: () => {
            queryClient.invalidateQueries(['teachers']);
        },
    });

    const handleEdit = (teacher) => {
        setSelectedTeacher(teacher);
        setDialogOpen(true);
    };

    const handleDelete = (id) => {
        deleteMutation.mutate(id);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedTeacher(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Teachers</h1>
            <Button onClick={() => setDialogOpen(true)} className="mb-4">
                Add Teacher
            </Button>
            <CreateOrUpdateTeacherDialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                teacher={selectedTeacher}
            />
            <TeacherList onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default TeacherPage;
