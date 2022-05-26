import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_3jp6aSY2KnHzhP8opFslWkvk00j8NGjaE9');

const Payment = () => {
    const { id } = useParams();
    const url = `https://warm-badlands-89988.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Hello! {order.buyerName}</h2>
                    <p>Your product {order.productName} is ready for payment.</p>
                    <p>Please pay ${order.price} for your order.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;