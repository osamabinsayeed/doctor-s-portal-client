import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div>
            <div className="hero mt-10 mb-10">
                <div className="hero-content  flex-col lg:flex-row-reverse  m-0 lg:justify-around">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl " />
                
                    <div className=' '>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        
                    </div>
                    
                </div>
                
                
            </div>

        </div>

    );
};

export default AppointmentBanner;