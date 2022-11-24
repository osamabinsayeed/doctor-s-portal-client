import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 w-100 hidden lg:block'>
                <img src={doctor} className ="mt-[-150px]"></img>
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary text-white'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appoinment today</h2>
                <p className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='mt-10'>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>

            </div>
        </section>
    );
};

export default MakeAppointment;