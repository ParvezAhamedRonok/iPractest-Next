import React from 'react';
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import { RiFacebookCircleFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import FacePageImg from "../../../../assets/images/otherImgs/LinkFacePage.png";
import Image from 'next/image';
//end importing.........


function WSlider() {
    const zoomOutProperties = {
        duration: 6000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };


    return (
        <div className='mt-2 w-full h-[330px] ml-[1px] sm:ml-[20px] flex justify-center align-middle mb-[100px]'>
            <div className='w-full sm:w-[800px] h-[300px]'>
                <label className='text-[25px]'>iPractest on Social Media</label>
                <hr />
                <div className="translate-y-[-10px]">
                    <Zoom {...zoomOutProperties}>
                        <div className='relative flex gap-2'>
                            <div className='w-full sm:w-[50%] border-2 border-gray-600 rounded'>
                                <label className='w-full flex justify-between p-2'><p>FaceBook Page</p>
                                    <a href="https://www.facebook.com/iPractest/">
                                        <RiFacebookCircleFill className='text-3xl text-blue-700' />
                                    </a>
                                </label>
                                <Image style={{ width: "100%", opacity: 0.9 }} src={FacePageImg} />
                            </div>
                            <div className='w-full sm:w-[50%] border-2 border-gray-600 rounded'>
                                <label className='w-full flex justify-between p-2'><p>Linkedin Page</p>
                                    <a href="https://www.linkedin.com/company/95735008/admin/feed/posts/">
                                        <GrLinkedin className='text-2xl text-blue-700' />
                                    </a>

                                </label>
                                <Image style={{ width: "100%", opacity: 0.9 }} src={FacePageImg} />
                            </div>

                        </div>
                        <div className='relative flex gap-2'>
                            <div className='w-full sm:w-[50%] border-2 border-gray-600 rounded'>
                                <label className='w-full flex justify-between p-2'><p>FaceBook Page</p>
                                    <a href="https://www.facebook.com/iPractest/">
                                        <RiFacebookCircleFill className='text-3xl text-blue-700' />
                                    </a>
                                </label>
                                <Image style={{ width: "100%", opacity: 0.9 }} src={FacePageImg} />
                            </div>
                            <div className='w-full sm:w-[50%] border-2 border-gray-600 rounded'>
                                <label className='w-full flex justify-between p-2'><p>Linkedin Page</p>
                                    <a href="https://www.linkedin.com/company/95735008/admin/feed/posts/">
                                        <GrLinkedin className='text-2xl text-blue-700' />
                                    </a>

                                </label>
                                <Image style={{ width: "100%", opacity: 0.9 }} src={FacePageImg} />
                            </div>
                        </div>
                        {/* <div className='relative'>
                            <Image style={{ width: "50%", opacity: 0.9, borderRadius: "10px" }} src={image3} />
                        </div>
                        <div className='relative'>
                            <Image style={{ width: "50%", opacity: 0.9, borderRadius: "10px" }} src={image4} />
                        </div> */}
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default WSlider
