import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Button from '../Shared/Button';
const MakeAppointment = () => {
    return (
        <section id='appointment-section' className='bg-contact-bg md:mt-[200px]'>
            <div className="container-area">
                <div className='flex justify-center items-center'>
                    <div className="hidden md:block flex-1">
                        <img className='md:mt-[-150px] md:h-[630px]' src={doctor} alt="" />
                    </div>
                    <div className="flex-1 py-10 space-y-2 sm:space-y-5">
                        <h4 className='text-xl font-bold text-secondary'>Appointment</h4>
                        <h2 className='text-4xl font-semibold text-white'>Make an appointment Today</h2>
                        <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>GET STARTED</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;