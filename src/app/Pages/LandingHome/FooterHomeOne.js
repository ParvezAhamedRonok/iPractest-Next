
"use client"
import React from 'react';
import Link from 'next/link';
import logo from '../../../assets/images/Practestlogo.png';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function FooterHomeOne({ className }) {
    const history = useRouter();

    return (
        <>
            <section className={`appie-footer-area appie-footer-3-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget footer-about-widget-3">
                                <div className="logo" style={{ width: "180px", height: "80px", marginBottom: "14px", marginTop: "-15px" }}>
                                    <Image src={logo}
                                        onClick={() => { history.push("/") }}
                                        alt="this is for logo footer-Images" />
                                </div>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/saud.arian">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/alam-al-saud/">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link href="/Pages/AboutUs">About Us</Link>
                                    </li>

                                    <li>
                                        <Link href="/Pages/Footer-Pages/Disclaimer">Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">Support</h4>
                                <ul>
                                    <li>
                                        <Link href="/Pages/AboutUs">Community</Link>
                                    </li>
                                    <li>
                                        <Link href="/Pages/Footer-Pages/Privacy-Policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/Pages/Footer-Pages/Term-Conditions">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="/Pages/Footer-Pages/Refund-Policy">Refunds Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/Pages/Footer-Pages/Canclation-Policy">Cancellation Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/Pages/Footer-Pages/Deletaion-Policy">User Data Deletion Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="parvej.rownok@ipractest.com">
                                            <i className="fal fa-envelope mt-[3px]" /> support@iPractest.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://web.whatsapp.com/">
                                            <i className="fal fa-phone mt-[3px]" /> +880 16439-14634
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/https://www.google.com/maps/@24.9167872,89.9350528,13z?entry=ttu">
                                            <i className="fal fa-map-marker-alt mt-[3px]" /> Property chrest, 66 Shahid Selina parvin road , Malibag , Dhaka , Bangladesh
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                footer-copyright
                d-flex
                align-items-center
                justify-content-between
                pt-35
              "
                            >
                                <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href='#'>
                                                <i className="fab fa-apple" /> Coming Soon..
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' className="item-2" >
                                                <i className="fab fa-google-play" /> Coming Soon..
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-text">
                                    <p className='mb-2'> © 2024 iPractest. All rights reserved.</p>
                                    <p>E-Trade License:  TRAD/DSCC/023883/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-12 w-dull text-center p-[20px] mt-2'>
                            <h4 className=''>Copyright © 2024 iPractest.com</h4>
                            <p className='p-4'>IELTS is a registered trademark of University of Cambridge, the British Council, and IDP Education Australia. This site and its owners are not affiliated, approved or endorsed by the University of Cambridge ESOL, the British Council, and IDP Education Australia.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
