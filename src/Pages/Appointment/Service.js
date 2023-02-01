import React from 'react';

const Service = ({ service, SetTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No slot available. Try another Date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => SetTreatment(service)}
                        className="btn btn-secondary text-white text-upper-case">Book Appointment
                    </label>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Service;