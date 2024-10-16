import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/header/Navbar';

const HomePage = () => {
    return (
        <div className="p-4">
            <Navbar />
            <h1 className='text-3xl'>Hello</h1>
        </div>
    );
};

export default HomePage;
