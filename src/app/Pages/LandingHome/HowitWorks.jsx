
"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Image from 'next/image';
// import "Showcontent.css"

//speaking Images----
import Speakingimg1 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-1.png"
import Speakingimg2 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-2.png"
import Speakingimg3 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-3.png"
import Speakingimg4 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-4.png"
import Speakingimg5 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-5.png"
import Speakingimg6 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-6.png"
import Speakingimg7 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-7.png"
import Speakingimg8 from "../../../assets/images/Speaking-Images/StepGuideImgs/img-8.png"

//Writing Images------
import WritingImg1 from "../../../assets/images/Writing-Images/stepSlider/img-1.png"
import WritingImg2 from "../../../assets/images/Writing-Images/stepSlider/img-2.png"
import WritingImg3 from "../../../assets/images/Writing-Images/stepSlider/img-3.png"
import WritingImg4 from "../../../assets/images/Writing-Images/stepSlider/img-4.png"
import WritingImg5 from "../../../assets/images/Writing-Images/stepSlider/img-5.png"

//Reading Images ---
import ReadingImg1 from "../../../assets/images/Reading-Images/stepSlides/img-1.png"
import ReadingImg2 from "../../../assets/images/Reading-Images/stepSlides/img-2.png"
import ReadingImg3 from "../../../assets/images/Reading-Images/stepSlides/img-3.png"
import ReadingImg4 from "../../../assets/images/Reading-Images/stepSlides/img-4.png"
import ReadingImg5 from "../../../assets/images/Reading-Images/stepSlides/img-5.png"
import ReadingImg6 from "../../../assets/images/Reading-Images/stepSlides/img-6.png"

//Listening images-------
import ListeningImg1 from "../../../assets/images/listening-images/stepSlider/img-1.png"
import ListeningImg2 from "../../../assets/images/listening-images/stepSlider/img-2.png"
import ListeningImg3 from "../../../assets/images/listening-images/stepSlider/img-3.png"
import ListeningImg4 from "../../../assets/images/listening-images/stepSlider/img-4.png"
import { isMobile } from 'react-device-detect';


