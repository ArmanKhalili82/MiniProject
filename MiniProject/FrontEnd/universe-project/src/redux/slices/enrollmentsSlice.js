import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEnrollments = createAsyncThunk('getEnrollments', async () => {
    const response = await axios.get('https://localhost:7046/api/Enrollment/GetEnrollments');
    return response.data;
});

export const createEnrollment = createAsyncThunk('createEnrollment', async (enrollment) => {
    const response = await axios.post('https://localhost:7046/api/Enrollment/Create', enrollment);
    return response.data;
});

export const updateEnrollment = createAsyncThunk('updateEnrollment', async (enrollment) => {
    const response = await axios.put('https://localhost:7046/api/Enrollment/Update', enrollment);
    return response.data;
});

export const deleteEnrollment = createAsyncThunk('deleteEnrollment', async (enrollmentId) => {
    const response = await axios.delete(`https://localhost:7046/api/Student/Delete/${enrollmentId}`);
    return enrollmentId;
});

const enrollmentSlice = createSlice({
    name: 'enrollments',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetch enrollments
      .addCase(getEnrollments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getEnrollments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getEnrollments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Handle create enrollment
      .addCase(createEnrollment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Handle update enrollment
      .addCase(updateEnrollment.fulfilled, (state, action) => {
        const index = state.items.findIndex(enrollment => enrollment.enrollmentId === action.payload.enrollmentId);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Handle delete enrollment
      .addCase(deleteEnrollment.fulfilled, (state, action) => {
        state.items = state.items.filter(enrollment => enrollment.enrollmentId !== action.payload);
      });
  },
});

export default enrollmentSlice.reducer;
