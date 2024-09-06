import React from "react";
import { SOPDownloadedFiles } from "../SOPData";
import { useRouter } from 'next/navigation';
import { CiSaveDown1 } from "react-icons/ci";
import PdfImage from "../../../../assets/SOP-Files/Imgs/pdf.jpeg"
import { FaPenToSquare } from "react-icons/fa6";
import { isMobile } from "react-device-detect";
import ImagSide from "../../../../assets/images/Carton-2.png"
import Image from "next/image";

//end of the importings........


const PdfDawonloader = () => {
    const history = useRouter();

    // PDf downloader function 
    const onButtonClick = (pdfURLGet) => {
        const pdfUrl = pdfURLGet;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "../"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="appie-service-area appie-service-3-area pt-[125px] sm:pt-[130px] pb-50" id="service"
        >
            <div className="w-full grid sm:flex gap-3 justify-center  p-4">
                <div className="text-center w-[100%] sm:w-[50%]  rounded  grid justify-center align-middle h-[210px] sm:h-[350px]">
                    <div className="m-auto translate-x-[0px] sm:translate-x-[15px]">
                        <strong className='text-3xl sm:text-5xl mb-3 font-bold'>Create Your Own SOP</strong>
                        <p className="mt-1">Make Your (SOP) For Your Study</p>
                        <div className='w-full justify-center p-3 mt-2'>
                            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 zoom-in-out-box"
                                onClick={() => {
                                    history.push("/SOP-Maker-for-user")
                                }}
                            >
                                Creat SOP
                                <FaPenToSquare className='text-2xl mt-[-3px]' />
                            </button>
                        </div>
                    </div>
                </div>
                {
                    !isMobile && (
                        <div className="text-center w-[100%] sm:w-[50%]">
                            <Image src={ImagSide} alt="in mobile sop downloaded image" className="w-[100%] sm:w-[74%] h-[250px] sm:h-[300px] rounded ml-[0px] sm:ml-[7px] z-[55] translate-y-[25px]" />
                        </div>
                    )
                }
            </div>
            <>

                <div className="translate-y-[-20px]">
                    {/* Select group for all SOP  */}
                    <div className=" w-auto mt-3 flex justify-center align-middle">
                        <div className="w-auto flex flex-wrap gap-1 sm:gap-3 p-3">
                            <a href="#Master's" className="w-auto p-2 border-1 border-gray-200 rounded-[15px] bg-blue-400 text-white hover:bg-yellow-300 flex gap-1 text-center justify-center text-[13px] sm:text-[16px]">Master's <i className="fal fa-arrow-right ml-1 mt-[6px] text-[11px]" /></a>

                            <a href="#Bachelor" className="w-auto p-2 border-1 border-gray-200 rounded-[15px] bg-blue-400 text-white hover:bg-yellow-300 flex gap-1 text-center justify-center text-[13px] sm:text-[16px]">Bachelor <i className="fal fa-arrow-right ml-1 mt-[6px] text-[11px]" /></a>

                            <a href="#PHD" className="w-auto p-2 border-1 border-gray-200 rounded-[15px] bg-blue-400 text-white hover:bg-yellow-300 flex gap-1 text-center justify-center text-[13px] sm:text-[16px]">PHD <i className="fal fa-arrow-right ml-1 mt-[6px] text-[11px]" /></a>

                            <a href="#Visa" className="w-auto p-2 border-1 border-gray-200 rounded-[15px] bg-blue-400 text-white hover:bg-yellow-300 flex gap-1 text-center justify-center text-[13px] sm:text-[16px]">Visa <i className="fal fa-arrow-right ml-1 mt-[6px] text-[11px] " /></a>
                        </div>
                    </div>
                    {
                        SOPDownloadedFiles.map((items , index) => {
                            return <div key={index}>
                                <div className="w-full  justify-center align-middle">
                                    <div className="w-[95%] m-auto sm:w-[800px] p-2 text-3xl text-center border-b-2 border-b-gray-400 font-bold underline rounded bg-gray-100" id={items.title}>
                                        {items.title}
                                    </div>
                                </div>
                                <div className="w-full mb-3 flex flex-wrap sm:grid-cols-3 gap-5 justify-center align-middle p-3" key={items.title}>

                                    {
                                        items.links.map((items, index) => {
                                            return <div className="p-3 sm:p-7 rounded border-2 border-gray-300 " key={index}>
                                                <Image src={items.Image} alt={index} className="w-[310px] sm:w-[380px] h-[350px] sm:h-[500px]" />
                                                <div>
                                                    <div className="w-full flex mt-2 justify-center">
                                                        <p className="text-xl font-bold">{items.SOPtitle}<span className="ml-2 pt-[-2px] w-[30px] h-[30px] rounded-[50%] text-white text-center bg-blue-500">{items.SOP}</span></p>
                                                    </div>
                                                    <div className="w-full flex mt-2 justify-center align-middle">
                                                        <div className="flex gap-2">
                                                            <Image src={PdfImage} alt={items.SOPtitle} className="w-[35px] mt-[-2px] h-[45px] mr-1" />
                                                            <button className="bookmarkBtn"
                                                                onClick={() => { onButtonClick(items.Pdf) }}
                                                            >
                                                                <span className="IconContainer">
                                                                    < CiSaveDown1 className="text-xl" />
                                                                </span>
                                                                <p className="text">Download</p>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }


                </div>

            </>
        </section>
    );
};

export default PdfDawonloader;

