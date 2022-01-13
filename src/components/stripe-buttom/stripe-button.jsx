import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51JNS5AFStuWtnj0FZARNoOZjO8sybQhzGjk0AA7tcWpJU6BO2mJHl44xlNPgiVH7542yly9Onc7YEasRxky9jkf500ii8IFJzv';

    const onToken= token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name='WKE Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        
        />
    )
};

export default StripeCheckoutButton;