import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;