import React from 'react';
import image from '../../../assets/images/treatment.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen my-28">
            <div className="hero-content flex-col lg:flex-row lg:justify-around">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default DentalCare; 