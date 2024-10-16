import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studentDetails } from '../redux/slices/studentsSlice';
import { deleteStudent } from '../redux/slices/studentsSlice'; 
import StudentList from '../components/StudentList';
import CreateOrUpdateStudentDialog from '../components/CreateOrUpdateStudentDialog';
import StudentDetailDialog from '../components/StudentDetailDialog';
import Button from '../components/ui/Button';

const StudentPage = () => {
  const [isCreateOrUpdateDialogOpen, setCreateOrUpdateDialogOpen] = useState(false);
  const [isDetailDialogOpen, setDetailDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const getstudentDetails = useSelector((state) => state.students.studentDetails);
  const dispatch = useDispatch();


  const handleDetails = (studentId) => {
    setSelectedStudentId(studentId);
    setDetailDialogOpen(true);
    dispatch(studentDetails(studentId));
  };
  const handleEdit = (student) => {
    setSelectedStudent(student);
    setCreateOrUpdateDialogOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleCreateOrUpdateDialogClose = () => {
    setCreateOrUpdateDialogOpen(false);
    setSelectedStudent(null);
  };

  // Handle closing the details dialog
  const handleDetailDialogClose = () => {
    setDetailDialogOpen(false);
    setSelectedStudentId(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <Button onClick={() => setCreateOrUpdateDialogOpen(true)} className="mb-4 bg-blue-500 text-white">
        Add Student
      </Button>
      <CreateOrUpdateStudentDialog
        isOpen={isCreateOrUpdateDialogOpen}
        onClose={handleCreateOrUpdateDialogClose}
        student={selectedStudent}
      />
      <StudentDetailDialog
        isOpen={isDetailDialogOpen}
        onClose={handleDetailDialogClose}
        studentId={selectedStudentId}
        studentDetails={getstudentDetails}
        getStudentDetails={(id) => dispatch(studentDetails(id))}
      />
      <StudentList onEdit={handleEdit} onDelete={handleDelete} onDetail={handleDetails} />
      
    </div>
  );
};

export default StudentPage;
