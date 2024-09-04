import React from 'react';
import "./index.css";
import CEO_Sir from '../../../assets/images/ceo.jpg';
import CTO_Pic from '../../../assets/images/Mans/Parvez-1.jpeg';
import Researcher from '../../../assets/images/shadman.jpg';
import Co_founder from "../../../assets/images/Mans/SohelVai.jpg"
import Image from 'next/image';

//end of the importing sections.........


function TeamAbout() {
    return (
        <>
            <section className="appie-team-area appie-team-about-area pb-90" id="TeamMembers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Team Members</h3>
                                <p>You welcome collaboration Working with a team means <br /> there will be varying opinions and ideas</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <Image src={CEO_Sir} alt="image for CEO" />
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/alam-al-saud/">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Alam AL Saud</h5>
                                    <a href='https://mail.google.com/mail/u/0/#inbox' className='underline text-blue'>Saud@ipractest.com</a> <br />
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb border-1 border-gray-300 h-[100%] sm:h-[279px]">
                                    <Image src={Co_founder} alt="Co-Founder image" />
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/rana161305">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/msr-rana/">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">MD Sohel Rana</h5>
                                    <a href='https://mail.google.com/mail/u/0/#inbox' className='underline text-blue'>rana161305ahmed@gmail.com</a> <br />
                                    <span>Co-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb border-1 border-gray-300 h-[100%] sm:h-[279px]">
                                    <Image src={CTO_Pic} alt="Chief technology officer (CTO)" />
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100009574957039">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/md-parvez-993b66202/">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Parvez Ahamed Ronok</h5>
                                    <a href='https://mail.google.com/mail/u/0/#inbox' className='underline text-blue'>parvej.rownok@ipractest.com</a> <br />
                                    <span>Front-End Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <Image src={Researcher} alt="Researcher image" />
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/shadman.sakib.72000">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Shadman Sakib</h5>
                                    <a href='https://mail.google.com/mail/u/0/#inbox' className='underline text-blue'>Shadman.sakib@ipractest.com</a> <br />
                                    <span>Language Researcher </span>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-3 col-md-6">*/}
                        {/*    <div*/}
                        {/*        className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"*/}
                        {/*        data-wow-duration="2000ms"*/}
                        {/*        data-wow-delay="800ms"*/}
                        {/*    >*/}
                        {/*        <div className="thumb">*/}
                        {/*            <img src={team4} alt="" />*/}
                        {/*            <ul>*/}
                        {/*                <li>*/}
                        {/*                    <a href="#">*/}
                        {/*                        <i className="fab fa-facebook-f"></i>*/}
                        {/*                    </a>*/}
                        {/*                </li>*/}
                        {/*                <li>*/}
                        {/*                    <a href="#">*/}
                        {/*                        <i className="fab fa-twitter"></i>*/}
                        {/*                    </a>*/}
                        {/*                </li>*/}
                        {/*                <li>*/}
                        {/*                    <a href="#">*/}
                        {/*                        <i className="fab fa-pinterest-p"></i>*/}
                        {/*                    </a>*/}
                        {/*                </li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*        <div className="content text-left">*/}
                        {/*            <h5 className="title">Benjamin Evalent</h5>*/}
                        {/*            <span>CEO-Founder</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-12">*/}
                        {/*    <div className="team-btn text-center mt-50">*/}
                        {/*        <a className="main-btn" href="#">*/}
                        {/*            View all Members <i className="fal fa-arrow-right"></i>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamAbout;
