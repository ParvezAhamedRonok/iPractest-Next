import React ,{useState} from 'react';
import { Test4Panel2Data } from '../../../../DataAll/Data';
import "../../../TestAllStyles/Panel2All.css";
import {GiNotebook} from "react-icons/gi";

// end of importing---------->>




function Test14Panel2_Page1({handleChange }) {
  const[showNotePad , setShowNotePad] = useState(false);


  return (
            <div className='Panel2Section p-3 sm:p-5'>
                   <div className="palne2_div1">
                            <h1>Section-1</h1>
                   </div>

              <div className="palne2_div2">
                          {/* show & hide the nodepan by cliking those icons    */}
                           {showNotePad && ( <textarea name="textarea" id="textarea" cols="70" rows="4"></textarea>)}
                                   <div className="btn " onClick={() =>{setShowNotePad(!showNotePad)}}>
                                  {showNotePad ? <button className="  main-btn ml-30"> <i><GiNotebook /></i> Hide Notepad</button> : <button className="main-btn ml-30"> <i><GiNotebook /></i> Show Notepad</button>}
                    </div>         
              </div>




        {
          Test4Panel2Data.page1.map((items) =>{
              return(
                 <section key={items.testPageID} className={items.DivCclassName1} style={{padding:"20px"}} >
                       <div className='p-4 mb-3'>
                             <h6 className='mb-1'>{items.title1}</h6>
                             <h6>{items.title12}</h6>
                       </div>
                       <div>
                            <h6 >{items.items1}</h6> 
                             <h6 >{items.items2}</h6>
                       </div>
                       {
                      items.inputQuestions.map((item) =>{
                          return(
                            <div key={item.test3ID} className={item.questions} style={{display:"flex" , flexWrap:"wrap" , marginTop:"20px"}} >
                                  
                                    <label htmlFor={item.LabelHtml}><i className={item.className1}>{item.test3ID}</i>{item.label}
                                    <input type="text" name={item.selectName} id={item.selectId} onChange={handleChange} className='inputs mt-[-7px]' />
                                    {item.label2}</label>

                            </div>
                          )
                      })
                    }
                       {/* {
                        items.seletQuestions.map((items) =>{
                              return(
                                  <div key={items.test3ID} className={items.questions} style={{display:"flex" , flexWrap:"wrap" , marginTop:"20px"}}>
                                    <h5 className={items.className1}>{items.test3ID}</h5>
                                       <label htmlFor={items.LabelHtml}>{items.label}</label>
                                       <select name={items.selectName} id={items.selectId} onChange={handleChange} >
                                            {
                                              items.panel2Page2Selectors.map((x) =>{
                                                 return <option value={x.selector} key={x.items}>
                                                    {
                                                      x.selector
                                                    }
                                                 </option>
                                              })
                                            }
                                       </select>
                                  </div>
                              )
                        })
                       }
                       {
                        items.Articles1.map((e) =>{
                           return(<div key={e.title} className='flex mt-3 mb-3' >
                               <h6 >{e.title}</h6>
                               <p>{e.items1}</p>
                           </div>)
                        })
                       } */}


                      
                 </section>
              )
          })
        }
    </div>
  )
}

export default Test14Panel2_Page1




