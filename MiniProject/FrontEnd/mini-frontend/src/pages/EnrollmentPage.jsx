import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import DataTable from '../components/DataTable';
import CreateOrUpdateEnrollmentDialog from '../components/CreateOrUpdateEnrollmentDialog';
import { fetchEnrollments, deleteEnrollment } from '../api/enrollmentApi';

const EnrollmentPage = () => {
  const queryClient = useQueryClient();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);

  const { data: enrollments, isLoading } = useQuery(['enrollments'], fetchEnrollments);
  const deleteMutation = useMutation(deleteEnrollment, {
    onSuccess: () => queryClient.invalidateQueries(['enrollments']),
  });

  const handleEdit = (enrollment) => {
    setSelectedEnrollment(enrollment);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Enrollments</h1>
      <button onClick={() => setDialogOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Add Enrollment</button>
      <CreateOrUpdateEnrollmentDialog
        isOpen={isDialogOpen}
        onOpenChange={() => setDialogOpen(false)}
        enrollment={selectedEnrollment}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DataTable data={enrollments} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default EnrollmentPage;
