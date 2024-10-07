export async function Test11Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!userSpeakingSec2Test) {
            await playScript(// for this part I will show you some questions you will have one minute to look at these questions please do not touch the question card and then you will have one to two minutes to speak in the one minute preparation time you can take notes if you wish you have your pencil and Note Paper there I will tell you when to start and when to stop
                "For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
        } else {
            await playScript("OK.Your one minute preparation is starting now.")
        }



        let questionElement = document.getElementById('questions');
        questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
        <div style="padding:4px; text-align:center">
        <h4 className="text-center">IELTS Speaking Part 2</h4>
        <h4 className="text-center">IELTS Cue Card</h4> <br />
        </div>
        <h5>Talk about  your dream vacation. </h5>
        <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
            <div className="ml-4 p-1 font-bold">
                  <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>   Where would you go? </div>
                 
                  <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>    -When would you go there?</div>
                 
                  <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>   Who would you go with and why?</div>
                 
                  <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>  What kinds of activities would you do?  & why is this your dream vocation?</div>

             </div>
        </div>`


        preparationFlag = true;
        setCurrectTimer(true);
        converstionStepsText = "";


    }
}