import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeachers = createAsyncThunk('getTeachers', async () => {
    const response = await axios.get('https://localhost:7046/api/Teacher/GetTeachers');
    return response.data;
});

export const createTeacher = createAsyncThunk('createTeacher', async (teacher) => {
    const response = await axios.post('https://localhost:7046/api/Teacher/Create', teacher);
    return response.data;
});

export const updateTeacher = createAsyncThunk('updateTeacher', async (teacher) => {
    const response = await axios.put('https://localhost:7046/api/Teacher/Update', teacher);
    return response.data;
});

export const deleteTeacher = createAsyncThunk('deleteTeacher', async (teacherId) => {
    const response = await axios.delete(`https://localhost:7046/api/Teacher/Delete/${teacherId}`);
    return teacherId;
});

const TeachersSlice = createSlice({
    name: 'teachers',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetch teachers
      .addCase(getTeachers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Handle create teacher
      .addCase(createTeacher.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Handle update teacher
      .addCase(updateTeacher.fulfilled, (state, action) => {
        const index = state.items.findIndex(teacher => teacher.teacherId === action.payload.teacherId);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Handle delete teacher
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.items = state.items.filter(teacher => teacher.teacherId !== action.payload);
      });
  },
});

export default TeachersSlice.reducer;
