
"use client"
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

function NavigationHome() {
    const currentRoute = usePathname();
    console.log(currentRoute)
    //    const currentRoute = useRouter().pathname.toLowerCase();

    // let nextServicePath = currentRoute.slice(1).toUpperCase();
    return (
        <>
            <ul >
                <li>
                    <Link className={`${currentRoute == '/' ? "Nav_active" : "Nav_Nonactive"}`} href="/" style={{ color: currentRoute == '/' ? "#000" : "#fff" }}>Home</Link>

                    {/*  if we want we can use those in our webpage */}

                    {/* <ul className="sub-menu">
                                                        <li>
                                                            <Link href="/">Home 1</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-two">Home 2</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-three">Home 3</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-four">Home 4</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-five">Home 5</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-six">Home 6</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-seven">Home 7</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-eight">Home 8</Link>
                                                        </li>
                                                    </ul> */}
                </li>
                <li
                    // onClick={(e) => handler(e, 'service')}  
                    // onClick={(e) => alert("Speaking page is under construction. This page will be live on 15th oct")}
                    id="service"
                    className="menu-item-has-children active cursor-pointer"
                >
                    <Link className={currentRoute.includes("Speaking-Module") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/Speaking-Module" style={{ color: currentRoute.includes("Speaking-Module") ? "#000" : "#fff" }}>Speaking</Link>

                </li>
                <li>
                    <Link className={currentRoute.includes("Cambridge-Reading-tests") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/Reading-Module/Cambridge-Reading-tests" style={{ color: currentRoute.includes("Cambridge-Reading-tests") ? "#000" : "#fff" }}>Reading</Link>

                </li>
                <li>
                    <Link className={currentRoute == "writtingpage" ? "Nav_active" : "Nav_Nonactive"} href="/WrittingPage" style={{ color: currentRoute == "writtingpage" ? "#000" : "#fff" }}>Writing</Link>
                </li>
                <li>
                    <Link className={currentRoute == "listeningpage" ? "Nav_active" : "Nav_Nonactive"} href="/ListeningPage/cambridgeAllTests" style={{ color: currentRoute == "listeningpage" ? "#000" : "#fff" }}>Listening</Link>
                </li>
                <li>
                    <Link className={currentRoute.includes("AboutUs") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/AboutUs" style={{ color: currentRoute.includes("AboutUs") ? "#000" : "#fff" }}>About Us</Link>
                </li>
                {/* <li>
                    <Link className={currentRoute.includes("sop-download") ? "Nav_active" : "Nav_Nonactive"} href="/SOP-Download" style={{ color: currentRoute.includes("sop-download") ? "#000" : "#fff" }}>SOP-Download</Link>
                </li> */}
                {/* <li>
                    <Link className={currentRoute.includes("contact") ? "Nav_active" : "Nav_Nonactive"} href="/contact" style={{ color: currentRoute.includes("contact") ? "#000" : "#fff" }}>Contact</Link>
                </li> */}
                <li>
                    <Link className={currentRoute.includes("SOFDownload") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/SOPFILE/SOFDownload" style={{ color: currentRoute.includes("SOFDownload") ? "#000" : "#fff" }}>SOP</Link>
                </li>

                {/* <li>
                    <a href="#" className={currentRoute.includes("sop-download") || currentRoute.includes("lor-download") ? "Nav_active" : "Nav_Nonactive"}
                     style={{
                        color: currentRoute.includes("sop-download") || currentRoute.includes("lor-download") ? "#000" : "#fff"
                     }}
                    >
                        {
                            currentRoute.includes("sop-download") || currentRoute.includes("lor-download") ? <>{nextServicePath}</> : <>Services <i className="fal fa-angle-down" /></>
                        }
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/sop-download">SOP Download</Link>
                        </li>
                        
                        <li>
                            <Link href="/Create-CV">Create CV</Link>
                        </li>
                    </ul>
                </li> */}
                {/* <li>
                            <Link href="/lor-download">LOR Download</Link>
                        </li> */}

            </ul>
        </>
    );
}

export default NavigationHome;
