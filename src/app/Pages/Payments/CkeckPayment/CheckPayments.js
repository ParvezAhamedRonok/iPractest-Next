"use client"
import React, { useEffect, useState } from 'react';
import { useStateContext } from "../../../../contexts/ContextProvider";
import Axios from "axios";
import { AAMARPAY_GET_USER_DATA_FROM_DATABASE, PAYPAL_GET_USER_DATA_FROM_DATABASE, GET_ALL_COUNTRY, COUNTRY_PUT_URL, GET_COUNTRY_BY_TIMEZONE_FROM_COMMENTS_API } from "../../../../assets/URL's/AllUrl";

//END OF THE IMPORTING.....






let forUpdateCountry = "";
let forUpdateCountryFlag = "";
export const CheckPaymentStatus = () => {
    const { bdPaidStatus, setBdPaidSatus, otherPaidStatus, setOtherPaidStatus, billPopUp, setBillPopUp, StoreCountryData, setStoreCounrtyData, userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();

    const [getCountryName, setGetCountryName] = useState("")
    //localstorages all data store into below states.....
    //all locaStorags data store into those states.....
    const [userCountry, setuserCountry] = useState('')
    const [userEmail, setuserEmail] = useState('');
    const [moduleName, setmoduleName] = useState('')
    const [userName, setuserName] = useState('')
    const [userLoginToken, setUserLoginToken] = useState('');
    const [userLocalStorageCounrty, setUserLocalCountry] = useState('')


    let timeZoneCityToCountry = {};

    // let countryInfo = localStorage.getItem("CountryInfo");
    // let retrivedCountryInfo = JSON.parse(countryInfo);




    useEffect(() => {
        //get all user localstorages data here && store them into a state
        setuserCountry(localStorage.getItem("setCountry") && localStorage.getItem("setCountry"))
        setmoduleName(localStorage.getItem("productID") && localStorage.getItem("productID"));
        setuserName(localStorage.getItem('userName') && localStorage.getItem('userName'));
        setuserEmail(localStorage.getItem("userEmail") && localStorage.getItem("userEmail"));
        setUserLoginToken(localStorage.getItem("loginTOken") && localStorage.getItem("loginTOken"));
        setUserLocalCountry(localStorage.getItem('setCountry') && localStorage.getItem('setCountry'))

    }, [])




    //store all Country data into a state by the help of useContext...........
    //for getting all the country names & values--(Updated at 16/3/24)
    useEffect(() => {
        Axios.get(GET_ALL_COUNTRY)
            .then((e) => {
                //  console.log(e.data)
                return setStoreCounrtyData(e.data.sort((a, b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0)))
            })
            .catch((e) => {
                console.log(e)
            })


        //check aamerPay that user have the payment r not
        Axios({
            method: "get",
            // url: 'http://localhost:8080/api/user/checkforDBAmerPayAccess/' + useremail,
            url: AAMARPAY_GET_USER_DATA_FROM_DATABASE + localStorage.getItem("userEmail"),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                // console.log("PaidTime", moment.utc(res.data.data[0].createdAt).format('MM/DD/YYYY'))
                console.log(res.data.data)
                console.log(res.data && res.data);
                if (res.data.data[0]) {
                    let isExpired = res.data.data[0].isExpire
                    if (isExpired != null || isExpired != "" || isExpired == undefined) {
                        setBdPaidSatus(true);
                        setuserPaymentStatusCheck(res.data.data[0].productName)
                    } else {
                        alert("already expired...")
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                let userLog = error.response && error.response.data.message;
                let userinfo = userLog == "Unauthorized!";
                if (userinfo) {
                    localStorage.removeItem("userName");
                    localStorage.removeItem('userEmail');
                    localStorage.removeItem("loginTOken");
                    localStorage.removeItem('setCountry');
                    localStorage.removeItem('setCountryFlag');
                    // when those token will be gone the page will be refress with the help of the code below..
                    userEmail && window.location.reload(false);
                }
            })



        //Paypal Paid status check ---------

        Axios({
            method: "get",
            url: PAYPAL_GET_USER_DATA_FROM_DATABASE + localStorage.getItem("userEmail"),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            // console.log("PaidTime", moment.utc("2024-02-19T03:42:53.000Z").format('YYYY/MM/DD'))
            console.log(res.data && res.data);
            res.data.data.map((e) => {
                if (e.orderId) {
                    let isExpired = e.isExpire;
                    //check if 3 month validation has been passed in that case those state will not true.
                    //if has 3 monthe will be true.....
                    if (isExpired != null || isExpired != "" || isExpired == undefined) {
                        setOtherPaidStatus(true);
                        setuserPaymentStatusCheck(e.productName)
                    } else {
                        alert("already expired...")
                    }
                }
            })

        })
            .catch((error) => {
                console.log(error);
                let userLog = error.response && error.response.data.message;
                let userinfo = userLog == "Unauthorized!";
                if (userinfo) {
                    localStorage.removeItem("userName");
                    localStorage.removeItem('userEmail');
                    localStorage.removeItem("loginTOken");
                    localStorage.removeItem('setCountry');
                    localStorage.removeItem('setCountryFlag');
                    userEmail && window.location.reload(false);
                    // history.push("/");
                }
            })





        //get country name by userTimeZone---------------added(18/4)
        Axios.get(
            // "http://localhost:8080/getUsersCountryByTimeZone"
            GET_COUNTRY_BY_TIMEZONE_FROM_COMMENTS_API
        )
            .then((res) => {
                console.log(res)
                timeZoneCityToCountry = res.data
                var userRegion;
                var userCity;
                var userCountry;
                var userTimeZone;

                if (Intl) {
                    console.log(Intl)
                    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    var tzArr = userTimeZone.split("/");
                    userRegion = tzArr[0];
                    userCity = tzArr[tzArr.length - 1];
                    userCountry = timeZoneCityToCountry[userCity];
                }
                // console.log("Time Zone:", userTimeZone);
                // console.log("Region:", userRegion);
                // console.log("City:", userCity);
                console.log("Country:", userCountry);
                setGetCountryName(userCountry);
                if (userEmail && !userCountry) {
                    fetch('https://api.ipregistry.co/?key=bdeqqyjamj6lka91')
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (payload) {
                            setGetCountryName(payload.location.country.name)
                            console.log(payload.location.country.name)
                            console.log(payload.location.country.name + ', ' + payload.location.city);
                        });

                }


            })
            .catch((err) => {
                console.log(err);
                if (userEmail && getCountryName == "") {
                    fetch('https://api.ipregistry.co/?key=bdeqqyjamj6lka91')
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (payload) {
                            setGetCountryName(payload.location.country.name)
                            console.log(payload.location.country.name)
                            console.log(payload.location.country.name + ', ' + payload.location.city);
                        });

                }

            });

        // if above code is not work in 1.5 second then below code will be work in 1.5 seconds
        console.log(getCountryName)


    }, [])



    console.log(getCountryName)
    useEffect(() => {
        if (getCountryName) {
            let itemsData = StoreCountryData && StoreCountryData.filter((item) => item.name.common == getCountryName);

            localStorage.setItem("CountryInfo", JSON.stringify({
                countryName: itemsData[0] && itemsData[0].name.common,
                countryFlag: itemsData[0] && itemsData[0].flags.png
            }));

            forUpdateCountry = itemsData[0] && itemsData[0].name.common;
            forUpdateCountryFlag = itemsData[0] && itemsData[0].flags.png;

        }
    }, [getCountryName, StoreCountryData]);



    //update userCountry name if it's not match yet with localstorage country & database country name...

    useEffect(() => {
        //update user if they have no country into the database ----
        if (userEmail && userLocalStorageCounrty != getCountryName) {
            // alert("User logged in....");
            if (itemsData) {
                Axios.put(
                    // "http://localhost:8080/api/auth/updateUserByCountry",
                    COUNTRY_PUT_URL, {
                    country: forUpdateCountry,
                    countryFlag: forUpdateCountryFlag,
                    email: userEmail,
                },
                )
                    .then((res) => {
                        console.log(res);
                        if (res.data.message == "Updated Successfylly") {
                            localStorage.setItem('setCountry', res.data.country);
                            localStorage.setItem('setCountryFlag', res.data.countryFlag)
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    })


            } else {
                alert("Hellow")
            }
        }

    }, [])

}