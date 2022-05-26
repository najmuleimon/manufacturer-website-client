import React from 'react';
import notFound from '../../assets/images/not-found.jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='container max-w-7xl text-center py-20'>
            <img src={notFound} className='max-w-xl mx-auto w-full' alt="" />
            <h1 className='text-lg font-medium text-primary py-10'>The page you are looking for is no found!</h1>
            <button className='btn btn-primary' onClick={() => navigate('/')}>Home</button>
        </div>
    );
};

export default NotFound;