import axios from './axios';

//fetch all students
export const fetchStudents = async () => {
    const response = await axios.get('Student/GetStudents');
    return response.data();
}

// Fetch a single student by ID
export const fetchStudentById = async (id) => {
    const response = await axios.get(`/Student/${id}`);
    return response.data;
  };
  
  // Create a new student
  export const createStudent = async (student) => {
    const response = await axios.post('/Student/Create', student);
    return response.data;
  };
  
  // Update an existing student
  export const updateStudent = async (student) => {
    const response = await axios.put('/Student/Update', student);
    return response.data;
  };
  
  // Delete an student by ID
  export const deleteStudent = async (id) => {
    await axios.delete(`/Student/Delete/${id}`);
  };