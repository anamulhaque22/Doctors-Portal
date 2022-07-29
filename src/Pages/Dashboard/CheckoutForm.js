import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appoinment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSceret, setClientSceret] = useState('');
    const [payLoading, setPayLoading] = useState(true);
    const { _id, price, name, email } = appoinment;
    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.data?.clientSecret) {
                setClientSceret(res?.data?.clientSecret)
            }
        });
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("handle payment")
        if (!stripe || !elements) {
            console.log("error")
            return;
        }

        const card = elements.getElement(CardElement);
        console.log(card)
        if (card === null) {
            return;
        }
        console.log("card")
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error?.message);
            return;
        } else {
            setCardError("");
        }
        setSuccess('');
        //confirm card payment
        const { paymentIntent, error: confirmPayError } = await stripe.confirmCardPayment(
            clientSceret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        const payment = {
            appoinment: _id,
            transactionId: paymentIntent.id,
        };
        console.log(confirmPayError)
        if (confirmPayError) {
            console.log(confirmPayError)
            setCardError(confirmPayError?.message);
        } else {
            setTransactionId(paymentIntent?.id);
            console.log(paymentIntent);
            setSuccess("Congrats! Your payment is success");

            axios.patch(`http://localhost:5000/booking/${_id}`, payment, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                console.log(res.data)
                setPayLoading(false);
            })
        }

    };

    return (
        <div className='shadow p-5 rounded-lg'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn px-7 gradient-bg mt-5' type="submit" disabled={!stripe || !clientSceret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <p className='text-green-500'>{success}</p>
            }
            {
                transactionId && <p className='text-green-500'>Transaction Id: <span className='font-bold'>{transactionId}</span></p>
            }
        </div>
    );
};

export default CheckoutForm;