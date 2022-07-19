import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
    const infoCardData = [
        {
            img: clock,
            bgColor: "gradient-bg",
            heading: 'Opening Hours',
            description: "Lorem Ipsum is simply dummy text of the pri",
        },
        {
            img: marker,
            bgColor: "bg-accent",
            heading: 'Visit our location',
            description: "Brooklyn, NY 10036, United States",
        },
        {
            img: phone,
            bgColor: "gradient-bg",
            heading: 'Contact us now',
            description: "+000 123 456789",
        }
    ]
    return (
        <div className="flex flex-col space-x-0 space-y-7 md:space-y-0 md:flex-row md:space-x-5">
            {infoCardData.map((infoCard) => <InfoCard infoCard={infoCard} key={infoCard.heading}></InfoCard>)}

        </div>
    );
};

export default Info;