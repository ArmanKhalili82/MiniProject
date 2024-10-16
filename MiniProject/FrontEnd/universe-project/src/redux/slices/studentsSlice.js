import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const getStudents = createAsyncThunk('getStudents', async () => {
    const response = await axios.get('/Student/GetStudents');
    return response.data;
});

export const studentDetails = createAsyncThunk('studentDetails', async (studentId) => {
  const response = await axios.get(`/Student/${studentId}/details`);
  return response.data;
})

export const createStudent = createAsyncThunk('createStudent', async (student, {dispatch}) => {
    const response = await axios.post('/Student/Create', student);
    dispatch(getStudents());
    return response.data;
});

export const updateStudent = createAsyncThunk('updateStudent', async (student, {dispatch}) => {
    const response = await axios.put('/Student/Update', student);
    dispatch(getStudents());
    return response.data;
});


export const deleteStudent = createAsyncThunk('deleteStudent', async (studentId) => {
  if (!studentId) {
    throw new Error('Invalid ID');
  }
  await axios.delete(`/Student/Delete/${studentId}`);
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
      //Handele Student Details
      .addCase(studentDetails.fulfilled, (state, action) => {
        state.studentDetails = action.payload;
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
