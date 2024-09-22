
"use client";
import React, { useState } from 'react';
import heroThumb from '../../../assets/images/successpic.png';
import PopupVideo from './PopupVideo';
import Image from 'next/image';

function HeroHomeOne() {
    const [showVideo, setVideoValue] = useState(false);
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };
    return (
        <>
            {showVideo && (
                <PopupVideo
                    videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
                    handler={(e) => handleShowVideo(e)}
                />
            )}
            <section className="appie-hero-area appie-hero-3-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="appie-hero-content text-center">
                                <h1  style={{color:"white"}}>Increase Your International Opportunity</h1>
                                <h1 style={{color: 'green' }} className='appie-title'> 6.5+ in 30 days</h1>

                                <div 
                                    className="thumb mt-100 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <Image src={heroThumb} alt="IELTS online Test thumble-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
