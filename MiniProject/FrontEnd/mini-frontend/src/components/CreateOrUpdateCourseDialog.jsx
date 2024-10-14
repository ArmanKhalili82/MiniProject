import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCourse, updateCourse } from '../api/courseApi';
import CustomDialog from './ui/Dialog';
import Button from './ui/Button';

const CreateOrUpdateCourseDialog = ({ course, isOpen, onClose }) => {
    const [courseName, setCourseName] = useState(course?.courseName || '');
    const [unit, setUnit] = useState(course?.unit || '');

    const queryClient = useQueryClient();
    const mutation = useMutation(course ? updateCourse : createCourse, {
        onSuccess: () => {
            queryClient.invalidateQueries(['courses']);
            onClose();
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ courseId: course?.courseId, courseName, unit: parseInt(unit, 10) });
    };

    return (
        <CustomDialog isOpen={isOpen} onOpenChange={onClose} title={course ? 'Edit Course' : 'Add Course'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Course Name"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
                <input
                    type="number"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="Units"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                    min="1"
                />
                <Button type="submit" className="w-full">
                    {course ? 'Update' : 'Create'}
                </Button>
            </form>
        </CustomDialog>
    );
};

export default CreateOrUpdateCourseDialog;
