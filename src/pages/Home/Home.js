import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Reviews from './Review/Reviews';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;