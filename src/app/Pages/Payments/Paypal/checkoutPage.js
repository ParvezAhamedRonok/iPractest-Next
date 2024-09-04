import React from 'react';
import PaypalCheckoutButton from "./PaypalCheckoutButton";




function CheckoutPage({ productName }) {
    return (
        <>
            <div className='mt-[-10px] p-3 w-full h-auto rounded  flex justify-center align-middle'>
                <PaypalCheckoutButton
                    productName={productName}
                />
            </div>
        </>

    )
}

export default CheckoutPage








