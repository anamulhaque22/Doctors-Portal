import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const cartInfo = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <div className='container-area flex flex-col mt-10'>
            {/* Service Heading */}
            <div className='flex flex-col items-center justify-center mb-8'>
                <h4 className='text-xl font-bold text-secondary'>OUR SERVICES</h4>
                <h2 className='text-4xl	font-normal'>Services We Provide</h2>
            </div>
            {/* Service Items */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
            {
                cartInfo.map((cart) => <Service cart={cart} key={cart._id}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;