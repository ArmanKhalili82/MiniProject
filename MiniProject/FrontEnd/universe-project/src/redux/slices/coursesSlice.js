import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCourses = createAsyncThunk('getCourses', async () => {
    const response = await axios.get('https://localhost:7046/api/Course/GetCourses');
    return response.data;
});

export const createCourse = createAsyncThunk('createCourse', async (course, {dispatch}) => {
    const response = await axios.post('https://localhost:7046/api/Course/Create', course);
    dispatch(getCourses());
    return response.data;
});

export const updateCourse = createAsyncThunk('updateCourse', async (course, {dispatch}) => {
    const response = await axios.put('https://localhost:7046/api/Course/Update', course);
    dispatch(getCourses());
    return response.data;
});

export const deleteCourse = createAsyncThunk('deleteCourse', async (courseId) => {
    if (!courseId) {
      throw new Error('Invalid ID');
    }
    await axios.delete(`https://localhost:7046/api/Course/Delete/${courseId}`);
    return courseId;
});

const CoursesSlice = createSlice({
    name: 'courses',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetch courses
      .addCase(getCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Handle create course
      .addCase(createCourse.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Handle update course
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.items.findIndex(course => course.courseId === action.payload.courseId);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Handle delete course
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.items = state.items.filter(course => course.courseId !== action.payload);
      });
  },
});

export default CoursesSlice.reducer;
