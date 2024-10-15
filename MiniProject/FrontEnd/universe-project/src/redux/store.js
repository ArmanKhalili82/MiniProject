import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './slices/studentsSlice';
import teachersReducer from './slices/teachersSlice';
import coursesReducer from './slices/coursesSlice';
import enrollmentsReducer from './slices/enrollmentsSlice';

const store = configureStore({
  reducer: {
    students: studentsReducer,
    teachers: teachersReducer,
    courses: coursesReducer,
    enrollments: enrollmentsReducer,
  },
});

export default store;
