"use client";
import React from 'react';
import "../../WrittingAllStyles/UploadFile.css";
import { MdCloudUpload , MdDelete } from "react-icons/md";
import {AiFillFileImage  } from "react-icons/ai";
import { useState } from 'react';
import Image from 'next/image';
 
//end importing..


 function UploadFile() {
  const [uploadImage , setUploadImage] = useState(null);
  const [uploadFileName , setUploadFileName] = useState("NO-Selected-file");




  return (
    <div className='u-main-Container'>
        <h4 className='Upload-title'>Submit Your Essay</h4>

          <form action="#" className='upload-form' onClick={() =>{document.querySelector(".u-inputFiled").click()}}>
              <input type="file" multiple className='u-inputFiled' hidden 
                onChange={({target : {files} }) =>{
                     files[0] && setUploadFileName(files[0].name)
                     if(files){
                         setUploadImage(URL.createObjectURL(files[0]))
                     }
                }}
              />

              {uploadImage ? 
                 <Image src={uploadImage } width={160} height={120} alt={uploadFileName} /> : 
              <>
                 <MdCloudUpload  color='#1475cf' size={60} />
                 <p>Browse Files to Upload..</p>
              </>
              }
      </form>



      <section className='uploaded-row'>
          <AiFillFileImage color='#147cf' />
            <span className='upload-content'>
                 {uploadFileName} - 
                 <MdDelete 
                    onClick={() =>{
                         setUploadFileName("No selected file ");
                         setUploadImage(null)
                    }}
                 />
            </span>
      </section>



          
    </div>
  )
}



export default UploadFile















