import React from 'react';
import aboutThumb from '../../../assets/images/LandingImageTwo2Two.webp';
import aboutThumb3 from '../../../assets/images/writingteacherSmall.png';
import icon1 from '../../../assets/images/icon/1.png';
import icon5 from '../../../assets/images/icon/5.svg';
import icon6 from '../../../assets/images/icon/6.svg';
import icon7 from '../../../assets/images/icon/7.svg';

function AboutHomeOne() {
    return (
        <>
            <section className="appie-about-3-area pt-100 pb-100" id="features">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb} alt="this is for aboutThumb iaages" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">
                                    Mr. Smart for IELTS speaking test.
                                </h3>
                                <p>
                                    Our smart teacher, Mr. Smart, lets you practice and test your IELTS speaking. You can Evaluate your speaking score and get appropriate suggestions.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30">
                                        <div className="icon">
                                            <img style={{ margin: "12px" }} src={icon5} alt="this is for icon5 iaages" />
                                        </div>
                                        <h5 className="title">Speaking test with lowest cost.</h5>
                                        <p>You can check your IELTS speaking score in lowest cost. </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30">
                                        <div className="icon">
                                            <img style={{ margin: "12px" }} src={icon1} alt="this is for icon1 iaages" />
                                        </div>
                                        <h5 className="title">Result in not time</h5>
                                        <p>Get results with suggestions instantly, which will save you time and speed up your preparation.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="traffic-btn mt-50">
                                        <a className="main-btn" href="#">
                                            Learn More <i className="fal fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-100 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="appie-traffic-title">
                                <h3 className="title">Most Convenient writing test</h3>
                                <p>
                                    We designed the most effective and helpful writing test in the world.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service mb-30 item-3">
                                        <div className="icon">
                                            <img style={{ margin: "12px" }} src={icon6} alt="this is for icon-6 iaages" />
                                        </div>
                                        <h5 className="title">Writing tests with fast results.</h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="appie-traffic-service item-2 mb-30 item-4">
                                        <div className="icon">
                                            <img style={{ margin: "12px" }} src={icon7} alt="this is for icon-7 iaages" />
                                        </div>
                                        <h5 className="title">Get the best tactics and improvements.</h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="traffic-btn mt-50">
                                        <a className="main-btn" href="#">
                                            Learn More <i className="fal fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-about-thumb-3 text-right wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <img src={aboutThumb3} alt="this is for aboutThumb3 iaages" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeOne;
