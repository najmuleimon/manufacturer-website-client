import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Reviews />
        </>
    );
};

export default Home;