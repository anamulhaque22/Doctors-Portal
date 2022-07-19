import React from 'react';

const Review = ({review}) => {
    const {name, location, img, reviewText} = review;
    return (
        <div className="flex card w-full bg-base-100 shadow-2xl px-7 py-8">
            <p className='mb-4 text-base font-normal'>{reviewText}</p>
            <div className='flex items-center gap-4'>
                <img src={img} alt="People" className='ring-offset-4 ring-4 rounded-full ring-secondary h-[64px] w-[64px]' />
                <div>
                    <h4 className='text-xl font-medium'>{name}</h4>
                    <p className='text-base font-normal'>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;