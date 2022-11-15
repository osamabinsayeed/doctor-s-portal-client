import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import DentalCare from './DentalCare';


const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "lorem ipsum iou noihjm iughba hjfdaku aijkfmna ihsdnug aiujiaksn uhwejsn  aujk  ijawk f uhwewfsd",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "lorem ipsum iou noihjm iughba hjfdaku aijkfmna ihsdnug aiujiaksn uhwejsn  aujk  ijawk f uhwewfsd",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "lorem ipsum iou noihjm iughba hjfdaku aijkfmna ihsdnug aiujiaksn uhwejsn  aujk  ijawk f uhwewfsd",
            img: whitening,
        },
    ]
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                    key={service._id}
                    service ={service}
                    
                    ></Service>)
                }
            </div>
            <div>
                <DentalCare></DentalCare>
            </div>
        </div>
    );
};

export default Services;