import React from 'react';

const Service = ({ cart }) => {
    const { img, title, price, description } = cart;
    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;