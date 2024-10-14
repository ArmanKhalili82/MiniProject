import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTeacher, updateTeacher } from '../api/teacherApi';
import CustomDialog from './ui/Dialog';
import Button from './ui/Button';

const CreateOrUpdateTeacherDialog = ({ teacher, isOpen, onClose }) => {
    const [firstName, setFirstName] = useState(teacher?.firstName || '');
    const [lastName, setLastName] = useState(teacher?.lastName || '');

    const queryClient = useQueryClient();
    const mutation = useMutation(teacher ? updateTeacher : createTeacher, {
        onSuccess: () => {
            queryClient.invalidateQueries(['teachers']);
            onClose();
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ teacherId: teacher?.teacherId, firstName, lastName });
    };

    return (
        <CustomDialog isOpen={isOpen} onOpenChange={onClose} title={teacher ? 'Edit Teacher' : 'Add Teacher'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
                <Button type="submit" className="w-full">
                    {teacher ? 'Update' : 'Create'}
                </Button>
            </form>
        </CustomDialog>
    );
};

export default CreateOrUpdateTeacherDialog;
