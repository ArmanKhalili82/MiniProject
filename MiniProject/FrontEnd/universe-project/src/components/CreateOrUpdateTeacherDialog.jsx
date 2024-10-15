import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTeacher, updateTeacher } from '../redux/slices/teachersSlice'; 
import CustomDialog from './ui/Dialog';
import Button from './ui/Button';

const CreateOrUpdateTeacherDialog = ({ isOpen, onClose, teacher }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (teacher) {
      setFirstName(teacher.firstName);
      setLastName(teacher.lastName);
    } else {
      setFirstName('');
      setLastName('');
    }
  }, [teacher]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacherData = {
      teacherId: teacher?.teacherId,
      firstName,
      lastName,
    };

    if (teacher) {
      dispatch(updateTeacher(teacherData));
    } else {
      dispatch(createTeacher(teacherData));
    }

    onClose();
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
