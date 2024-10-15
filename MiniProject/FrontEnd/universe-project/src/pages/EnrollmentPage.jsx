import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEnrollment } from '../redux/slices/enrollmentsSlice'; 
import EnrollmentList from '../components/EnrollmentList';
import CreateOrUpdateEnrollmentDialog from '../components/CreateOrUpdateEnrollmentDialog';
import Button from '../components/ui/Button';

const EnrollmentPage = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (enrollment) => {
    setSelectedEnrollment(enrollment);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteEnrollment(id));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedEnrollment(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Enrollments</h1>
      <Button onClick={() => setDialogOpen(true)} className="mb-4 bg-blue-500 text-white">
        Add Enrollment
      </Button>
      <CreateOrUpdateEnrollmentDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        enrollment={selectedEnrollment}
      />
      <EnrollmentList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default EnrollmentPage;
