import React from 'react';
import Banner from './Banner';
import Info from './Information/Info';
import Services from './Information/Services';
import MakeAppointment from './MakeAppointment';
const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;