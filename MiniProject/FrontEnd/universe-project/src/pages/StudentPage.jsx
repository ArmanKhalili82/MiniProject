import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/slices/studentsSlice'; 
import StudentList from '../components/StudentList';
import CreateOrUpdateStudentDialog from '../components/CreateOrUpdateStudentDialog';
import Button from '../components/ui/Button';

const StudentPage = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedStudent(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <Button onClick={() => setDialogOpen(true)} className="mb-4 bg-blue-500 text-white">
        Add Student
      </Button>
      <CreateOrUpdateStudentDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        student={selectedStudent}
      />
      <StudentList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default StudentPage;
