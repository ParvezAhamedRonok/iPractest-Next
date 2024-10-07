export async function Test5Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!userSpeakingSec2Test) {
            await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
        } else {
            await playScript("OK.Your one minute preparation is starting now.")
        }



        let questionElement = document.getElementById('questions');
        questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
        <div style="padding:4px; text-align:center">
        <h4 className="text-center">IELTS Speaking Part 2</h4>
        <h4 className="text-center">IELTS Cue Card</h4> <br />
        </div>
        <h5>  Describe a family member whom you would like to  work with in the future.  </h5>
        <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
            <div className="ml-4 p-1 font-bold">
                  <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> Who the person is </div>
                 
                  <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i> Have you ever worked with the person before  </div>
                 
                  <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>  What kinds of work you would like to do with the person</div>
                 
                  <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i> And explain how you will feel if you can finally work together.</div>

             </div>
        </div>`


        preparationFlag = true;
        setCurrectTimer(true);
        converstionStepsText = "";


    }
}