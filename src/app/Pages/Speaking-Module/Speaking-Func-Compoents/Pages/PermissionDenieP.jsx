import React from 'react';
import { isChrome, isSafari, isFirefox, isEdge, isOpera } from "react-device-detect";
import Image from 'next/image';

// permission images
import googleImg1 from "../../../../../assets/images/googleImg-2.png";
import googleImg2 from "../../../../../assets/images/googleImg-3.png"
import googleImg3 from "../../../../../assets/images/googleImg-4.png"
import googleImg4 from "../../../../../assets/images/googleImg-5.png"

//edge-
import EdgeImg1 from "../../../../../assets/images/EdgeImg-1.jpg"
import EdgeImg2 from "../../../../../assets/images/EdgeImg-2.jpg"
import EdgeImg3 from "../../../../../assets/images/EdgeImg-3.jpg"
import EdgeImg4 from "../../../../../assets/images/EdgeImg-4.jpg"
import EdgeImg5 from "../../../../../assets/images/EdgeImg-5.jpg"


//fireFox-
import fireFox1 from "../../../../../assets/images/fireFox-1.png"
import fireFox2 from "../../../../../assets/images/fireFox-2.png"
import fireFox3 from "../../../../../assets/images/fireFox-3.png"
import fireFox4 from "../../../../../assets/images/fireFox-4.png"
import fireFox5 from "../../../../../assets/images/fireFox-5.png"


//end of the importing............





function PermissionDenieP({ showPerPopUp, setShowPerPopUp }) {
    return (
        <div>
            {/* checkByBrowser if user denied the recorder  */}
            {
                showPerPopUp && (
                    <div className="Result-PopUp pt-[115px]  fixed top-2 left-2 w-[90%] sm:w-[100%]">
                        <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                            <section className=' grid grid-cols-1 mt-2 overflow-auto box-border rounded-[3%] p-3  justify-center align-middle w-[100vw] sm:w-[900px] h-[450px]  bg-green-100 z-[100000] '>
                                <h5 className="text-center mt-1 mb-4">You have blocked the site please select Allow to make a test</h5>
                                {
                                    isChrome && (<div className="p-2 grid grid-cols-1 sm:grid-cols-2 sm:m-auto m-[1px] gap-2 sm:gap-[20px]">
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Go to the Google-Setting
                                            </p>
                                            <Image src={googleImg1} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Select Privacy and Security
                                            </p>
                                            <Image src={googleImg2} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Select Site Settings
                                            </p>
                                            <Image src={googleImg3} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Select The Site
                                            </p>
                                            <Image src={googleImg4} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Select Microphone Allow
                                            </p>
                                            <Image src={googleImg4} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>

                                    </div>)
                                }

                                {
                                    isEdge && (<div className="p-2 grid grid-cols-1 sm:grid-cols-2 sm:m-auto m-[1px] gap-2 sm:gap-[20px]">
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Click the Lock icon next to the website link in the address bar. & <br />
                                                Click the Site permissions option
                                            </p>
                                            <Image src={EdgeImg1} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Use the drop-down menus to allow or deny permissions
                                            </p>
                                            <Image src={EdgeImg2} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Click the Reset permissions option.
                                            </p>
                                            <Image src={EdgeImg3} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Click the Refresh button on the site to apply the changes.
                                            </p>
                                            <Image src={EdgeImg4} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Or <br />
                                                Click the Lock icon next to the website link in the address bar. <br />
                                                Use the drop-down menus to change the permissions.
                                            </p>
                                            <Image src={EdgeImg5} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>

                                    </div>)
                                }

                                {
                                    isFirefox && (<div className="p-2 grid grid-cols-1 sm:grid-cols-2 sm:m-auto m-[1px] gap-2 sm:gap-[20px]">
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Click the Lock icon
                                            </p>
                                            <Image src={fireFox1} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Click the Connection Secure Arror
                                            </p>
                                            <Image src={fireFox2} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Click More Information
                                            </p>
                                            <Image src={fireFox3} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                Click Permissions
                                            </p>
                                            <Image src={fireFox4} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full h-full  justify-center align-middle p-2 ">
                                            <p className="text-justify mb-1 font-bold">
                                                change Microphone in allow
                                            </p>
                                            <Image src={fireFox5} alt="" className="w-[100%] sm:w-[320px] h-[200px] rounded" />
                                        </div>

                                    </div>)
                                }


                                <div className='w-full flex justify-end mt-2 '>
                                    <button
                                        className='w-[100px] h-[40px] border-2 mr-4 border-gray-300 text-black rounded bg-blue-300 hover:bg-white'
                                        onClick={() => { setShowPerPopUp(false) }}>Close
                                    </button>
                                </div>


                            </section>

                        </div>


                    </div>
                )}



        </div>
    )
}

export default PermissionDenieP