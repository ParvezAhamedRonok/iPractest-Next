
import React from 'react';
import shapeTwo from '../../../assets/images/shape/shape-2.png';
import shapeThree from '../../../assets/images/shape/shape-3.png';
import shapeFour from '../../../assets/images/shape/shape-4.png';
import LangingImage from '../../../assets/images/landingImagefour4.webp';
import { GiWhiteBook } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { GrAssistListening } from "react-icons/gr";
import { GiSoundWaves } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import Image from 'next/image';


function HeroHomeLanding() {
    const history = useRouter();

    return (
        <>
            <section className="appie-hero-area mt-[-50px]">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ">
                            <div className="appie-hero-content text-center">
                                <p className='mb-2 text-3xl text-blue-400 underline'>Welcome To iPractest</p>
                                <h1 className=' mb-2 text-[28px] sm:text-[45px]'>
                                    IELTS Online Practice to Unlock
                                    <a rel='canonical' href='https://www.global-opportunities.net/ielts-online/' className='mr-2 ml-2 text-gray-800'>Global</a>
                                    Opportunities
                                </h1>
                                <h2 className='text-[22px] sm:text-[38px] mb-2 text-blue-400'>
                                    6.5+ in 30 days
                                </h2>
                                <ul>
                                    <li style={{ cursor: "pointer" }}>
                                        <a href='/SpeakingPage'>
                                            <i><GiSoundWaves className='text-xl mb-[-4px]' /></i> Speaking Tests
                                        </a>
                                    </li>
                                    <li className='mb-3' style={{ cursor: "pointer" }}>
                                        <a href='/WrittingPage' className="item-2" >
                                            <i><TfiWrite className='text-xl text-blue-400 mb-[-4px]' /></i>  Writing Tests

                                        </a>
                                    </li>
                                    <li style={{ cursor: "pointer" }}>
                                        <a href='/ListeningPage/cambridgeAllTests'>
                                            <i><GrAssistListening className='text-xl mb-[-4px] rounded' /></i>Listening Tests

                                        </a>
                                    </li>

                                    <li style={{ cursor: "pointer" }}>
                                        <a href='/ReadingPage/cambridgeAllTests' className="item-2" >
                                            <i><GiWhiteBook className='text-xl mb-[-4px]' /></i> Reading Tests
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='w-full h-full rounded mt-[-40px]'>

                                <Image
                                    src={LangingImage}
                                    alt="ielts online practice - ielts practice"
                                    className='w-full h-full'
                                />

                            </div>

                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className="hero-shape-1">
                    <Image
                        src={shapeTwo}
                        alt="this is IELTS Practice animation-1"
                    />
                </div>
                <div className="hero-shape-1 ml-[400px] mt-[200px]">
                    <Image
                        src={shapeTwo}
                        alt="this is IELTS Practice animation-2"
                    />
                </div>
                <div className="hero-shape-1 ml-[300px] mt-[400px]">
                    <Image
                        src={shapeTwo}
                        alt="this is IELTS Practice animation-3"
                    />
                </div>
                <div className="hero-shape-2">
                    <Image
                        src={shapeThree}
                        alt="this is IELTS Practice animation-4"
                    />
                </div>
                <div className="hero-shape-2 ml-[400px] mt-[100px]">
                    <Image
                        src={shapeThree}
                        alt="this is IELTS Practice animation-5"
                    />
                </div>
                <div className="hero-shape-3">
                    <Image
                        src={shapeFour}
                        alt="this is IELTS Practice animation-6"
                    />
                </div>

            </section>
        </>
    );
}

export default HeroHomeLanding;
















