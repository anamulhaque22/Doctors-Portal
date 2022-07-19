import React from 'react';
import treatment from '../../assets/images/treatment.png';
import Button from '../Shared/Button';
const DentalCare = () => {
    return (
        <div className='container-area pt-12 md:pt-36 md:px-[8%]'>
            <div className="flex flex-col mb-7 items-center lg:flex-row-reverse">
                <div className='mb-5 lg:mb-0 lg:basis-1/2 lg:ml-8'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>GET STARTED</Button>
                </div>
                <div className='mb-t lg:mt-0 lg:basis-1/2 lg:mr-8 self-center'>
                    <img src={treatment} className=" rounded-lg shadow-2xl" alt='chair' />
                </div>
            </div>
        </div>
    );
};

export default DentalCare;