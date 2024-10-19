let converstionSteps = 0;



export async function Test26Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, Do you think old people and young people can share the same interest?");
                setSampleAns([`It may sometimes be difficult for old people and young people to share the same interests. Young 
                                    people are generally more energetic, so they prefer outdoor sports, but old people can only play 
                                    those games which are not physically trying. It would be wrong to say that they cannot share the 
                                    same interest. They both can share the same interest in TV programs, movies, indoor games, etc. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So,  Do you think old people and young people can share the same interest?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So,  Do you think old people and young people can share the same interest?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/share/gi) ||

                converstionStepsText.match(/interest/gi) || converstionStepsText.match(/sometime/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/program/gi) ||
                converstionStepsText.match(/game/gi) || converstionStepsText.match(/energetic/gi) ||

                converstionStepsText.match(/indoor/gi)

            ) {
                await playScript("Okey, What skills can the old teach the young?");
                setSampleAns([`Old people today have seen a lot of changes in their lifetime. My grandfather has told me many 
                                    stories of how difficult his life was when there were no vehicles and horses were used for 
                                    transportation. He has also seen a lot of technological advancements. For example, the evolution of 
                                    music started with radio and was followed by gramophones, cassette players, cd’s and dvd’s, and 
                                    finally IPods and Mobile Phones. The most important life skills such as adaptability, versatility and 
                                    openness to change, can be taught by the old to the young.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. So,  Do you think old people and young people can share the same interest?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What skills can the old teach the young?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What skills can the old teach the young?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/teach/gi) || converstionStepsText.match(/young/gi) ||

                converstionStepsText.match(/change/gi) || converstionStepsText.match(/lifetime/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/vehicle/gi) ||
                converstionStepsText.match(/transportation/gi) || converstionStepsText.match(/advancement/gi) ||
                converstionStepsText.match(/follow/gi) || converstionStepsText.match(/gramophone/gi) ||

                converstionStepsText.match(/openness/gi) || converstionStepsText.match(/taught/gi) ||
                converstionStepsText.match(/adaptability/gi) || converstionStepsText.match(/versatility/gi)

            ) {
                await playScript("Okey. What skills can the young teach the old?");

                setSampleAns([`Young people are faster at learning about modern technology and better at operating gadgets. 
                                They can definitely teach these skills to old people. Also, since young people are now entering 
                                various businesses, other young people understand them and can do a better job of negotiating 
                                prices of goods and services. This too is an important skill for old people who are always keen to get 
                                a good bargain. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What skills can the old teach the young?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What skills can the young teach the old?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What skills can the young teach the old?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/teach/gi) || converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/faster/gi) || converstionStepsText.match(/modern/gi) ||

                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/operating/gi) || converstionStepsText.match(/gadget/gi) ||
                converstionStepsText.match(/businesse/gi) || converstionStepsText.match(/various/gi)
            ) {
                await playScript("Okey. Do you think the old people should live with their family?");
                setSampleAns([`Ideally they should. But, if not possible for some reasons, they should be in old age homes and not 
                                 live alone. Living alone can be dangerous for them. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What skills can the young teach the old?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think the old people should live with their family?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think the old people should live with their family?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/Ideally/gi) || converstionStepsText.match(/possible/gi) ||

                converstionStepsText.match(/reasons/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/dangerous/gi) || converstionStepsText.match(/time/gi)
            ) {
                await playScript("So,  Do you think the old and the young can have the same interests? ");
                setSampleAns([`Yes, they can share interests like music, movies, or sports. While preferences might differ, common interests can still bring generations together.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think the old people should live with their family?");
                converstionSteps--;
            }

            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think the old and the young can have the same interests? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating.  Do you think the old and the young can have the same interests? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/same/gi) ||

                converstionStepsText.match(/interest/gi) || converstionStepsText.match(/music/gi) ||
                converstionStepsText.match(/movie/gi) || converstionStepsText.match(/sport/gi) ||
                converstionStepsText.match(/preferences/gi) || converstionStepsText.match(/differ/gi) ||
                converstionStepsText.match(/interest/gi) || converstionStepsText.match(/together/gi) ||
                converstionStepsText.match(/available/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think the old and the young can have the same interests? ");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}
