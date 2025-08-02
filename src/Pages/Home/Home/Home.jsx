import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Stories from '../Stories/Stories';


const Home = () => {
    return (
        <div className='bg-gradient-to-b from-blue-50 to-cyan-100'>
            <Banner></Banner>
            <About></About>
            <Stories></Stories>
        </div>
    );
};

export default Home;