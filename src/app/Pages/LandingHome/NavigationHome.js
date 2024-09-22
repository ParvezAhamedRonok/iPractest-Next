
"use client"
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

function NavigationHome() {
    const currentRoute = usePathname();
    return (
        <>
            <ul >
                <li>
                    <Link className={`${currentRoute == '/' ? "Nav_active" : "Nav_Nonactive"}`} href="/" style={{ color: currentRoute == '/' ? "#000" : "#fff" }}>Home</Link>
                </li>
                <li
                    id="service"
                    className="menu-item-has-children active cursor-pointer"
                >
                    <Link className={currentRoute.includes("Speaking-Module") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/Speaking-Module" style={{ color: currentRoute.includes("Speaking-Module") ? "#000" : "#fff" }}>Speaking</Link>

                </li>
                <li>
                    <Link className={currentRoute.includes("Cambridge-Reading-tests") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/Reading-Module/Cambridge-Reading-tests" style={{ color: currentRoute.includes("Cambridge-Reading-tests") ? "#000" : "#fff" }}>Reading</Link>

                </li>
                <li>
                    <Link className={currentRoute.includes("Writing-Module") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/Writing-Module/Actual-writing-tests" style={{ color: currentRoute.includes("Writing-Module") ? "#000" : "#fff" }}>Writing</Link>
                </li>
                <li>
                    <Link className={currentRoute.includes("Listening-Module") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/Listening-Module/Cambridge-listening-tests" style={{ color: currentRoute.includes("Listening-Module") ? "#000" : "#fff" }}>Listening</Link>
                </li>
                <li>
                    <Link className={currentRoute.includes("AboutUs") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/AboutUs" style={{ color: currentRoute.includes("AboutUs") ? "#000" : "#fff" }}>About Us</Link>
                </li>
                <li>
                    <Link className={currentRoute.includes("SOFDownload") ? "Nav_active" : "Nav_Nonactive"} href="/Pages/SOPFILE/SOFDownload" style={{ color: currentRoute.includes("SOFDownload") ? "#000" : "#fff" }}>SOP</Link>
                </li>

            </ul>
        </>
    );
}

export default NavigationHome;
