"use client"
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useStateContext } from "../../../../../contexts/ContextProvider";
import { PAYPAL_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT } from '../../../../../assets/URL\'s/AllUrl';

//END OF THE IMPORTING......







let mainPrice = 2;
const PaypalCheckoutButton = () => {
    const { notify, bdPaidStatus, setBdPaidSatus, otherPaidStatus, setOtherPaidStatus, billPopUp, setBillPopUp } = useStateContext();
    const history = useRouter();
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const product = {
        description: "this is for 3months description",
        price: 9,
    };

    //all locaStorags data store into those states.....
    const [userCountry, setuserCountry] = useState('')
    const [userEmail, setuserEmail] = useState('');
    const [moduleName, setmoduleName] = useState('')
    const [userName, setuserName] = useState('')
    const [userLoginToken, setUserLoginToken] = useState('')




    //make user effect for calling all data as like localstorages data also...
    useEffect(() => {
        //get all user localstorages data here && store them into a state
        setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))
        setmoduleName(localStorage.getItem("productID") && localStorage.getItem("productID"));
        setuserName(localStorage.getItem('userName') && localStorage.getItem('userName'));
        setuserEmail(localStorage.getItem("userEmail") && localStorage.getItem("userEmail"));
        setUserLoginToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"))

    }, [])


    //with data-datas
    // orderID: "4S578650NF6954412"
    const handleApprove = (data, order) => {
        // setPaidFor(true);
        let userInfo = {
            userName: userName,
            payName: order.payer.name.given_name + order.payer.name.surname,
            userEmail: userEmail,
            payEmail: order.payer.email_address,
            country: userCountry,
            payCountryCode: order.payer.address.country_code,
            price: mainPrice,
            orderId: data.orderID,
            paymentId: data.paymentID,
            payMethod: data.paymentSource,
            productName: "Expert",
        }

        axios({
            method: "post",
            // url: "http://localhost:8080/api/user/PaypalPay",
            url: PAYPAL_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT,
            data: userInfo,
        })
            .then((res) => {
                console.log(res);


            })
            .catch((err) => {
                console.log(err)
            })
        notify();
        // localStorage.setItem("productID/Payment", "PaySuccess");
        setBdPaidSatus(true);
        setOtherPaidStatus(true);
        setBillPopUp(false);
        setTimeout(() => {
            history.push(`/${moduleName}`);
            localStorage.removeItem("productID");
        }, 2000);

    }





    //if need we can use this also is use when successfully payment done or not--
    if (paidFor) {
        alert("Thank You for purchasing from iPractest.com");
    }
    if (error) {
        alert(error);
    }




    const initialOptions = {
        // clientId: "AZJDmyOtPi5c5Tw4eGZzPzNLF9-vkq6mqiqEbMZmXfG1GWeqbohHx22dLsHsGdwd14rhd8qkBxwNAKid",
        // clientId: "AdlRJfFdEhhhmMGtvJ6UbD0xbrAWLsH9FGY5XCcdyuWflngPxuXc5uzQ_2k0M87lNwlXaQB4dbDtsThx",
        // clientId: "AX_JFvAVryz-c4Ihz_iR4iTYN-z8IYLm0MwMPAt6N_ek8HSGtv7m2GKyZLOieda9YF19lJMOZoGGgvoR",
        clientId: "AX_JFvAVryz-c4Ihz_iR4iTYN-z8IYLm0MwMPAt6N_ek8HSGtv7m2GKyZLOieda9YF19lJMOZoGGgvoR",
        currency: "USD",
        intent: "capture",
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                // style={{
                //     layout: 'vertical',
                //     color: 'blue',
                //     shape: 'rect',
                //     label: 'paypal'
                // }}
                className='w-full'
                onClick={(data, actions) => {
                    // const hasAlreadyBoughtCourse = false;
                    // if(hasAlreadyBoughtCourse){
                    //     setError("You Already bough this course");
                    //     return actions.reject();
                    // }else{
                    //     return actions.resolve();
                    // }
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.description,
                                amount: {
                                    // value: product.price.toFixed(2),
                                    value: mainPrice,
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, action) => {
                    const order = await action.order.capture();
                    // console.log("order", order);
                    handleApprove(data, order);
                    // console.log(data.orderID);
                }}
                onCancel={() => { alert("Payment has been cancel") }}
                onError={(err) => {
                    setError(err);
                    console.log("PayPal Checkout onError", err);
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PaypalCheckoutButton