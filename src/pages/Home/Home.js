import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import ContactUs from './ContactUs/ContactUs';
import Manufacturing from './Manufacturing/Manufacturing';
import Reviews from './Review/Reviews';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Tools></Tools>
            <Manufacturing></Manufacturing>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;