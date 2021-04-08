import { useStripe, CardElement, Elements, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'


const stripePromise = loadStripe("pk_test_uvsUqlNRjAmg0WiBpMSZik8c00R8NDmpAS");

export default function Stripe() {
    console.log(stripePromise)
    return <>
        <Elements stripe={stripePromise}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
        </Elements>
    </>
}

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    }

}