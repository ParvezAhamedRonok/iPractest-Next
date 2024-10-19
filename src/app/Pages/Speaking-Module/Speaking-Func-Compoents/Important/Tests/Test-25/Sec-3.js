let converstionSteps = 0;



export async function Test25Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
        );
        setSampleAns(["Yes, I am comfortable you please proceed the test"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {
        if (converstionSteps == 1) {
            await playScript(
                "Sorry.... Can you repeat that please"
            );
            setSampleAns([` You can simply repeat your previous answer`])
        } else if (converstionSteps == 2) {
            if (converstionStepsText.length < 5) {
                await smallTalkError(" I will ask you the qustion related of question two. so , Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("I am asking you the question related of section two. So, What kinds of jobs are easy to get in a foreign country?");
                setSampleAns([`My cousin who lives in Canada tells me that there are many jobs that are easy to get for students 
                                studying there. The most common ones are the jobs in restaurants or fast food outlets like 
                                McDonald’s, Burger King, Subway, and those in the college campus itself, like jobs in the library, etc.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What kinds of jobs are easy to get in a foreign country?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So, What kinds of jobs are easy to get in a foreign country?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/job/gi) ||
                converstionStepsText.match(/easy/gi) || converstionStepsText.match(/get/gi) ||
                converstionStepsText.match(/foreign/gi) || converstionStepsText.match(/country/gi) ||

                converstionStepsText.match(/cousin/gi) || converstionStepsText.match(/stude/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/restaurant/gi) ||
                converstionStepsText.match(/fast/gi) || converstionStepsText.match(/outlet/gi) ||

                converstionStepsText.match(/Burger/gi) || converstionStepsText.match(/Subway/gi) ||
                converstionStepsText.match(/college/gi) || converstionStepsText.match(/itself/gi) || converstionStepsText.match(/library/gi)

            ) {
                await playScript("Should young adults work abroad?");
                setSampleAns([`Yes, young adults should work abroad because of several reasons like, taking care of their overhead 
                                    expenses, taking the financial burden off their parents’ shoulders, they become more independent 
                                    and responsible and they gain experience about the work culture, which would help them in their 
                                    future. It is also a good way to learn about the culture of that country and to meet new people and 
                                    make friends.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. So,What kinds of jobs are easy to get in a foreign country?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Should young adults work abroad?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Should young adults work abroad?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/Should/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/adult/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/abroad/gi) || converstionStepsText.match(/several/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/lot/gi) ||
                converstionStepsText.match(/overhead/gi) || converstionStepsText.match(/responsible/gi) ||

                converstionStepsText.match(/culture/gi) || converstionStepsText.match(/future/gi) ||
                converstionStepsText.match(/However/gi) || converstionStepsText.match(/friends/gi)

            ) {
                await playScript("Okey. If they don’t work abroad, would it be helpful for them to travel in a foreign country?");

                setSampleAns([`Yes, travelling is definitely helpful. They would come to know about the culture, meet new people, 
                                see new places, and make new connections. However, if they don’t work, they may not be able to 
                                afford travelling.
                                        `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Should young adults work abroad?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" If they don’t work abroad, would it be helpful for them to travel in a foreign country?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  If they don’t work abroad, would it be helpful for them to travel in a foreign country?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/work/gi) || converstionStepsText.match(/abroad/gi) ||
                converstionStepsText.match(/work/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/helpful/gi) ||

                converstionStepsText.match(/tell/gi) || converstionStepsText.match(/place/gi) ||
                converstionStepsText.match(/connection/gi) || converstionStepsText.match(/However/gi) ||
                converstionStepsText.match(/afford/gi) || converstionStepsText.match(/travelling/gi)
            ) {
                await playScript("Okey. Do Indian parents encourage their children to work abroad?");
                setSampleAns([`Yes, Indian parents encourage their children to work abroad. They prepare their children well 
                                        before they travel abroad, about the situations and hardships they may have to face and the 
                                        importance of working while studying there, so that they can cover their expenses and also gain 
                                        work experience.
                                    `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. If they don’t work abroad, would it be helpful for them to travel in a foreign country?");
                converstionSteps--;
            }
            //question-6

        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do Indian parents encourage their children to work abroad?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do Indian parents encourage their children to work abroad?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/Indian/gi) || converstionStepsText.match(/parent/gi) ||
                converstionStepsText.match(/encourage/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/work/gi) || converstionStepsText.match(/abroad/gi) ||

                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/hardship/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/study/gi) || converstionStepsText.match(/expenses/gi)
            ) {
                await playScript("So, If you had an opportunity to live abroad, which country would you like to settle down in?");
                setSampleAns([`If I have an opportunity to live abroad, I would like to settle in a developed country, like Canada, 
                                Australia, the USA, etc. I have heard form my friends and relatives living abroad that life there is 
                                very comfortable, with better facilities and infrastructure. They also tell me that the standard living 
                                is very high there, as compared to India. Also, there are a lot of job opportunities available there.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do Indian parents encourage their children to work abroad?");
                converstionSteps--;
            }

            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("If you had an opportunity to live abroad, which country would you like to settle down in?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. If you had an opportunity to live abroad, which country would you like to settle down in?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/opportunity/gi) || converstionStepsText.match(/live/gi) ||
                converstionStepsText.match(/abroad/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/settle/gi) || converstionStepsText.match(/down/gi) ||

                converstionStepsText.match(/developed/gi) || converstionStepsText.match(/heard/gi) ||
                converstionStepsText.match(/relative/gi) || converstionStepsText.match(/comfortable/gi) ||
                converstionStepsText.match(/facilitie/gi) || converstionStepsText.match(/especially/gi) ||
                converstionStepsText.match(/compared/gi) || converstionStepsText.match(/opportunities/gi) ||
                converstionStepsText.match(/available/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . If you had an opportunity to live abroad, which country would you like to settle down in?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}