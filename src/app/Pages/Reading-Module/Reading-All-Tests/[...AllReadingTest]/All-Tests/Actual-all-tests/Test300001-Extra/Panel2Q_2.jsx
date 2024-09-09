import React ,{useState} from 'react';
import { Test4Panel2Data } from '../../../../DataAll/Data';
import "../../../TestAllStyles/Panel2All.css";
import {GiNotebook} from "react-icons/gi";

// end of importing---------->>




function Test14Panel2_Page2({handleChange}) {
  const[showNotePad , setShowNotePad] = useState(false);


  return (
    <div className='Panel2Section p-3 sm:p-5'>
    <div className="palne2_div1">
             <h1>Section-2</h1>
    </div>

<div className="palne2_div2">
           {/* show & hide the nodepan by cliking those icons    */}
            {showNotePad && ( <textarea name="textarea" id="textarea" cols="70" rows="4"></textarea>)}
                    <div className="btn " onClick={() =>{setShowNotePad(!showNotePad)}}>
                   {showNotePad ? <button className="  main-btn ml-30"> <i><GiNotebook /></i> Hide Notepad</button> : <button className="main-btn ml-30"> <i><GiNotebook /></i> Show Notepad</button>}
     </div>         
</div>




{
Test4Panel2Data.Page2.map((items) =>{
return(
  <section key={items.testPageID} className={items.DivCclassName1} >
        <div className='p-4'>
              <h6 className='mb-1'>{items.title1}</h6>
              <h6>{items.title2}</h6>
        </div>
        <div className='mb-1 p-4'>
             <h6 >{items.item1}</h6>
              <h6 >{items.item2}</h6> 
              <h6 >{items.item3}</h6> 
        </div>
        {
       items.inputSelectQuestions.map((items) =>{
           return(
             <div key={items.testPageID} className='mb-2 p-3'>
                     <div className='flex mb-2'>
                        <h3 className={items.className1}>{items.test4ID}</h3>
                        <label htmlFor={items.LabelHtml}>{items.label}</label>
                     </div>
                     <div className="flex gap-7">
                           <div className='grid grid-cols-1 mt-[20px]'>
                               <span className='pb-4'>{items.select1}</span>
                               <span className='pb-4'>{items.select2}</span>
                               <span className='pb-4'>{items.select3}</span>
                           </div>
                           <div onChange={handleChange} className='grid grid-cols-1 ' >
                               <input type="radio" value="A" name={items.selectName} className='mb-2 w-[18px]'/>
                               <input type="radio" value="B" name={items.selectName} className='mb-2 w-[18px]'/>
                               <input type="radio" value="C" name={items.selectName} className='mb-2 w-[18px]'/>
                           </div>
                           <div className='grid grid-cols-1'>
                                  <i className='mt-2'>{items.item1}</i>
                                  <i className='mt-2'>{items.item2}</i>
                                  <i className='mt-2'>{items.item3}</i>
                           </div>
                     </div>
                   
             </div>
           )
       })
     }
       { items.seletQuestions.map((items) =>{
               return(
                   <div key={items.test3ID} className={items.questions} style={{display:"flex" , flexWrap:"wrap" , padding:"20px", marginTop:"20px"}}>
                     
                        <label htmlFor={items.LabelHtml}><i className={items.className1}>{items.test4ID}</i>{items.label}
                        <select name={items.selectName} id={items.selectId} onChange={handleChange} >
                             {
                               items.panel2Page2Selectors.map((x) =>{
                                  return <option value={x.selector} key={x.selectId}>
                                     {
                                       x.selector
                                     }
                                  </option>
                               })
                             }
                        </select>
                        </label>
                   </div>
               )
         })

       }
                              {
       items.inputQuestions.map((item) =>{
           return(
             <div key={item.test3ID} className={item.questions} style={{display:"flex", padding:"20px" , flexWrap:"wrap" , marginTop:"20px"}} >
                   
                     <label htmlFor={item.LabelHtml}><i className={item.className1}>{item.test4ID}</i>{item.label}
                     <input type="text" name={item.selectName} id={item.selectId} onChange={handleChange} className='inputs mt-[-7px]' />
                    {item.label2}</label>

             </div>
           )
       })
     }


  </section>
)
})
}
</div>
  )
}

export default Test14Panel2_Page2




