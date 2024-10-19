let converstionSteps = 0;



export async function Test38Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, Is it fun to be an actor?");
                setSampleAns([`I don’t think it is fun to be an actor as at the beginning of their career actors have to memorize 
                                lines, give auditions and face rejections. Like any other job, it takes a lot of hard work, dedication, 
                                and luck to be a successful actor. However, it is a rewarding career once you become famous and 
                                successful.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, Is it fun to be an actor?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Is it fun to be an actor?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/fun/gi) ||
                converstionStepsText.match(/actor/gi) || converstionStepsText.match(/beginning/gi) ||

                converstionStepsText.match(/career/gi) || converstionStepsText.match(/memorize/gi) ||
                converstionStepsText.match(/audition/gi) || converstionStepsText.match(/face/gi) ||
                converstionStepsText.match(/rejection/gi) ||
                converstionStepsText.match(/job/gi) ||
                converstionStepsText.match(/dedication/gi) || converstionStepsText.match(/successful/gi) ||
                converstionStepsText.match(/However/gi)
            ) {
                await playScript("Okey, What can children learn from acting? ");
                setSampleAns([`I think children can learn a lot from acting. It builds their confidence, teaches them how to work in a 
                                    team, improves their public speaking skills and their creativity, and can be very fun at the same 
                                    time`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is it fun to be an actor?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What can children learn from acting? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What can children learn from acting? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/courses/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/act/gi) ||

                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/build/gi) ||
                converstionStepsText.match(/according/gi) || converstionStepsText.match(/teache/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/time/gi)

            ) {
                await playScript("Okey. What traits of the character do you admire the most?");
                setSampleAns([`I admire the character's determination and courage. They never give up, even in tough situations, and that’s really inspiring.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What can children learn from acting? ");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What traits of the character do you admire the most?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What traits of the character do you admire the most?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/traits/gi) || converstionStepsText.match(/character/gi) ||
                converstionStepsText.match(/admire/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/determination/gi) || converstionStepsText.match(/courage/gi) ||
                converstionStepsText.match(/give/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/inspiring/gi)
            ) {
                await playScript("Okey. How did the character's role impact the overall story of the movie?");
                setSampleAns([`The character was central to the plot. Their decisions shaped the outcome of the story and influenced the actions of the other characters.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.What traits of the character do you admire the most?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How did the character's role impact the overall story of the movie?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How did the character's role impact the overall story of the movie?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/character/gi) || converstionStepsText.match(/role/gi) ||
                converstionStepsText.match(/impact/gi) || converstionStepsText.match(/overall/gi) ||
                converstionStepsText.match(/story/gi) || converstionStepsText.match(/movie/gi) ||
                converstionStepsText.match(/central/gi) || converstionStepsText.match(/plot/gi) ||

                converstionStepsText.match(/decisions/gi) || converstionStepsText.match(/influenced/gi)
            ) {
                await playScript("So, Would you like to see this character in another movie? Why?");
                setSampleAns([`Yes, I would love to see them in another movie because their personality is complex, and there’s a lot more to explore about their backstory.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. How did the character's role impact the overall story of the movie?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Would you like to see this character in another movie? Why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Would you like to see this character in another movie? Why?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Would/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/character/gi) ||

                converstionStepsText.match(/another/gi) || converstionStepsText.match(/movie/gi) ||
                converstionStepsText.match(/personal/gi) || converstionStepsText.match(/complex/gi) ||
                converstionStepsText.match(/explore/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Would you like to see this character in another movie? Why?");
                converstionSteps--;
            }
        }
    }

    converstionStepsText = "";



}