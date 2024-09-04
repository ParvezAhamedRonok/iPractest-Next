import React from 'react';
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";
import image1 from '../../../assets/images/aboutSpeakingPic1.png';
import image2 from '../../../assets/images/about-pic1.jpg';
import image3 from '../../../assets/images/about-lictening-pic1.png';
import image4 from '../../../assets/images/about-writing-pic-1.png';
import { Zoom } from "react-slideshow-image";
import Image from 'next/image';

//end of the importing section.....



    


function Slider() {
    const zoomOutProperties = {
        duration: 4000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };


    return (
        <div className='mt-[137px] w-full h-[380px] sm:h-[400px] bg-gray-100 sm:bg-green-300 flex justify-center align-middle mb-[200px]'>
            <div className='w-full sm:w-[800px] h-[500px]'>
                <div className="">
                    <Zoom {...zoomOutProperties}>
                        <div className='relative'>
                            <Image style={{ width: "100%",opacity:0.9,borderRadius:"10px" }} src={image1} alt='first image for slider ' />
                            <div className='block  sm:absolute left-2 text-black sm:text-white font-bold bottom-2 text-center p-3'>
                                <p className='text-2xl text-black sm:text-white font-bold underline'>Speaking</p>  <br />
                                Speaking IELTS is one of four parts of the English language proficiency exam that assesses a candidate's oral communication skills in social, educational and training contexts. It is the same for both academic and general modules. It is a face-to-face discussion with one trained examiner who records the answers. It has three parts and lasts for around 15 minutes.</div>
                        </div>
                        <div className='relative'>
                            <Image style={{ width: "100%",opacity:0.9,borderRadius:"10px" }} src={image2} alt='second image for slider' />
                            <div className='block  sm:absolute left-2 text-black sm:text-white font-bold bottom-2 text-center p-3'>
                                <p className='text-2xl text-black sm:text-white font-bold underline'>Reading</p>  <br />
                                IELTS Reading is a test that measures various reading skills such as finding gist, main ideas, details, logical argument, and writer's opinion and purpose. It has three parts or passages of increasing difficulty, and 40 questions to answer in 60 minutes. The test is different for Academic and General Training versions, with the Academic version being more challenging.</div>
                        </div>
                        <div className='relative'>
                            <Image style={{ width: "100%",opacity:0.9,borderRadius:"10px" }} src={image3} alt='third image for slider' />
                            <div className='block  sm:absolute left-2 text-black sm:text-white font-bold bottom-2 text-center p-3'>
                                <p className='text-2xl text-black sm:text-white font-bold underline'>Listening</p>  <br />
                                The IELTS Listening test is a section of the IELTS test that evaluates your ability to listen to conversations, understand the ideas, and draw conclusions1.  The test has four sections, with 10 questions in each section, and one mark for each correct answer. The test is the same for both Academic and General Training test-takers. The test gets increasingly more difficult as you progress4.</div>
                        </div>
                        <div className='relative'>
                            <Image style={{ width: "100%",opacity:0.9,borderRadius:"10px" }} src={image4} alt='fourth image for slider' />
                            <div className='block  sm:absolute left-2 text-black sm:text-white font-bold bottom-2 text-center p-3'>
                                <p className='text-2xl text-black sm:text-white font-bold underline'>Writing</p>  <br />
                                Writing IELTS is one of the four tests that assesses your listening, reading, writing, and speaking skills. It consists of two tasks that take 60 minutes in total. The tasks are different depending on whether you are doing the Academic or the General test.. Writing IELTS is considered the most challenging part of the test by many candidates2. </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Slider
