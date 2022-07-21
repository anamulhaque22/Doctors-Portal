import React from 'react';

const ServiceList = ({name}) => {

    return (
        <div className='py-8 shadow	 rounded-lg'>
            <p className='text-center text-secondary text-xl font-semibold'>{name}</p>
        </div>
    );
};

export default ServiceList;