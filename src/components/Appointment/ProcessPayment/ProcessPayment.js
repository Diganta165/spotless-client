import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('sk_test_51Ie7oVLUe1qCPzTVlKfkw74E8dlrZwVM6Z5OHx1n0WYKq5XhJEX1mkbftdRpw41Vr4AzEGDFAvaiIz9QfIeVJq0E00F6ak9Uzo');

const ProcessPayment= () => {
  return (
    <Elements stripe={stripePromise}>
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

    </Elements>
  );
};

export default ProcessPayment;