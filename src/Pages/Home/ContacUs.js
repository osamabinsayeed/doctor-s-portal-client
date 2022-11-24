import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContacUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="flex justify-center">

            <div className='form-control w-96 justify-center mb-28'>




                <input type="text" placeholder="email" className="input input-bordered input-md max-w mb-10 mt-28" />
                <input type="text" placeholder="subject" className="input input-bordered input-md max-w mb-10" />

                <textarea className="textarea mb-10 h-28" placeholder="Your message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContacUs;