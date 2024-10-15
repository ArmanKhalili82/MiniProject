import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import CoursePage from './pages/CoursePage';
import EnrollmentPage from './pages/EnrollmentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/teachers" element={<TeacherPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/enrollments" element={<EnrollmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
