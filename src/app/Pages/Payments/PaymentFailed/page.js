"use client"
import React from 'react';
import useToggle from '../../../../hooks/useToggle';
import NavigationBar from '../../LandingHome/NavigationBar';
import HeaderLanding from "../../LandingHome/HeaderHomeOne";
import logo from "../../../../assets/images/Practestlogo.png";
import { GiWhiteBook } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { GrAssistListening } from "react-icons/gr";
import { GiSoundWaves } from "react-icons/gi";
import { isMobile } from "react-device-detect"
import { useRouter } from 'next/navigation';
import Image from 'next/image';

//end of the importing.............



function SuccessPament() {
    const history = useRouter();
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            {/* {
        loadingMsg == "SOPpopUp" &&  */}
            <div className="Result-PopUp pt-[10px]  fixed top-[90px] sm:top-[130px] left-2 w-[90%] sm:w-auto z-[345678900000]">
                <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                    <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[98vw] sm:w-[470px] p-4 h-auto box-border overflow-x-auto bg-sky-100 shadow-2xl'>
                        <div className="w-full flex justify-between mb-3">
                            <Image src={logo} alt="" className="w-[110px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                                onClick={() => { history.push("/") }}
                            />
                        </div>
                        <div className='w-full text-center'>
                            <p className='text-2xl'><span className='text-3xl font-bold text-red-400 mr-2 underline'>Sorry</span>Your payment has been failed</p>
                            <br />
                            {isMobile && (
                                <div className="appie-hero-content text-center">
                                    <p className='text-xl font-bold underline'>Go to your page</p>
                                    <ul className=''>
                                        <li onClick={() => {
                                            history.push("/SpeakingPage")

                                        }} style={{ cursor: "pointer" }}>
                                            <a >
                                                <i><GiSoundWaves className='text-xl mb-[-4px]' /></i> Speaking Tests
                                            </a>
                                        </li>
                                        <li className='mb-3' onClick={() => { history.push("/WrittingPage") }} style={{ cursor: "pointer" }}>
                                            <a className="item-2" >
                                                <i><TfiWrite className='text-xl text-blue-400 mb-[-4px]' /></i>  Writing Tests

                                            </a>
                                        </li>

                                        <li onClick={() => { history.push("/ReadingPage") }} style={{ cursor: "pointer" }}>
                                            <a className="item-2" >
                                                <i><GiWhiteBook className='text-xl mb-[-4px]' /></i> Reading Tests
                                            </a>
                                        </li>
                                        <li onClick={() => { history.push("/ListeningPage") }} style={{ cursor: "pointer" }}>
                                            <a >
                                                <i><GrAssistListening className='text-xl mb-[-4px] rounded' /></i>Listening Tests

                                            </a>
                                        </li>
                                        <li onClick={() => { history.push("/SOP-Download") }} style={{ cursor: "pointer" }}>
                                            <a >
                                                <i><GiSoundWaves className='text-xl mb-[-4px] rounded' /></i>Download SOP

                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
            {/* } */}
        </>
    )
}

export default SuccessPament