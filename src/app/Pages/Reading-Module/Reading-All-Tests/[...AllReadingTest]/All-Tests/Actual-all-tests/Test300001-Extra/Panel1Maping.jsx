import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { test4Panel1Pages } from '../../../../DataAll/Data';

export function Test14Panel1_Page1({ AnswersData }) {
  //  submitted answers for showing at submit popup---------->>  
  let AllAnswersData = [
    ["software"],
    ["standard"],
    ["hard drive"],
    ["Microsoft Passport"],
    ["reply"],
    ["passport email"],
    ["toolbar"],
    ["E"], ["C"], ["G"], ["B"], ["A"], ["F"], ["D"],
    ["result"],
    ["parties involved"],
    ["consideration"],
    ["ombudsman"],
    ["time consuming"],
    ["the originals"],
    ["praise"],
    ["C"], ["C"], ["A"], ["C"], ["A"], ["A"], ["False"], ["NOT GIVEN"], ["NOT GIVEN"], ["TRUE"], ["False"], ["False"],
    ["linguist"],
    ["human"],
    ["evolves"],
    ["concepts"],
    ["distinction between"],
    ["invention"],
    ["Pronouns"]
  ]
  AnswersData(AllAnswersData)



  return (
    <section className='Panel1Section'>
      {
        test4Panel1Pages.main.map((x) => {
          return (
            <section key={x.Test4Panel1ID}>
              <div key={x.Test4Panel1ID} className='panel_div_1 p-2' >
                <h6 className='mb-2' >{x.title1}</h6>
                <h6 >{x.title2}</h6>
                <h6 >{x.title3}</h6>
              </div>
              {
                x.Articles.map((e) => {
                  return (
                    <div key={e.title} className='panel_div_2'>
                      <span className='text-xl text-gray-500  underline' >{e.title2}</span> <br />
                      <p > <span className='mr-2 text-xl'>{e.title3}</span> {e.article}
                      </p>
                    </div>
                  )
                })
              }
            </section>

          )
        })
      }
    </section>
  )
}




// function for showing the test2 panel1 page2 data------by maping
export function Test14Panel1_Page2() {


  return (
    <section className='Panel1Section'>
      {
        test4Panel1Pages.test4Page2.map((x) => {
          return (
            <section key={x.Test4Panel1ID} className='mb-5' >
              <div key={x.Test4Panel1ID} className='panel_div_1 p-2'>
                <h6 className='mb-2'>{x.title1}</h6>
                <h6 className='mb-2'>{x.title2}</h6>
                <h6 >{x.title3}</h6>
              </div>
              {
                x.Articles.map((e) => {
                  return (
                    <div key={e.title} className='panel_div_2'>
                      <p ><span className='mr-2 text-xl'>{e.title}</span> {e.article}
                      </p>
                    </div>
                  )
                })
              }
            </section>
          )
        })
      }
    </section>
  )
}



