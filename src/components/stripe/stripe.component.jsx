import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>{
    const finalPrice = {price} * 100;
    const publishableKey = 'pk_test_51HADY3Cu9ZRCl9eq7dKiegakrfGnNt6oJKWWvxKBwgB7p7MQuIhgACLD1xCuQFB7P7qt5V3MeY7I2BuxiQm9M4sY00hZIPonam';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now' 
        name='Circulant Ltd'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={finalPrice}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;