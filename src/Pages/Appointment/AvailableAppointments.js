import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';




const AvailableAppointments = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, SetTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>
                Availabel Appointments on {format(date, 'PP')}
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        SetTreatment={SetTreatment}
                    ></Service>)
                }

            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={SetTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;