import React from 'react';
import "../TestAllStyles/Preview.css";
// end of the importing..



function Preview({ UserData, handleReviewPage }) {
    return (
        <section className='PreviewSection'>
            <div className="ReviewDiv1 flex justify-between align-middle">
                <h1 className='nameReview'>Review</h1>
                <div className='absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-3 flex justify-center align-middle shadow-lg cursor-pointer hover:border-1 hover:border-gray-300'
                  onClick={handleReviewPage}
                >
                    X
                </div>
            </div>

            <div className="ReviewDiv2">
                <div className="div"><i>1:</i> <i>{UserData.ques1}</i></div>
                <div className="div"><i>2:</i> <i>{UserData.ques2}</i></div>
                <div className="div"><i>3:</i> <i>{UserData.ques3}</i></div>
                <div className="div"><i>4:</i> <i>{UserData.ques4}</i></div>
                <div className="div"><i>5:</i> <i>{UserData.ques5}</i></div>
                <div className="div"><i>6:</i> <i>{UserData.ques6}</i></div>
                <div className="div"><i>7:</i> <i>{UserData.ques7}</i></div>
                <div className="div"><i>8:</i> <i>{UserData.ques8}</i></div>
                <div className="div"><i>9:</i> <i>{UserData.ques9}</i></div>
                <div className="div"><i>10:</i> <i>{UserData.ques10}</i></div>
                <div className="div"><i>11:</i> <i>{UserData.ques11}</i></div>
                <div className="div"><i>12:</i> <i>{UserData.ques12}</i></div>
                <div className="div"><i>13:</i> <i>{UserData.ques13}</i></div>

                <div className="div"><i>14:</i> <i>{UserData.ques14}</i></div>
                <div className="div"><i>15:</i> <i>{UserData.ques15}</i></div>
                <div className="div"><i>16:</i> <i>{UserData.ques16}</i></div>
                <div className="div"><i>17:</i> <i>{UserData.ques17}</i></div>
                <div className="div"><i>18:</i> <i>{UserData.ques18}</i></div>
                <div className="div"><i>19:</i> <i>{UserData.ques19}</i></div>
                <div className="div"><i>20:</i> <i>{UserData.ques20}</i></div>
                <div className="div"><i>21:</i> <i>{UserData.ques21}</i></div>
                <div className="div"><i>22:</i> <i>{UserData.ques22}</i></div>
                <div className="div"><i>23:</i> <i>{UserData.ques23}</i></div>
                <div className="div"><i>24:</i> <i>{UserData.ques24}</i></div>
                <div className="div"><i>25:</i> <i>{UserData.ques25}</i></div>
                <div className="div"><i>26:</i> <i>{UserData.ques26}</i></div>

                <div className="div"><i>27:</i> <i>{UserData.ques27}</i></div>
                <div className="div"><i>28:</i> <i>{UserData.ques28}</i></div>
                <div className="div"><i>29:</i> <i>{UserData.ques29}</i></div>
                <div className="div"><i>30:</i> <i>{UserData.ques30}</i></div>
                <div className="div"><i>31:</i> <i>{UserData.ques31}</i></div>
                <div className="div"><i>32:</i> <i>{UserData.ques32}</i></div>
                <div className="div"><i>33:</i> <i>{UserData.ques33}</i></div>
                <div className="div"><i>34:</i> <i>{UserData.ques34}</i></div>
                <div className="div"><i>35:</i> <i>{UserData.ques35}</i></div>
                <div className="div"><i>36:</i> <i>{UserData.ques36}</i></div>
                <div className="div"><i>37:</i> <i>{UserData.ques37}</i></div>
                <div className="div"><i>38:</i> <i>{UserData.ques38}</i></div>
                <div className="div"><i>39:</i> <i>{UserData.ques39}</i></div>
                <div className="div"><i>40:</i> <i>{UserData.ques40}</i></div>


            </div>

            {/* <div className="ReviewDiv3">
                <button onClick={handleReviewPage}>Close</button>
            </div> */}

        </section>
    )
};



export default Preview