function HowitWords() {
    const [changeContents, setChangeContent] = useState("Speaking")
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 12000,
    };


    return (
        <>
            <div className="appie-how-it-work-area pt-10  pb-100">
                <div className="container  p-5 rounded-[30px] bg-blue-50">
                    <div className="row align-items-center">
                        {
                            isMobile && <div className='text-center pb-3'>
                                <h2 className="title mb-1">How It works</h2>
                                <p>
                                    Lets's have a look how our Modules Work with a simple step guide slider.
                                </p>
                            </div>
                        }
                        <div className="col-lg-6">
                            <div className="how-it-work-thumb text-center">
                                {/* <img src={workThumb} alt="" /> */}
                                <div className="slider-container w-full h-full border-3 border-gray-400">


                                    {
                                        changeContents == "Speaking" && <>
                                            <Slider {...settings}>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg1} alt="this is for speaking imag-1" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-1:</span>
                                                            Click the Speaking button to navigate to the Speaking section.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-2:</span>
                                                            If you want to access speaking vocabularies, click the Vocabulary button. It will provide vocabulary links and some useful tips.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg2} alt="this is for speaking imag-2" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-3:</span>
                                                            Scroll down you can see lots of speaking tests.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-4:</span>
                                                            Click on any test that you want.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg3} alt="this is for speaking imag-3" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-5:</span>
                                                            If you click on Section 1 or Section 3, you will be redirected to this page.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-6:</span>
                                                            To start the test, click the play button. The conversation will then begin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg4} alt="this is for speaking imag-4" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-7:</span>
                                                            You can see your speech displayed below as marked.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-8:</span>
                                                            You can also see how your answer was evaluated. If your answer was good, the number below will be green. If it was average, it will be yellow. If your answer was not good, the number will be red for each question.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg5} alt="this is for speaking imag-5" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-9:</span>
                                                            Now, if you click on Section 2, you will be redirected to this page, which will look like this.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-10:</span>
                                                            You need to click the play button to start the test.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-11:</span>
                                                            You will have one minute for preparation. You can use this time to prepare or click the 'Skip Preparation' button to start the test immediately.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-12:</span>
                                                            You will receive one minute of preparation time with the free test. If you have a subscription, you will get two minutes.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg6} alt="this is for speaking imag-6" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>After finishing the test, you will receive your results, which will look like the image below.</span>

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-13:</span>
                                                            You can view all of your results in the Results tab, including Fluency & Coherence, Linking Words, Grammatical Accuracy, and Pronunciation.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg7} alt="this is for speaking imag-7" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-14:</span>
                                                            You can find suggestions and improvements in the Improvements tab.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={Speakingimg8} alt="this is for speaking imag-8" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-15:</span>
                                                            If you want to view your conversations, please click on 'Review Recordings.
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </>
                                    }

                                    {
                                        changeContents == "Writing" && <>
                                            <Slider {...settings}>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={WritingImg1} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-1:</span>
                                                            Click the Writing button to go to the Writing section.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'> Select the task you want to do: Task 1 or Task 2..</span>

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-2:</span>
                                                            If you want writing vocabularies, click the Vocabulary button. It will provide vocabulary links and tips
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={WritingImg2} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-3: After uploading the correct question image to the Upload Question section, it will be considered best practice.</span>
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-4:</span>
                                                            There are two main sections that you can use for your writing evaluations. <br /> <br />
                                                            <span className='text-[15px] text-start font-bold mr-2'>*Write the content yourself after uploading the question image</span> <br /> <br />
                                                            <span className='text-[15px] text-start font-bold mr-2'>* Upload your answer images after uploading the question image.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={WritingImg3} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-7:</span>
                                                            So, if you want to write your answer, please follow these steps.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-8:</span>
                                                            first upload your question image.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-9:</span>
                                                            Write your answer into the box.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-10:</span>
                                                            Click the 'Writing Evaluation' button to get your results
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={WritingImg4} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>  Alternatively, if you want to get an evaluation by uploading your answer images, please follow these steps</span>

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-11:</span>
                                                            First, upload your question image into the question upload section.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-12:</span>
                                                            Then, upload all of your answer images into the upload section, as shown in the image..
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-13:</span>
                                                            Click the 'Writing Evaluation' button to receive your results.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={WritingImg5} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>  Here are your corrections and all of iPractest's suggestions.</span>

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-14:</span>
                                                            You can find your corrections in the Writing Corrections tab.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-15:</span>
                                                            If you want to see all linking words, grammar mistakes, and coherence issues, click the 'Result Evaluation' button.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-15:</span>
                                                            To get improvement sections and suggestions from iPractest, click the 'Area of Improvement
                                                        </div>
                                                    </div>
                                                </div>

                                            </Slider>
                                        </>
                                    }
                                    {
                                        changeContents == "Reading" && <>
                                            <Slider {...settings}>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ReadingImg1} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-1:</span>
                                                            Click on Reading button for going to the Writing section.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'> Select which test you want ot take</span>

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-2:</span>
                                                            If you want Reading Vocabularies then click on the Vocabulary button it will give some Vocabularies links & also able to get some tips
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ReadingImg2} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-3:</span>
                                                            if you are into pc you can see the paragraph into the left side & your questions will be right side
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-4:</span>
                                                            Click the (Next) button for get the next paragraphs & Questions <br /> <br />

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-5:</span>
                                                            Can show the nootpad for make practice. <br /> <br />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ReadingImg5} alt="" className='w-full h-[350px] m-auto' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-**:</span>
                                                            if you are into Mobiles you can see the paragraph first in your mobile display.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-**:</span>
                                                            Click (Question) button for get all Questions <br /> <br />

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-**:</span>
                                                            Click (Go section-2) for get next sections & Questions <br /> <br />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ReadingImg6} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-7:</span>
                                                            After make Answer all the questions click on the (check answers) button for getting the Result.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ReadingImg3} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>(**):</span>
                                                            Great here is your Result.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-8:</span>
                                                            You can see the right answer in every questions & also get the explanation button
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-9:</span>
                                                            You can click Explanation button for getting Answer explanations.
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </>
                                    }

                                    {
                                        changeContents == "Listening" && <>
                                            <Slider {...settings}>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ListeningImg1} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-1:</span>
                                                            Click on Listening button for going to the Writing section.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'> Select which test you want to take</span>

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-2:</span>
                                                            If you want Reading Vocabularies then click on the Vocabulary button it will give some Vocabularies links & also able to get some tips
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ListeningImg2} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-3:</span>
                                                            it will redirect you to this page.
                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-4:</span>
                                                            Click the (Listen) button for listening the Audio & in every section has a Audio button you have to play after finishing one section<br /> <br />

                                                        </div>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-5:</span>
                                                            Can also practice by clicking the show notepad button it will open a box that you can use for practice<br /> <br />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ListeningImg3} alt="" className='w-[50%] h-[350px] m-auto' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>

                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-6:</span>
                                                            After fill all of your answer click the (check answer button ) for getting the results <br /> <br />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full h-full relative bg-blue-200 rounded-[20px] overflow-hidden'>
                                                    <Image src={ListeningImg4} alt="" className='w-full h-[350px]' />
                                                    <div className='p-2 text-start w-full h-[100px] overflow-auto bg-sky-50'>
                                                        <div className='text-[11px]'><span className='text-[15px] text-start font-bold mr-2'>Step-7:</span>
                                                            Great , see the Scores base on yous answers && also can see the right answers in your every question with the Green color.
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-1 translate-x-[5px]">
                            <div className="appie-how-it-work-content">
                                {
                                    !isMobile && <>
                                        <h2 className="title">How It works</h2>
                                        <p>
                                            Lets's have a look how our Modules Work with a simple step guide slider.
                                        </p>
                                    </>
                                }
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box"
                                            onClick={() => { setChangeContent("Speaking") }}
                                        >
                                            <span
                                                className={`${changeContents == "Speaking" && "afterClicespan"} span`}
                                            >1</span>
                                            <h5 className="title">
                                                Speaking
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box"
                                            onClick={() => { setChangeContent("Writing") }}
                                        >
                                            <span
                                                className={`${changeContents == "Writing" && "afterClicespan"} span`}
                                            >2</span>
                                            <h5 className="title">
                                                Writing
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box"
                                            onClick={() => { setChangeContent("Reading") }}
                                        >
                                            <span
                                                className={`${changeContents == "Reading" && "afterClicespan"} span`}
                                            >3</span>
                                            <h5 className="title">
                                                Reading
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box"
                                            onClick={() => { setChangeContent("Listening") }}
                                        >
                                            <span
                                                className={`${changeContents == "Listening" && "afterClicespan"} span`}
                                            >4</span>
                                            <h5 className="title">
                                                Listening
                                            </h5>
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>5</span>
                                            <h5 className="title">
                                                SOP
                                            </h5>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowitWords;
