import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';
import Loading from '../../Shared/Loading/Loading';

const CheckOutForm = ({ order }) => {
    const { loading } = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { resalePrice, product, email, _id } = order;
    useTitle('checkout form')
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);
    const handleSubmit = async e => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message)
            toast.success('Please try again!')
        } else {
            toast.success('successfully completed your all information')
            setCardError('');
        }
        setCardSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: product,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        else {
            console.log('paymentIntent', paymentIntent)
            setCardError('')
        }
        if (paymentIntent.status === "succeeded") {
            setCardSuccess(`Congrats! ${product} your payment completed`);
            setTransactionId(paymentIntent.id)
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                email,
                orderId: _id
            }
            fetch(`http://localhost:5000/payment`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                    }
                    console.log(data)
                })
        }
        processing(false)
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
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
            <button className='btn btn-sm mt-7 btn-primary'
                type="submit"
                disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {
                cardError &&
                <p className='pt-5 text-red-500'>{cardError}</p>
            }
            {
                cardSuccess &&
                <div className="">
                    <p className='text-green-500'>{cardSuccess}</p>
                    <p>Your TransactionId : <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </form>
    );
};

export default CheckOutForm;