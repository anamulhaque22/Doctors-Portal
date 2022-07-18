import React from 'react';
import chair from '../../assets/images/chair.png';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Banner = () => {
    return (
        <section id="banner" className="bg-hero-bg">
            <div className="container-area flex flex-col justify-around min-h-[calc(100vh-64px)]">
                {/* Hero top */}
                <div class="flex flex-col mb-7 items-center lg:flex-row-reverse">
                    <div className='mb-8 lg:mb-0 lg:basis-1/2 lg:ml-5'>
                        <img src={chair} className=" rounded-lg shadow-2xl" alt='chair' />
                    </div>
                    <div className=' lg:basis-1/2 lg:mr-5'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-secondary text-white">Get Started</button>
                    </div>
                </div>

                {/* Flex hero bottom container */}
                <div className="flex flex-col space-x-0 space-y-7 md:space-y-0 md:flex-row md:space-x-5">
                    {/* Bottom item 1 */}
                    <div className="flex flex-col lg:flex-row basis-1/3 px-4 py-8  rounded-lg text-white lg:items-center bg-[rgba(25,211,174,1)]">
                        <img className='self-center mr-0 mb-5 lg:mb-0 h-[86px] w-[86px] md:mr-3' src={clock} alt="" />
                        <div>
                            <h3 className='text-xl font-bold mb-2'>Opening Hours</h3>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                    {/* Bottom item 2 */}
                    <div className="flex flex-col basis-1/3 px-4 py-8 lg:flex-row rounded-lg text-white lg:items-center bg-accent">
                        <img className='self-center mr-0 mb-5 lg:mb-0 h-[86px] w-[86px] md:mr-3' src={marker} alt="" />
                        <div>
                            <h3 className='text-xl font-bold mb-2'>Visit our location</h3>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                    {/* Bottom item 3 */}
                    <div className="flex flex-col basis-1/3 px-4 py-8 lg:flex-row rounded-lg text-white lg:items-center bg-[rgba(25,211,174,1)]">
                        <img className='self-center mr-0 mb-5 lg:mb-0 h-[86px] w-[86px] md:mr-3' src={phone} alt="" />
                        <div>
                            <h3 className='text-xl font-bold mb-2'>Contact us now</h3>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;