import axios from './axios';

// Fetch all enrollments
export const fetchEnrollments = async () => {
  const response = await axios.get('/Enrollment/GetEnrollments');
  return response.data;
};

// Fetch a single enrollment by ID
export const fetchEnrollmentById = async (id) => {
  const response = await axios.get(`/Enrollment/${id}`);
  return response.data;
};

// Create a new enrollment
export const createEnrollment = async (enrollment) => {
  const response = await axios.post('/Enrollment/Create', enrollment);
  return response.data;
};

// Update an existing enrollment
export const updateEnrollment = async (enrollment) => {
  const response = await axios.put('/Enrollment/Update', enrollment);
  return response.data;
};

// Delete an enrollment by ID
export const deleteEnrollment = async (id) => {
  await axios.delete(`/Enrollment/Delete/${id}`);
};
