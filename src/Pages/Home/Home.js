import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Footer from '../Shared/Footer';
import Categories from './Categories';

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Categories />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;