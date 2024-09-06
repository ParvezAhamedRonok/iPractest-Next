"use client"
import React, { useState, useEffect } from 'react';
import useToggle from '../../../../hooks/useToggle';
import NavigationBar from '../../LandingHome/NavigationBar';
import HeaderLanding from "../../LandingHome/HeaderHomeOne";
import CEO_Sir from '../../../../assets/images/ceo.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FaFacebook } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import EnjotImg from "../../../../assets/images/Payments/enjoy.gif"
import EnjotImg2 from "../../../../assets/images/Payments/enjoy-2.gif"
import { useStateContext } from "../../../../contexts/ContextProvider";

import motiveImg2 from "../../../../assets/images/Speaking-Images/backGroundImg2.gif"
import motiveImg3 from "../../../../assets/images/Speaking-Images/backGroundImg3.gif"
import motiveImg4 from "../../../../assets/images/Speaking-Images/backGroundImg4.gif"
import motiveImg5 from "../../../../assets/images/Speaking-Images/backGroundImg5.gif"
import motiveImg6 from "../../../../assets/images/Speaking-Images/backGroundImg6.gif"
import motiveImg8 from "../../../../assets/images/Speaking-Images/backGroundImg8.gif"
import motiveImg9 from "../../../../assets/images/Speaking-Images/backGroundImg9.gif"

//end of the importing...........






function SuccessPament() {
    const history = useRouter();
    const { userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();
    const [drawer, drawerAction] = useToggle(false);
    const [makeAnimations, setMakeAnimations] = useState(true)

    //animation Images Array -----------
    let imagesAnimationsArry = [motiveImg2, motiveImg3, motiveImg4, motiveImg5, motiveImg5, motiveImg6, motiveImg8, motiveImg9]

    let starterEnjoyImgArr = [EnjotImg, EnjotImg2];

    //make animation disable after 5 second--
    useEffect(() => {
        setTimeout(() => {
            setMakeAnimations(false)
        }, 5000);

    }, [])










    return (
        <>
            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            {/* {
        loadingMsg == "SOPpopUp" &&  */}
            <div className="Result-PopUp pt-[10px]  fixed top-[110px] sm:top-[130px] left-2 w-[90%] sm:w-auto sm:z-[100000]">
                <div className="grid w-[100vw] h-[100%] justify-center align-middle relative">
                    <div className='absolute top-0 left-0 right-0 bottom-0 z-[-10]'>
                        {
                            makeAnimations && (
                                <Image src={imagesAnimationsArry[Math.floor(Math.random() * imagesAnimationsArry.length)]} alt="motivational Animation celevrate" className='w-full h-full opacity-40' />
                            )
                        }
                    </div>
                    <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[470px] p-4 h-auto box-border overflow-x-auto bg-sky-100 shadow-2xl'>
                        <p className='text-2xl text-center'><span className='text-3xl'>🎉</span>congratulation your payment has been successful</p> <br />
                        <div>
                            {
                                userPaymentStatusCheck == "Expert" ? (<>
                                    <div className='m-auto grid gap-2'>
                                        <Image src={CEO_Sir} alt="" className="m-auto w-[130px] h-[130px] rounded-[50%] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                                        // onClick={() => { history.push("/") }}
                                        />
                                        <p className='text-[18px] translate-x-2 font-bold text-center'>Your personal Mentor</p>
                                        <div className='m-aut gap-4 grid justify-center align-middle'>
                                            <p className='flex gap-2 text-center'><FaFacebook className='p-1 bg-purple-600 text-white text-3xl rounded-[50%] translate-y-[-1px]' /> <a href="https://www.facebook.com/saud.arian" className='underline'>Alam Al Saud</a></p>
                                            <p className='flex gap-2 text-center'><SiWhatsapp className='p-1 bg-purple-600 text-white text-3xl rounded-[50%] translate-y-[-3px]' /> +49 162 3951485</p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='flex justify-center align-bottom'>
                                        <button className='p-2 w-[70%] m-auto rounded-[20px] bg-purple-600 text-white text-center mt-2'
                                            onClick={() => {
                                                history.push("/")
                                            }}
                                        >Go to Home</button>
                                    </div>
                                </>) : (<>
                                    <div className='m-auto grid gap-2'>
                                        <Image src={starterEnjoyImgArr[Math.floor(Math.random() * starterEnjoyImgArr.length)]} alt="motivational Animation celevrate" className='m-auto w-[130px] h-[130px] rounded-[50%] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0' />
                                    </div>
                                    <br />
                                    <div className='flex justify-center align-bottom'>
                                        <button className='p-2 w-[70%] m-auto rounded-[20px] bg-purple-600 text-white text-center mt-2'
                                            onClick={() => {
                                                history.push("/")
                                            }}
                                        >Go to Home</button>
                                    </div>
                                </>)
                            }

                        </div>
                    </section>
                </div>
            </div>
            {/* } */}
        </>
    )
}

export default SuccessPament