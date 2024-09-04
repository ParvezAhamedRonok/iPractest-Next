import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiStarSFill } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import Img1 from "../../../assets/images/LandingImgs/Owl1.jpg"
import Img2 from "../../../assets/images/LandingImgs/Owl2.jpg"
import Img3 from "../../../assets/images/LandingImgs/Owl3.jpeg";
import Image from "next/image";

export default function TestimonialHomeTwo() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const sliderImageUrl = [
        //First image url
        {
            url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
            name: "Muhammad Sakib",
            title: "Bangladesh",
            desc: "The best website for IELTS preparation helped me achieve a score of 6.5 within a few months."
        },
        {
            url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
            name: "Kamlesh Ranabhat",
            title: "Nepal",
            desc: "The most helpful website I have found so far offers everything in one spot, with remarkable customer support."
        },
        //Second image url
        {
            url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
            name: "Kaysab Roy",
            title: "India",
            desc: "The best IELTS online practicing website on the planet. It's really helpful for all modules."
        },
        //Third image url
        {
            url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
            name: "Monjorul Haque",
            title: "Bangladesh",
            desc: "After three months of preparation, I got 7 in IELTS. This website has helped me a lot. Thanks for creating such a website"
        },

        //Fourth image url
        {
            url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
            name: "Kaysab Roy",
            title: "India",
            desc: "The best IELTS online practicing website on the planet. It's really helpful for all modules."
        },
    ];


    return (
        <div className="parent sm:p-[50px] p-[20px] translate-y-[-50px] bg-gray-100">
            <div className="relative text-center flex translate-y-[-25px] sm:translate-y-[-38px] justify-center font-bold text-[#ec9a1c] text-2xl sm:text-4xl align-middle pt-4 pb-4">
                What our users say About us
                <div className="absolute bottom-0 left-0 right-0 m-auto w-[150px] sm:w-[200px] p-[2px] translate-y-[0px] sm:translate-y-[7px] rounded-[10px] bg-[#ec9a1c] "></div>
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={15000}
                swipeable={true}
                draggable={true}
                showDots={true}
                // customTransition="all .5"
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {sliderImageUrl.map((imageUrl, index) => {
                    return (
                        <div className="slider" key={index}>
                            <div className="imgBox h-[400px] bg-white shadow-md mt-4">
                                <img src={imageUrl.url} alt="movie" className="absolute top-0  rounded-[50%] left-0 right-0 m-auto w-[110px] h-[110px] roundeed-[50%]" />
                                <div className="flex justify-center align-middle text-black translate-y-[110px] p-3">
                                    <div className="m-auto">
                                        <p className="font-bold text-center text-xl translate-y-[-10px]">{imageUrl.name}</p>
                                        <p className="text-center text-[12px] translate-y-[-12px]">{imageUrl.title}</p>
                                        {/* <div className=""> </div> */}
                                        <div className="text-center translate-y-3 leading-[30px] text-[15px] font-serif">
                                            <span><RiDoubleQuotesL className="text-2xl translate-x-[-3px] text-yellow-600" /></span>
                                            {imageUrl.desc}
                                            <span><RiDoubleQuotesR className="text-2xl translate-x-[3px] text-yellow-600" /></span>
                                        </div>
                                        <div className="flex justify-center align-middle gap-1 text-center text-[14px] translate-y-[35px] m-auto">
                                            <RiStarSFill className="text-blue-700" />
                                            <RiStarSFill className="text-blue-700" />
                                            <RiStarSFill className="text-blue-700" />
                                            <RiStarSFill className="text-blue-700" />
                                            <RiStarSFill className="text-blue-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </Carousel>
        </div>
    );
}