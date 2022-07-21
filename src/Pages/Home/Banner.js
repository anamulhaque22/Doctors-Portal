import React from 'react';
import chair from '../../assets/images/chair.png';
import Button from '../Shared/Button';
import Info from './Info';

const Banner = () => {
    return (
        <section id="banner" className="bg-hero-bg bg-no-repeat	bg-cover">
            <div className="container-area flex flex-col justify-around min-h-[calc(100vh-64px)]">
                {/* Hero top */}
                <div className="flex flex-col mb-7 items-center lg:flex-row-reverse">
                    <div className='mb-8 lg:mb-0 lg:basis-1/2 lg:ml-5'>
                        <img src={chair} className=" rounded-lg shadow-2xl" alt='chair' />
                    </div>
                    <div className=' lg:basis-1/2 lg:mr-5'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>GET STARTED</Button>
                    </div>
                </div>

                {/* Flex hero bottom container */}
                <Info></Info>
            </div>
        </section>
    );
};

export default Banner;