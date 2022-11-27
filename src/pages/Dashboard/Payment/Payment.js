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
    const { product, resalePrice, email } = order;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className="hero">
            <div className="card w-96 bg-base-100 shadow-xl mt-4 p-5">
                <div className="card-body">
                    <label>Email</label>
                    <input type="text" defaultValue={email} className="input input-bordered " readOnly />
                    <label>product Name</label>
                    <input type="text" defaultValue={product} className="input input-bordered " readOnly />
                    <label>Price</label>
                    <input type="text" defaultValue={resalePrice} className="input input-bordered " readOnly />
                    <label>Card Information</label>
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckOutForm
                                order={order}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;