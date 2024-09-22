"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { WRITING_POST_UPLOAD_IMAGE_QUESTION_TO_TRANSFORM_INTO_TEXT } from "../../../../../../assets/URL's/AllUrl.js"
import "../../WrittingAllStyles/QuestionUpload.css"
import { BsPatchQuestion } from "react-icons/bs";
import Image from "next/image.js";
//end importing......


let ImageArray = [];
export default function QuestionUpload({ setStoreQuestionText }) {
    //localstorage data storing states.........
    const [userLoginEmail, setUserLoginEmail] = useState("")

    const inputEl = useRef(null); //variable to referring hidden input
    const [imagePreview, setPreview] = useState([]);
    const [imageText, setIgameText] = useState('');
    const [SuccessMsg, setSuccessMessege] = useState(false)


    //useEffect uses...
    useEffect(() => {
        setUserLoginEmail(localStorage.getItem("userEmail"))
    }, [])

    //upload Questions images functions------------
    // functions------
    const handleLogInPageForUpload = (x) => {
        // console.log("Hello i am Upload User");
        if (userLoginEmail) {
            // uploadImage();
            uploadImageGCP();
        } else {
            //   openLogInPage();
            alert("You have to login first...");
            setPreview([]);
            ImageArray = [];
        }
    }







    const getImage = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        // console.log(selectedFilesArray);
        const imagesArray = selectedFilesArray.map((file) => {
            let imageSelected = file;
            // console.log(file);
            let urlOfimage = URL.createObjectURL(file);
            // console.log(urlOfimage);
            imageSelected['url'] = urlOfimage;
            ImageArray.push(imageSelected);
            // console.log(imageSelected)
            return urlOfimage;
        });
        setPreview((previousImages) => previousImages.concat(imagesArray));
        setTimeout(() => {
            handleLogInPageForUpload()
        }, 3000);
        // FOR BUG IN CHROME
        event.target.value = "";

    }


    function deleteHandler(image) {
        setPreview(imagePreview.filter((e) => e !== image));
        URL.revokeObjectURL(image);
        // console.log(image)
        var filteredImage = ImageArray.filter(function (imageofArray) { return imageofArray.url != image; });    //8-18-23
        // var resultOne = ImageArray.filter(v => v !==image  );
        ImageArray = filteredImage;
        setStoreQuestionText("")
    }





    //function for translate image into Text------>
    function gettingImageTextfromResponse(Response) {
        var imageText = ''
        var textdataArray = Response['text']['readResults'][0]['lines'];
        for (var textData of textdataArray) {
            imageText = imageText + ' ' + textData['text'];
        }
        return imageText;


    }




    const uploadImageGCP = async (e) => {
        if (ImageArray[0]) {
            var imagetext = "";
            for (let imageFile1 of ImageArray) {
                const formData = new FormData();
                formData.append("file", imageFile1);
                if (imageFile1) {
                    await axios({
                        method: "post",
                        // url: "https://ipractest-406204.uc.r.appspot.com/getInfoAboutQuestion",
                        url: WRITING_POST_UPLOAD_IMAGE_QUESTION_TO_TRANSFORM_INTO_TEXT,
                        data: formData,
                    })
                        .then(async (response) => {
                            const { data } = response;
                            // console.log(data);
                            let imageTextParts = '' + data.message.replace(/['"]+/g, '');
                            console.log(imageTextParts)
                            imagetext = imagetext + imageTextParts
                            setSuccessMessege(true);
                            setTimeout(() => {
                                setStoreQuestionText(imagetext)
                            }, 500);

                        })
                        .catch((err) => {
                            alert("Network error please try again");
                            setPreview([]);
                            ImageArray = [];
                            console.log(err);
                        });

                }
            }
            setIgameText((imagetext));

        }

    }


    // it will be called after converted image into text
    const afterConvertedImageIntoText = () => {
        //here will be the post request..........
    }










    // console.log(imageText)
    return (
        <div className=""
            style={{ backgroundImage: "radial-gradient(circle, #cec8ef, #fff, #fff)" }}
        >

            <div className="App uploadArea bg-white shadow-lg rounded-[20px] w-[90vw] sm:w-[42vw] ml-[0px] sm:ml-[0px] pt-3 pb-[14px] pl-[10px] sm:pl-[50px] demo__projects3 border-dashed border-2 border-sky-500">
                <div className="grid grid-cols-1 w-full gap-5 box-border">
                    <div className="flex">
                        <div className={`${imagePreview[0] ? "flex" : "grid"} m-auto gap-4`}>
                            <div className="m-auto">
                                {
                                    imagePreview[0] ? (
                                        <div className="flex m-auto gap-2 justify-center mr-3 translate-x-[-10px] sm:translate-x-[-20px]">
                                            {imagePreview && SuccessMsg ?
                                                (<>{
                                                    imagePreview.map((image, index) => {
                                                        return (
                                                            <div key={image} className="image relative">
                                                                <Image src={image} className=" rounded-[15px]" alt="upload"
                                                                    width={85}
                                                                    height={72}
                                                                />
                                                                <button
                                                                    className="bg-red-400 p-auto w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] font-bold rounded-[50%] text-center text-[10px] sm:text-[12px] absolute top-[-5px] right-[-4px] text-white"
                                                                    onClick={() => deleteHandler(image)}>
                                                                    X
                                                                </button>
                                                                {/* <p>{index + 1}</p> */}
                                                            </div>
                                                        )
                                                    })
                                                }</>) : (
                                                    <div className="grid">
                                                        <div
                                                            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white ml-[10px] sm:ml-[6px]"
                                                            role="status">
                                                            <span
                                                                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                                            >Loading...</span>
                                                        </div>
                                                        <h4 className={`text-center translate-x-[-7px] sm:translate-x-[-19px] text-[13px] sm:text-[15px] `}>Uploading..</h4>
                                                    </div>
                                                )

                                            }
                                        </div>
                                    ) : (
                                        <>
                                            <input type="file"
                                                // multiple
                                                accept="image/png , image/jpeg, image/webp"
                                                onChange={getImage}
                                                style={{ display: "none" }} //hiding input
                                                ref={inputEl} //set inputEl to referring this element
                                            ></input>
                                            <>
                                                <button
                                                    className={`rounded-[50%] flex justify-center p-3 align-middle  border-[2px]  demo__projects1 translate-x-[-10px] sm:translate-x-[-22px] hover:bg-blue-800 m-auto bg-red-950 shadow-md`}
                                                    onClick={() => inputEl.current.click()}>
                                                    <BsPatchQuestion className="text-[20px] font-bold text-gray-50 text-center m-auto" />

                                                </button>

                                                <h4 className={`text-center translate-x-[-10px] sm:translate-x-[-22px] text-[9px] sm:text-[11px] `}>Upload Question</h4>

                                            </>
                                        </>
                                    )
                                }
                                {
                                    imagePreview[0] && SuccessMsg ? (
                                        <h4 className={`text-center translate-x-[-10px] sm:translate-x-[-22px] mt-1 text-[16px] sm:text-[18px]`}>Question Uploaded</h4>
                                    ) : (
                                        <h4 className={`text-center translate-x-[-10px] sm:translate-x-[-22px] mt-1 text-[13px] sm:text-[15px]`} style={{ fontFamily: "Georgia, serif" }}>Upload Your Question Image For Getting Better Scores</h4>
                                    )
                                }
                            </div>
                        </ div>
                    </div>

                </div>
            </div>


        </div>
    )
}
