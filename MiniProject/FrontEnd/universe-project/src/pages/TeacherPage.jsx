import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTeacher } from '../redux/slices/teachersSlice'; 
import TeacherList from '../components/TeacherList';
import CreateOrUpdateTeacherDialog from '../components/CreateOrUpdateTeacherDialog';
import Button from '../components/ui/Button';

const TeacherPage = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteTeacher(id));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedTeacher(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teachers</h1>
      <Button onClick={() => setDialogOpen(true)} className="mb-4 bg-blue-500 text-white">
        Add Teacher
      </Button>
      <CreateOrUpdateTeacherDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        teacher={selectedTeacher}
      />
      <TeacherList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default TeacherPage;
