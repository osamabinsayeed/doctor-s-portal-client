import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContacUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="flex flex-col ">

            <div className='text-center mt-10'>
                <h3 className='text-primary text-xl font-bold uppercase'>Contact Us</h3>
                <h2 className='text-4xl text-white'>Stay Connected With Us</h2>
            </div>
            <div className='flex justify-center'>
                <div className='form-control w-96  mb-10 '>
                    <input type="text" placeholder="email" className="input input-bordered input-md max-w mb-5 mt-10" />
                    <input type="text" placeholder="subject" className="input input-bordered input-md max-w mb-5" />
                    <input type='text' placeholder='Your message' className='input input-bordered input-md max-w h-32 mb-10' ></input>
                    <PrimaryButton>Submit</PrimaryButton>

                </div>
            </div>

        </section>
    );
};

export default ContacUs;