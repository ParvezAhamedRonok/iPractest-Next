// import Swiper core and required modules
import React from "react";
import "./MainSlider.css";
import Image from "next/image";
import image1 from '../../../assets/images/aboutSpeakingPic1.png';
import image2 from '../../../assets/images/about-pic1.jpg';
import image3 from '../../../assets/images/about-lictening-pic1.png';
import image4 from '../../../assets/images/about-writing-pic-1.png';


export default function MainSlider() {
    return (
        <div className='w-full h-[500px] mt-[200px] mb-[40px] p-[20px] bg-white flex gap-[10px] sm:gap-[40px] box-border overflow-hidden'>
            {/* <section className="section">
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
            </section> */}
            <div className="w-full h-full flex justify-center box-border overflow-auto">
                <div className="m-auto p-[10px] sm:p-[25px] md:p-[40px]">
                    <p className="text-xl sm:text-2xl md:text-4xl  mb-3 font-bold">Let's Practice<br />
                        The World Together!</p>
                    <p className="w-[100%] sm:w-[85%] text-justify font-bold">
                        IELTS is a test of English language skills for people who want to work, study or migrate to countries where English is the native language. There are different types of IELTS tests, such as IELTS Academic, which is suitable for those who want to study at an English-speaking university or for professional registration purposes. To prepare for the test, you can access free IELTS study materials and resources from the British Council, which will help you get familiar with the test format and improve your confidence in English.</p>
                </div>
            </div>
            <div className="slider h-[350px] mt-[50px] mr-[50px] rounded-[10px]">
                <div>
                    <Image src={image1} alt="Alt 1" />
                    <p className="text-center p-2 font-bold text-xl underline bg-emerald-200 mb-1">Speaking</p>
                    <p className="bg-emerald-200 p-2 h-full text-center text-[11px] leading-[15px] mt-[-15px]  font-bold">
                    Speaking IELTS is one of four parts of the English language proficiency exam that assesses a candidate's oral communication skills in social, educational and training contexts. It is the same for both academic and general modules. It is a face-to-face discussion with one trained examiner who records the answers. It has three parts and lasts for around 15 minutes.
                    </p>
                </div>
                <div>
                    <Image src={image2} alt="Alt 1" />
                    <p className="text-center p-2 font-bold text-xl underline bg-red-200 mb-1">Reading</p>
                    <p className="bg-red-200 p-2 h-full text-center text-[11px] leading-[15px] mt-[-15px]  font-bold">
                    IELTS Reading is a test that measures various reading skills such as finding gist, main ideas, details, logical argument, and writer's opinion and purpose. It has three parts or passages of increasing difficulty, and 40 questions to answer in 60 minutes. The test is different for Academic and General Training versions, with the Academic version being more challenging.
                    </p>
                </div>
                <div>
                    <Image src={image3} alt="Alt 1" />
                    <p className="text-center p-2 font-bold text-xl underline bg-green-200 mb-1">Listening</p>
                    <p className="bg-green-200 p-2 h-full text-center text-[11px] leading-[15px] mt-[-15px]  font-bold">
                        The IELTS Listening test is a section of the IELTS test that evaluates your ability to listen to conversations, understand the ideas, and draw conclusions1.  The test has four sections, with 10 questions in each section, and one mark for each correct answer. The test is the same for both Academic and General Training test-takers. The test gets increasingly more difficult as you progress4.
                    </p>
                </div>
                <div>
                    <Image src={image4} alt="Alt 1" />
                    <p className="text-center p-2 font-bold text-xl underline bg-emerald-200 mb-1">Writing</p>
                    <p className="bg-emerald-200 p-2 h-full text-center text-[11px] leading-[15px] mt-[-15px]  font-bold">
                        Writing IELTS is one of the four tests that assesses your listening, reading, writing, and speaking skills. It consists of two tasks that take 60 minutes in total. The tasks are different depending on whether you are doing the Academic or the General test.. Writing IELTS is considered the most challenging part of the test by many candidates2.
                    </p>
                </div>
                <div>
                    <Image src={image1} alt="Alt 1" />
                    <p className="text-center p-2 font-bold text-xl underline bg-red-200 mb-1">Speaking</p>
                    <p className="bg-red-200 p-2 h-full text-center text-[11px] leading-[15px] mt-[-15px]  font-bold">
                        Speaking IELTS is one of four parts of the English language proficiency exam that assesses a candidate's oral communication skills in social, educational and training contexts. It is the same for both academic and general modules. It is a face-to-face discussion with one trained examiner who records the answers. It has three parts and lasts for around 15 minutes.
                    </p>
                </div>
                <div>
                    <Image src={image4} alt="Alt 1" />
                    <p className="text-center p-2 font-bold text-xl underline bg-sky-200 mb-1">Writing</p>
                    <p className="bg-sky-200 p-2 h-full text-center text-[11px] leading-[15px] mt-[-15px]  font-bold">
                        Writing IELTS is one of the four tests that assesses your listening, reading, writing, and speaking skills. It consists of two tasks that take 60 minutes in total. The tasks are different depending on whether you are doing the Academic or the General test.. Writing IELTS is considered the most challenging part of the test by many candidates2.
                    </p>
                </div>
            </div>
        </div>
    );
}
