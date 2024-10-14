import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createStudent, updateStudent } from '../api/studentApi';
import CustomDialog from './ui/Dialog';
import Button from './ui/Button';

const CreateOrUpdateStudentDialog = ({ student, isOpen, onClose }) => {
    const [firstName, setFirstName] = useState(student?.firstName || '');
    const [lastName, setLastName] = useState(student?.lastName || '');
    const [nationalId, setNationalId] = useState(student?.nationalId || '');

    const queryClient = useQueryClient();
    const mutation = useMutation(student ? updateStudent : createStudent, {
        onSuccess: () => {
            queryClient.invalidateQueries(['students']);
            onClose();
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ studentId: student?.studentId, firstName, lastName, nationalId });
    };

    return (
        <CustomDialog isOpen={isOpen} onOpenChange={onClose} title={student ? 'Edit Student' : 'Add Student'}>
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
                <input
                    type="text"
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    placeholder="National ID"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
                <Button type="submit" className="w-full">
                    {student ? 'Update' : 'Create'}
                </Button>
            </form>
        </CustomDialog>
    );
};

export default CreateOrUpdateStudentDialog;
