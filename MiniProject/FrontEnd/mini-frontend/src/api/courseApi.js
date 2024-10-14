import axios from './axios';

//fetch all courses
export const fetchCourses = async () => {
    const response = await axios.get('Course/GetTeachers');
    return response.data();
}

// Fetch a single course by ID
export const fetchCourserById = async (id) => {
    const response = await axios.get(`/Course/${id}`);
    return response.data;
  };
  
  // Create a new course
  export const createCourse = async (course) => {
    const response = await axios.post('/Course/Create', course);
    return response.data;
  };
  
  // Update an existing course
  export const updateCourse = async (course) => {
    const response = await axios.put('/Course/Update', course);
    return response.data;
  };
  
  // Delete an course by ID
  export const deleteCourse = async (id) => {
    await axios.delete(`/Course/Delete/${id}`);
  };