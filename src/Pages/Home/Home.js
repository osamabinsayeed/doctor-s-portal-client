import React from 'react';
import Banner from './Banner';
import Info from './Information/Info';
import Services from './Information/Services';
const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;