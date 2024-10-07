export async function Test1Sec2(playScript, setCurrectTimer, converstionSteps, userSpeakingSec2Test, preparationFlag, converstionStepsText) {

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
<div >
<h5>Talk about an idea you have had to make your learning more effective.</h5>
<h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
  <div className="ml-4 p-1 font-bold">
        <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>   What is the idea?</div>
       
        <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>   When and where did you think about the idea?</div>
       
        <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>  How does this idea make your learning more effective?</div>
       
        <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>  What encouraged you to think about this idea and how can you improve it further?</div>

   </div>
</div>
        </div>`


        // store all of the Question to the variable & send to the local indexdDB local databases..
        // userSpeechMainData += "Question:" + "Talk about an idea you have had to make your learning more effective.~" + "Question:" + " What is the idea?~" + "Question:" + " When and where did you think about the idea?~" + "Question:" + " How does this idea make your learning more effective?~" + "What encouraged you to think about this idea and how can you improve it further?~"
        preparationFlag = true;
        setCurrectTimer(true);

        converstionStepsText = "";



    }
}
