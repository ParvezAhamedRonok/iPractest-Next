import React from 'react';
import thumb4 from '../../../../assets/images/improvement.png';
import thumb5 from "../../../../assets/images/about-thumb-5.png";
import thumb6 from "../../../../assets/images/Carton-2.png";
import thumb7 from "../../../../assets/images/Carton-1.png";
import Image from 'next/image';

function LetsPractice() {
  return (
    <div>
      <section className="appie-about-8-area pt-7 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="appie-about-8-box">
                <h3 className="title underline">
                  Speaking
                </h3>
                <div className="pricig-body">
                  <ul>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> You can get  a real time partner with our site.
                    </li>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> More helpful for realtime conversations.
                    </li>
                    <li>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> More helpful for IELTS Speaking part 1 , 2 & 3 topic related questions.
                    </li>
                  </ul>
                </div>
                <a className="main-btn" href="/Pages/Speaking-Module">
                  Let's Practice<i className="fal fa-arrow-right" />
                </a>
                <div className="thumb mr-30">
                  <Image src={thumb5} alt="services image1" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 box-border overflow-hidden">
              <div className="appie-about-8-box ">
                <h3 className="title underline">
                  Writing
                </h3>
                <div className="pricig-body">
                  <ul>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> Give your tests & get the result instantly..
                    </li>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> To improve your IELTS Writing score it's more helpful.
                    </li>
                    <li>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> Also you can upload your existing Writing.
                    </li>
                  </ul>
                </div>
                <a className="main-btn" href="/Pages/Writing-Module/Actual-writing-tests">
                  Let's Practice<i className="fal fa-arrow-right" />
                </a>
                <div className="thumb mr-0 sm:mr-30">
                  <Image src={thumb4} alt="services image 2" className='w-[280px] sm:w-[310px] ml-4' />
                </div>
              </div>
            </div>
          </div> <br />
          <div className="row">
            <div className="col-lg-6 box-border overflow-hidden">
              <div className="appie-about-8-box">
                <h3 className="title underline">
                  Reading
                </h3>

                <div className="pricig-body">
                  <ul>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" />Give your tests & get the result instantly & improve your IELTS Reading.
                    </li>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> Take care with spelling and grammar carefully into reading sections.
                    </li>
                    <li>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> Guess the meaning from context
                    </li>
                  </ul>
                </div>
                <a className="main-btn" href="/Pages/Reading-Module/Cambridge-listening-tests">
                  Let's Practice<i className="fal fa-arrow-right" />
                </a>
                <div className="thumb mr-0 sm:mr-30">
                  <Image src={thumb6} alt="services image 3" className='w-[240px] sm:w-[320px] ml-5' />
                </div>
              </div>
            </div>
            <div className="col-lg-6 box-border overflow-hidden">
              <div className="appie-about-8-box">
                <h3 className="title underline">
                  Listening
                </h3>
                <div className="pricig-body">
                  <ul>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" /> Give your tests & get the result instantly & improve your IELTS Listening.
                    </li>
                    <li className='mb-2'>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" />Improve your general listening skills The goal of IELTS Listening section is to test your listening skills.
                    </li>
                    <li>
                      <i className="fal fa-check p-1 sm:p-2 text-white bg-green-300 rounded-[50%] mr-2" />Don't loose attention ..
                    </li>
                  </ul>
                </div>
                <a className="main-btn" href="/Pages/Listening-Module/Cambridge-listening-tests">
                  Let's Practice<i className="fal fa-arrow-right" />
                </a>
                <div className="thumb mr-0 sm:mr-30">
                  <Image src={thumb7} alt="services image 4" className='w-[240px] sm:w-[320px] ml-5' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LetsPractice