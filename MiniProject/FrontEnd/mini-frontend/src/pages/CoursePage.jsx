import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CourseList from '../components/CourseList';
import CreateOrUpdateCourseDialog from '../components/CreateOrUpdateCourseDialog';
import { deleteCourse } from '../api/courseApi';
import Button from '../components/ui/Button';

const CoursePage = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const queryClient = useQueryClient();

    const deleteMutation = useMutation(deleteCourse, {
        onSuccess: () => {
            queryClient.invalidateQueries(['courses']);
        },
    });

    const handleEdit = (course) => {
        setSelectedCourse(course);
        setDialogOpen(true);
    };

    const handleDelete = (id) => {
        deleteMutation.mutate(id);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedCourse(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Courses</h1>
            <Button onClick={() => setDialogOpen(true)} className="mb-4">
                Add Course
            </Button>
            <CreateOrUpdateCourseDialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                course={selectedCourse}
            />
            <CourseList onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default CoursePage;
