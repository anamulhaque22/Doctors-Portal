import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AvailableServices from './AvailableServices';
import Hero from './Hero';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
           <Hero date={date} setDate={setDate}></Hero>
           <AvailableServices date={date}></AvailableServices>
           <Footer></Footer>
        </>
    );
};

export default Appoinment;