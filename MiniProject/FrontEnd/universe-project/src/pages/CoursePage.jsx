import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../redux/slices/coursesSlice'; 
import CourseList from '../components/CourseList';
import CreateOrUpdateCourseDialog from '../components/CreateOrUpdateCourseDialog';
import Button from '../components/ui/Button';

const CoursePage = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Button onClick={() => setDialogOpen(true)} className="mb-4 bg-blue-500 text-white">
        Add Course
      </Button>
      <CreateOrUpdateCourseDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        course={selectedCourse}
      />
      <CourseList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default CoursePage;
