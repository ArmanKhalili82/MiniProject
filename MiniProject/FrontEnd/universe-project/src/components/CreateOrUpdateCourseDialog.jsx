import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createCourse, updateCourse } from '../redux/slices/coursesSlice'; 
import CustomDialog from './ui/Dialog';
import Button from './ui/Button';

const CreateOrUpdateCourseDialog = ({ isOpen, onClose, course }) => {
  const [courseName, setCourseName] = useState('');
  const [unit, setUnit] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (course) {
      setCourseName(course.courseName);
      setUnit(course.unit);
    } else {
      setCourseName('');
      setUnit('');
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      courseId: course?.courseId,
      courseName,
      unit: parseInt(unit, 10),
    };

    if (course) {
      dispatch(updateCourse(courseData));
    } else {
      dispatch(createCourse(courseData));
    }

    onClose();
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
          placeholder="Unit"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <Button type="submit" className="w-full">
          {course ? 'Update' : 'Create'}
        </Button>
      </form>
    </CustomDialog>
  );
};

export default CreateOrUpdateCourseDialog;
