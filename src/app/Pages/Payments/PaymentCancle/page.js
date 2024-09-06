"use client"
import React, { useState } from 'react';
import useToggle from '../../../../hooks/useToggle';

import NavigationBar from '../../LandingHome/NavigationBar';
import HeaderLanding from "../../LandingHome/HeaderHomeOne";
import { useRouter } from 'next/navigation';
import SadImg1 from "../../../../assets/images/Payments/sad1.gif";
import Image from 'next/image';

//end of the importing.........



function SuccessPament() {
    const history = useRouter();
    const [drawer, drawerAction] = useToggle(false);
    const [mainData, setmainData] = useState("")
    let URL = "https://ipractest-406204.uc.r.appspot.com/speakingCorrection"


    return (
        <>
            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <div className="Result-PopUp pt-[10px]  fixed top-[100px] sm:top-[140px] sm:left-2 w-[90%] sm:w-auto z-[345678900000]">
                <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                    <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[470px] p-4 h-auto box-border overflow-x-auto bg-white shadow-2xl'>
                        <div className="w-full flex justify-between mb-3">
                            <Image src={SadImg1} alt="" className="w-[90px] sm:w-[120px] h-[80px] sm:h-[100px] rounded-[40%] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                                onClick={() => { history.push("/") }}
                            />
                        </div>
                        <div className='w-full text-center'>
                            <p className='text-2xl'><span className='text-3xl font-bold text-red-400 mr-2 underline'>Oops!</span>Your payment has been canceled</p>
                            <br />
                            <div className='text center flex w-full justify-center'>
                                <button className='text-xl underline text-blue-600 cursur-pointer'
                                    onClick={() => { history.push("/") }}
                                >Go to Home Page</button>
                            </div>
                        </div>
                        <div>
                            {mainData}
                        </div>
                    </section>
                </div>
            </div>
            {/* } */}
        </>
    )
}

export default SuccessPament







