import React from 'react';
import iconOne from '../../../assets/images/icon/1.png';
import iconTwo from '../../../assets/images/icon/2.png';
import iconThree from '../../../assets/images/icon/3.png';
import iconFour from '../../../assets/images/icon/4.png';
import Image from 'next/image';

function ServicesHomeOne() {

    return (
        <>
            <section className="appie-service-area appie-service-3-area pt-195 pb-100" id="service" style={{ marginTop: "-150px" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Practice and Test with Us</h3>
                                <p>
                                    Give all the IELTS tests and get results instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
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
                                    <Image style={{ margin: "20px" }} src={iconOne} alt="this is for iconOne iaages" />
                                </div>
                                <h4 className="appie-title">Speaking</h4>
                                <p>Practice Speaking and get score with tactic.</p>
                                <a href='/SpeakingPage' style={{ cursor: "pointer", fontWeight: 900, textDecoration: "underline" }} className=''>
                                    Go for Practice <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <Image style={{ margin: "20px" }} src={iconTwo} alt="this is for iconTwo iaages" />
                                </div>
                                <h4 className="appie-title">Writing</h4>
                                <p>Practice Writing and get score with tactic.</p>
                                <a href='/WrittingPage' style={{ cursor: "pointer", fontWeight: 900, textDecoration: "underline" }}>
                                    Go for Practice <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
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
                                    <Image style={{ margin: "20px" }} src={iconFour} alt="this is for iconFour iaages" />
                                </div>
                                <h4 className="appie-title">Reading</h4>
                                <p>Practice Reading and get score with tactic.</p>
                                <a href='/ReadingPage' style={{ cursor: "pointer", fontWeight: 900, textDecoration: "underline" }}>
                                    Go for Practice <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
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
                                    <Image style={{ margin: "20px" }}
                                        src={iconThree} alt="this is for iconThree iaages" />
                                </div>
                                <h4 className="appie-title">Listening</h4>
                                <p>Practice Listening and get score with tactic</p>
                                <a href='/ListeningPage' style={{ cursor: "pointer", fontWeight: 900, textDecoration: "underline" }}>
                                    Go for Practice <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeOne;
