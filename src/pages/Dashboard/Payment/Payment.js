import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { useTitle } from '../../../Hooks/UseTitle';
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    useTitle('payment')
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    console.log(stripePromise);
    const navigation = useNavigation();
    const order = useLoaderData();
    const { product, resalePrice } = order;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl'>payment for {product}</h3>
            <p className='text-xl'>Please pay <strong>{resalePrice} taka</strong> for your orders</p>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;