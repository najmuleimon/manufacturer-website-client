import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Footer from '../Shared/Footer';
import Categories from './Categories';
import Highlight from './Highlight';

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Categories />
            <Highlight />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;