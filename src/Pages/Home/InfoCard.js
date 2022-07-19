import React from 'react';

const InfoCard = ({infoCard}) => {
    const {img, bgColor, heading, description} = infoCard;
    return (
        <div className={`flex flex-col lg:flex-row basis-1/3 px-4 py-8  rounded-lg text-white lg:items-center ${bgColor}`}>
                <img className='self-center mr-0 mb-5 lg:mb-0 h-[86px] w-[86px] md:mr-3' src={img} alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>{heading}</h3>
                    <p>{description}</p>
                </div>
            </div>
    );
};

export default InfoCard;