import React from 'react';
import Banner from './Banner';
import ContacUs from './ContacUs';
import Info from './Information/Info';
import Services from './Information/Services';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContacUs></ContacUs>
        </div>
    );
};

export default Home;