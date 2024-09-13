"use client"
import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import axios from "axios";
import { FaBookReader } from "react-icons/fa";
import PdfImage from "../../../../assets/SOP-Files/Imgs/pdf.jpeg"
import { SOP_GET_SPECIFIC_USER_DATA } from "../../../../assets/URL's/AllUrl";
import { useRouter } from "next/navigation";
import "../StyleAll/Sop-style.css"
import { CiSaveDown1 } from "react-icons/ci";
import Image from "next/image";
// end of the importing........





// res.data.replace(/(?:\r\n|\r|\n)/g, '<br />')
const SOFFileReader = () => {
  const inputRef = useRef(null);
  const history = useRouter();
  const [storeALLSOP, setStoreAllSOP] = useState([]);

  useEffect(() => {
    var useremail = localStorage.getItem('userEmail');
    var userLoginToken = localStorage.getItem("loginTOken")

    axios({
      method: "get",
      url: SOP_GET_SPECIFIC_USER_DATA + useremail,
      // url: 'http://localhost:8080/api/user/getSpecificUserSop/' + useremail,
      headers: {
        "Authorization": `Bearer ${userLoginToken}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        setStoreAllSOP(res.data.data);
      })
      .catch((e) => { console.log(e) });
  }, [])







  const printDocument = (printedID) => {
    console.log(printedID)
    /*
     * Let's demonstrate string splitting with the first page of Shakespeare's Romeo and Juliet!
     * We'll use a 8.5 x 11 inch sheet, measuring everything in inches.
     */
    var pageWidth = 8.5,
      lineHeight = 1.2,
      margin = 0.5,
      maxLineWidth = pageWidth - margin * 2,
      fontSize = 10,
      ptsPerInch = 72,
      oneLineHeight = (fontSize * lineHeight) / ptsPerInch,
      text = printedID,
      doc = new jsPDF({
        unit: "in",
        lineHeight: lineHeight
      }).setProperties({ title: "String Splitting" });

    // splitTextToSize takes your string and turns it in to an array of strings,
    // each of which can be displayed within the specified maxLineWidth.
    var textLines = doc
      .setFont("helvetica")
      .setFontSize(fontSize)
      .splitTextToSize(text, maxLineWidth);

    // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
    doc.text(textLines, margin, margin + 2 * oneLineHeight);

    // You can also calculate the height of the text very simply:
    var textHeight = (textLines.length * fontSize * lineHeight) / ptsPerInch;
    // doc
    //   .setFont("Helvetica", "bold")
    //   .text(
    //     "Text Height: " + textHeight + " inches",
    //     margin,
    //     margin + oneLineHeight
    //   );
    doc.save("download.pdf");
  };



  return (
    <>
      {
        storeALLSOP[0] ? (
          <div className="App w-full h-auto p-[15px]">
            <button class="bookmarkBtn" onClick={() => { history.push("/SOP-Maker-for-user") }}>
              <span class="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="IconChangeColor" height="1.5em" class="icon"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" id="mainIconPathAttribute" fill="blue"></path></svg>
              </span>
              <p class="text"> Make SOP</p>
            </button> <br />
            {/* class="icon" */}



            {
              storeALLSOP.map((items, index) => {
                setTimeout(() => {
                  let data = items.SOPData.replace(/(?:\r\n|\r|\n)/g, '<br />');
                  let dataFeed = document.getElementById(index);
                  dataFeed.innerHTML = data
                }, 3000);
                console.log(typeof toString(index));
                return <div key={index}>
                  <div className="w-full h-[80vh] sm:h-auto grid justify-center align-middle mb-2"  >
                    <div className="text-justify box-border w-full sm:w-[700px] overflow-auto  border-1 border-gray-400 rounded bg-sky-100 mb-1 text-[5px]" id={items.createdAt} >
                      <div className=" w-full grid justify-end align-middle  h-[60px] bg-blue-200 ">
                        <FaBookReader className="text-4xl text-purple-400 mr-[20px] mt-[10px] opacity-40" />
                      </div>
                      <p id={index} className="p-[13px] sm:p-[20px] text-[12px]"></p>
                    </div>
                  </div>
                  <div className="w-full h-auto grid justify-end sm:justify-center align-middle mb-2">
                    <div className="flex justify-end box-border w-full sm:w-[700px] overflow-auto  mb-4">
                      <div className="flex gap-1">
                        <Image src={PdfImage} alt="" className="w-[35px] mt-[-2px] h-[40px] mr-1" />
                        {/* <button className="bg-blue-300 w-[120px] text-center text-[14px] rounded h-[40px] mt-1 cursor-pointer hover:bg-red-200"
                          onClick={() => { printDocument(items.SOPData) }}
                        >Download</button> */}

                        <button className="bookmarkBtn"
                          onClick={() => { printDocument(items.SOPData) }}>
                          <span class="IconContainer">
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
          </div>) : (
          <div className="w-full h-[90vh] grid justify-center align-middle">
            <div className="w-full sm:w-[400px] m-auto text-xl translate-y-[-31px]">
              <p className="text-center mb-1">You didn't make any <span className="text-2xl  text-red-500">SOP</span> yet</p>
              <p className="text-green-400 underline text-center hover:text-blue-400 cursor-pointer"
                onClick={() => { history.push("/SOP-Maker-for-user") }}
              >Make SOP</p>

            </div>
          </div>
        )
      }
    </>
  );
};
export default SOFFileReader;




