import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LQrTjJF1VZBkFSoGozRjqG6ONTbrslj4K6XX1KqfYIXxTiBLCjs1lofDZXyuW4bvanpUv3ZqxnH9hTK5rXhMYey000SIsDVKF');
const Payment = () => {
    const { id } = useParams();

    const { isLoading, error, data: booking } = useQuery(["booking", id], () => {
        const data = axios.get(`http://localhost:5000/booking/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        return data;
    })
    if (isLoading) {
        return <p>Loading ....</p>
    }
    const { name, userName, date, price } = booking?.data;
    return (
        <div className='flex justify-center h-full mt-10'>
            <div className='flex flex-col space-y-5 w-1/2'>
                <div className='shadow p-5 rounded-lg'>
                    <p>Hello, {userName}</p>
                    <p>Pay for {name}</p>
                    <p>Your appoinment on {date}</p>
                    <p>Please Pay ${price}</p>
                </div>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appoinment={booking?.data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;