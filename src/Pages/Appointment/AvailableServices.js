import React, { useState } from 'react';
import { format } from 'date-fns';
import ServiceList from './ServiceList';
import useService from '../../hooks/useService';
import Service from './Service';
import BookingModal from './BookingModal';
const AvailableServices = ({ date }) => {
    const [services] = useService();
    const [treatment, setTreatment] = useState(null);

    return (
        <div className='container-area flex justify-center flex-col py-20'>
            {/* Available Service Top */}
            <div className='text-center'>
                <p className='text-[22px] text-secondary mb-1'>Available Services on {format(date, 'PP')}</p>
                <p className='text-[22px] text-[#939393]'>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14'>
                {
                    services.map(service => <ServiceList name={service.name} key={service._id}></ServiceList>)
                }
            </div>
            {/* Service booking */}
            <div className='mt-20'>
                <h4 className='text-[22px] text-secondary text-center'>Available slots for Teeth Orthodontics.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14'>
                    {
                        services.map(service =>
                            <Service
                                service={service}
                                key={service._id}
                                setTreatment={setTreatment}
                            >
                            </Service>)
                    }
                    {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>}
                </div>
            </div>
        </div>
    );
};

export default AvailableServices;