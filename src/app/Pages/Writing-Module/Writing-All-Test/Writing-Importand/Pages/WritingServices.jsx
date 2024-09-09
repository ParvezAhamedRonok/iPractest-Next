import React from 'react';
import { useRouter } from 'next/navigation';
import iconOne from '../../../../../../assets/images/icon/1.png';
import iconThree from '../../../../../../assets/images/icon/3.png';
import iconFour from '../../../../../../assets/images/icon/4.png';
import Image from 'next/image';

function WritingServices() {
  //function for redirect to the reading & Listening page------->>   
  const history = useRouter();
            const goBackReading = (e) => {
                e.preventDefault();
                history.push("/Pages/Reading-Module/Cambridge-Reading-tests")
            };
                const goBackListening = (e) => {
                    e.preventDefault();
                    history.push("/Pages/Listening-Module/Cambridge-listening-tests")
                };
                const goBackSpeakingPage = (e) => {
                    e.preventDefault();
                    history.push("/Pages/Speaking-Module")
                };












    return (
        <>
            <section style={{background:'#eef1f6'}} className=" appie-service-area appie-service-3-area pb-100" id="service">
                   <h2 className='title text-center w-[90vw] sm:w-full p-4  ml-7 text-gray-500 underline text-[25px] sm:text-[38px]'>
                    Other modules for practice</h2>
                <div  className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <Image style={{margin:"20px"}} src={iconOne} alt="" />
                                </div>
                                <h4 className="appie-title">Speaking</h4>
                                <p>Practise Speaking and get score with tactic.</p>
                                <p style={{cursor:"pointer" , textDecoration:"underline"}} onClick={goBackSpeakingPage}>
                                    Go for Practice <i className="fal fa-arrow-right" />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-3
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <Image style={{margin:"20px"}}  src={iconThree} alt="alert -1 " />
                                </div>
                                <h4 className="appie-title">Listening</h4>
                                <p>Check your Listening IELTS score with this module.</p>
                                <p style={{cursor:"pointer" , textDecoration:"underline"}}  onClick={goBackListening}>
                                    Go for Practice <i className="fal fa-arrow-right" />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-4
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="icon">
                                    <Image style={{margin:"20px"}}  src={iconFour} alt="alert image-2" />
                                </div>
                                <h4 className="appie-title">Reading</h4>
                                <p>Reading test is now more convenient.</p>
                                <p style={{cursor:"pointer" , textDecoration:"underline"}} onClick={goBackReading}>
                                    Go for Practice <i className="fal fa-arrow-right" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WritingServices;
