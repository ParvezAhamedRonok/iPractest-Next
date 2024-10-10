import { WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE } from "@/assets/URL's/AllUrl";
import axios from "axios";



//not used yet...

export function Upload_Image_GCP(task, scrollPage, pagePosition, ImageArray, setitemsSet, setisloading, setImageUploadMsg, setChangeImageUI, setIgameText, seterrorIfUserDontSelectImage) {

    if (ImageArray[0]) {
        setisloading(true);
        setImageUploadMsg("Uploading..");
        //set items 1 for showing images text comparison ..
        setitemsSet("uploaded-text")

        var imagetext = "";
        for (let imageFile1 of ImageArray) {

            const formData = new FormData();
            formData.append("file", imageFile1);
            // formData.append("rendomNumber", items);


            if (imageFile1) {
                axios({
                    method: "post",
                    // url: "https://ipractest-406204.uc.r.appspot.com/GCPimageToText",
                    url: WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE,
                    data: formData,
                }).then(async (response) => {
                    const { data } = response;

                    let imageTextParts = '' + data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ');

                    //  let removeNewLine = imageTextParts.replace(/(?:\r\n|\r|\n)/g, '');;


                    imagetext = imagetext + imageTextParts;
                    // items = items + 1
                })
                    .catch((err) => {
                        setChangeImageUI(false);
                        alert("Network error please try again")
                        console.log(err);
                        setisloading(false);
                    });

            } else {
                const selectAlart = document.getElementById("SelectImage");
                selectAlart.innerText = "Please Upload an image";
                selectAlart.style.color = "red"
            }

        }

        setIgameText((imagetext));
        setTimeout(() => {
            setChangeImageUI(true);
            //for take the user to the top
            window.scrollTo({ top: pagePosition - 690, behavior: 'smooth' });
        }, 1000);
        setTimeout(() => {
            setisloading(false)
        }, 2000);
    } else {
        seterrorIfUserDontSelectImage("imageNotSelected")
    }



}






//function for translate image into Text------>
//   function gettingImageTextfromResponse(Response) {
//     setImageUploadMsg("Text formating..")
//     var imageText = ''
//     var textdataArray = Response['text']['readResults'][0]['lines'];
//     for (var textData of textdataArray) {
//       imageText = imageText + ' ' + textData['text'];

//     }
//     // console.log(imageText);

//     return imageText;


//   }


// it's may be no needable right now....date (14/4/24);
// const uploadImage = async (e) => {
//     let scrollPage = document.getElementById("scrollPage" + task.task);
//     let pagePosition = scrollPage.offsetTop;
//     if (ImageArray[0]) {
//         setisloading(true);
//         setImageUploadMsg("Uploading..")
//         // console.log(ImageArray)
//         // console.log('ImageArray')
//         // e.preventDefault();
//         localStorage.setItem('itemsSet', 1);
//         var imagetext = "";
//         for (let imageFile1 of ImageArray) {

//             const formData = new FormData();
//             formData.append("file", imageFile1);


//             if (imageFile1) {
//                 await axios({
//                     method: "post",
//                     url: WRITING_POST_UPLOAD_IMAGES,
//                     data: formData,
//                 })
//                     .then(async (response) => {
//                         const { data } = response;
//                         // console.log(data.url)
//                         await computerVision(data.url || null).then((item) => {

//                             imagetext = imagetext + gettingImageTextfromResponse(item);

//                             //below commented code may be not needable
//                             // setTimeout(() => { setChangeImageUI(true); }, 1000);
//                             // setTimeout(() => {
//                             //   setisloading(false)
//                             // }, 2000);

//                         });
//                     })
//                     .catch((err) => {
//                         setChangeImageUI(false);
//                         alert("Network error please try again")
//                         console.log(err);
//                         setisloading(false);

//                     });

//             } else {
//                 const selectAlart = document.getElementById("SelectImage");
//                 selectAlart.innerText = "Please Upload an image";
//                 selectAlart.style.color = "red"
//             }

//         }


//         // checkWritingAnswer(imagetext, 4);
//         setIgameText((imagetext));
//         setTimeout(() => {
//             setChangeImageUI(true);
//             //for take the user to the top
//             window.scrollTo({ top: pagePosition - 690, behavior: 'smooth' });
//         }, 1000);
//         setTimeout(() => {
//             setisloading(false)
//         }, 2000);
//         // IPractestFeedback(imagetext)

//     } else {
//         seterrorIfUserDontSelectImage("imageNotSelected")
//     }

// }
