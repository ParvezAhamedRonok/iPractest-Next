"use client";
import React, { useEffect, useState, Suspense } from 'react';
import useToggle from '../../../../hooks/useToggle';
import shapeTwo from '../../../../assets/images/shape/shape-2.png';
import shapeThree from '../../../../assets/images/shape/shape-3.png';
import shapeFour from '../../../../assets/images/shape/shape-4.png'
import FooterHomeOne from '../../LandingHome/FooterHomeOne';

import Axios from 'axios';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import BackToTop from '../../../../lib/BackToTop';
//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });




function Index() {
    const history = useRouter();
    const [drawer, drawerAction] = useToggle(false);
    const [mailtitle, setmailtitle] = useState("");
    const [mailDesc, setmailDesc] = useState("");
    const [thankYoumsg, setThankYouMsz] = useState("")

    useEffect(() => {
        //here i have to change this email with admin/ where we want to you access..
        //those email we can use here or give them access to use this component other wise redirect them to the home page..
        let userEmail = localStorage.getItem('userEmail')

        if (!userEmail) {
            history.push("/")
        }
    }, [])



    //request message to mail all of the users by our server---
    const handleSubmit = (x) => {
        x.preventDefault();

        Axios({
            method: "post",
            url: "https://node-js-express-login-example.onrender.com/api/auth/send-mail-to-all-users-into-our-database",
            data: {
                "title": mailtitle,
                "description": mailDesc,
                "thankYouMesez": thankYoumsg != "" ? thankYoumsg : "",
            },
        })
            .then((res) => {
                console.log(res);
                alert("You mail was successfully sent to the users.")
            })
            .catch((e) => {
                console.log(e);
                if (e.message == "Network Error") {
                    alert("NetworkErr");
                }
                else if (e.response.data.message == "Too many devices") {
                    alert("Access blocked ,  You have logged in  with too many devices or Too many browers! please login with your previous device or browser that you have used or Contact us")
                }
                else {
                    alert(e.message);
                }
            })

    }



    return (
        <>

            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <section className="appie-hero-area mt-2">
                <div className="m-auto grid justify-center align-middle p-5">
                    <div className='p-[15px] sm:p-[40px] border-2 border-gray-300 w-full sm:w-[600px] md:w-[1000px] bg-sky-50 rounded-[15px]'>
                        <h4 className='mb-2'>Let’s Mail to our users</h4>
                        <p>let's connect to all users by G-mail.</p> <br />
                        <form action="" className='pt-2 grid grid-cols-1' onSubmit={handleSubmit}>

                            <div className='p-2 flex gap-2 w-full'>
                                <input type="text" className=' p-2 w-full rounded-[10px] border-1 border-gray-400'
                                    placeholder='Enter your Title'
                                    onChange={(e) => { setmailtitle(e.target.value) }}
                                    required
                                />  <input type="text" className='w-full p-2 rounded-[10px] border-1 border-gray-400'
                                    placeholder='Thank you Title if want.'
                                    onChange={(e) => { setThankYouMsz(e.target.value) }}
                                />
                            </div>
                            <br />

                            <textarea
                                name="message"
                                placeholder="Enter message for user."
                                className='w-full min-h-[250px] max-h-auto rounded-[15px] pt-3 pl-3 border-1 border-gray-300'
                                required
                                onChange={(e) => { setmailDesc(e.target.value) }}
                            ></textarea> <br />

                            <button type='submit' className='w-[60%] p-3 m-auto bg-purple-400 text-white rounded-[10px]'>Submit</button>
                        </form>
                    </div>
                </div>
                <div>

                </div>
                <div className="hero-shape-1">
                    <Image src={shapeTwo} alt="this is IELTS Practice animation-1" className='w-auto h-auto' />
                </div>
                <div className="hero-shape-1 ml-[400px] mt-[200px]">
                    <Image src={shapeTwo} alt="this is IELTS Practice animation-2" className='w-auto h-auto' />
                </div>
                <div className="hero-shape-1 ml-[300px] mt-[400px]">
                    <Image src={shapeTwo} alt="this is IELTS Practice animation-3" className='w-auto h-auto' />
                </div>
                <div className="hero-shape-2">
                    <image src={shapeThree} alt="this is IELTS Practice animation-4" className='w-auto h-auto' />
                </div>
                <div className="hero-shape-2 ml-[400px] mt-[100px]">
                    <image src={shapeThree} alt="this is IELTS Practice animation-5" className='w-auto h-auto' />
                </div>
                <div className="hero-shape-3">
                    <image src={shapeFour} alt="this is IELTS Practice animation-6" className='w-auto h-auto' />
                </div>

            </section>


            <Suspense fallback={<div>Loading</div>}>
                <FooterHomeOne />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <BackToTop className="back-to-top-3" />
            </Suspense>
        </>
    );
}

export default Index;
