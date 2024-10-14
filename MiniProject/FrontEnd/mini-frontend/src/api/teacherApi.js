import axios from './axios';

//fetch all teachers
export const fetchTeachers = async () => {
    const response = await axios.get('Teacher/GetTeachers');
    return response.data();
}

// Fetch a single teacher by ID
export const fetchTeacherById = async (id) => {
    const response = await axios.get(`/Teacher/${id}`);
    return response.data;
  };
  
  // Create a new teacher
  export const createTeacher = async (teacher) => {
    const response = await axios.post('/Teacher/Create', teacher);
    return response.data;
  };
  
  // Update an existing teacher
  export const updateTeacher = async (teacher) => {
    const response = await axios.put('/Teacher/Update', teacher);
    return response.data;
  };
  
  // Delete an teacher by ID
  export const deleteTeacher = async (id) => {
    await axios.delete(`/Teacher/Delete/${id}`);
  };