import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';
import people1 from '../../assets/images/people1.png';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name:"Winson Herry",
            location: 'New York',
            img:people1,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 2,
            name:"Lisa Smith",
            location: 'California',
            img:people1,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 3,
            name:"Alex Smith",
            location: 'Los Angeles',
            img:people1,
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
    return (
        <section id='testimonial' className='pt-8 md:pt-20'>
            <div className='container-area'>
                <div className='mb-8 flex items-center justify-between'>
                    {/* Testimonial Heading */}
                    <div>
                        <h4 className='text-xl font-bold text-secondary mb-2.5'>Testimonial</h4>
                        <h2 className='text-4xl	font-normal'>What Our Patients Says</h2>
                    </div>
                    {/* Quote icon */}
                    <img src={quote} className="hidden md:block w-[192px] h-[156px]" alt="" />
                </div>
                {/* Testimonial Items */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                    {
                        reviews.map((review) => <Review review={review} key={review._id}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;