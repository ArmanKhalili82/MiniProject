import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createStudent, updateStudent } from '../redux/slices/studentsSlice';
import CustomDialog from './ui/Dialog';
import Button from './ui/Button'; 

const CreateOrUpdateStudentDialog = ({ isOpen, onClose, student }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalId, setNationalId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (student) {
      setFirstName(student.firstName);
      setLastName(student.lastName);
      setNationalId(student.nationalId);
    } else {
      setFirstName('');
      setLastName('');
      setNationalId(0);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      studentId: student?.studentId,
      firstName,
      lastName,
      nationalId
    };

    if (student) {
      dispatch(updateStudent(studentData));
    } else {
      dispatch(createStudent(studentData));
    }

    onClose();
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
          type="number"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
          placeholder="National Id"
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
