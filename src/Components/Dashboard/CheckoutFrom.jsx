import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const CheckoutForm = ({ closeModal, classInfo }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  // get client secret from server
  useEffect(() => {
    if (classInfo.price) {
      axiosSecure
        .post("/create-payment-intent", { price: classInfo.price })
        .then((data) => {
          console.log(data.data);
          setClientSecret(data.data.clientSecret);
        });
    }
  }, [classInfo, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmPaymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <p className='text-red-400'>{error && error}</p>
      <div className='mt-4 flex justify-between items-center'>
        <button
          type='button'
          className='inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200'
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type='submit'
          disabled={!stripe}
          className='inline-flex gap-2 justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-green-200'
        >
          Pay <span>${classInfo?.price}</span>
        </button>
      </div>
    </form>
  );
};
export default CheckoutForm;
