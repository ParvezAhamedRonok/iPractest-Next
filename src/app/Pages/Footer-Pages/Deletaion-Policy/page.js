"use client"
import React from 'react'
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';

import DeletionImg1 from "../../../../assets/images/PolicyImgs/DeletionImg1.png"
import DeletionImg2 from "../../../../assets/images/PolicyImgs/DeletionImg2.png"
import DeletionImg3 from "../../../../assets/images/PolicyImgs/DeletionImg3.png"
import Image from 'next/image';
import dynamic from 'next/dynamic';
//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });






function DeletionPolicy() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <section>
            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <div className='p-[40px] sm:p-[55px] w-[100%] sm:w-[68%] h-auto mt-[140px]'>
                <div>
                    <h2>User Data Deletion Policy</h2> <br />
                    <p>Last updated: June 9, 2024 <br />
                        <span className='font-bold block mt-2'>According to the Facebook Apps and Websites Platform rules, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL. If you want to delete your activities for the iPractest website, you can remove them by following the instructions below..</span></p>    <br />
                </div> <br />
                <div>
                    <h6>1. Open iPractest website into your device & Login your account.</h6> <br />
                    <h6>2. Come to your dashboard click on the top corner Hi, button like below image.</h6> <br />
                    <Image src={DeletionImg1} alt="" className='w-full h-full' />
                </div>  <br />

                <div>
                    <h6>3. After that it will show a popUp like below simply click on <span className='font-bold text-red-700'>Delete Account</span> button if you want to delete your account permanently.</h6> <br />
                    <Image src={DeletionImg2} alt="" className='w-full h-full' />
                </div> <br />


                <div>
                    <h6>4. After that confirm your password that it's you & click on <span className='font-bold text-red-700'>Delete Account</span>. it will delete you account permanently form iPrctest website</h6> <br />
                    <Image src={DeletionImg3} alt="" className='w-full h-full' />
                </div> <br /> <br />

                <div>
                    <h2>Contact Us</h2> <br />
                    <p>If you have any questions about this Delation Policy, You can contact us:</p> <br />
                    <ul class="list-disc pl-[8px] sm:pl-[17px]">
                        <li className=' font-bold'>By email: support@ipractest.com</li>
                        {/* Saud@ipractest.com */}
                    </ul>
                </div>
            </div>
            <FooterHomeThree />
            <BackToTop />
        </section>
    )
}

export default DeletionPolicy