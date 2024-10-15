import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudents = createAsyncThunk('getStudents', async () => {
    const response = await axios.get('https://localhost:7046/api/Student/GetStudents');
    return response.data;
});

export const createStudent = createAsyncThunk('createStudent', async (student) => {
    const response = await axios.post('https://localhost:7046/api/Student/Create', student);
    return response.data;
});

export const updateStudent = createAsyncThunk('updateStudent', async (student) => {
    const response = await axios.put('https://localhost:7046/api/Student/Update', student);
    return response.data;
});


export const deleteStudent = createAsyncThunk('deleteStudent', async (studentId) => {
  if (!studentId) {
    throw new Error('Invalid ID');
  }
  await axios.delete(`https://localhost:7046/api/Student/Delete/${studentId}`);
  return studentId;
});
// export const deleteStudent = createAsyncThunk('deleteStudent', async (studentId) => {
//     const response = await axios.delete(`https://localhost:7046/api/Student/Delete/${studentId}`);
//     return studentId;
// });

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetch students
      .addCase(getStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Handle create student
      .addCase(createStudent.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Handle update student
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.items.findIndex(student => student.studentId === action.payload.studentId);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Handle delete student
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.items = state.items.filter(student => student.studentId !== action.payload);
      });
  },
});

export default studentsSlice.reducer;
