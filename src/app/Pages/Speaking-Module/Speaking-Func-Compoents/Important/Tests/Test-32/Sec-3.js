let converstionSteps = 0;


export async function Test32Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, What is the new development in your area?");
                setSampleAns([`A new shopping mall just opened near my house. It’s a huge place with various stores, restaurants, and entertainment options. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What is the new development in your area?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So,What is the new development in your area?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/development/gi) || converstionStepsText.match(/area/gi) ||
                converstionStepsText.match(/there/gi) || converstionStepsText.match(/mant/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/People/gi) ||

                converstionStepsText.match(/shop/gi) || converstionStepsText.match(/economy/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/house/gi) ||
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/depend/gi) || converstionStepsText.match(/various/gi) ||
                converstionStepsText.match(/store/gi) || converstionStepsText.match(/restaurant/gi)
            ) {
                await playScript("Okey, When did you first hear about this development?");
                setSampleAns([`I heard about the new mall last year when they started construction. There were lots of announcements and posters about it.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is the new development in your area?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("When did you first hear about this development?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. When did you first hear about this development?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/first/gi) || converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/hear/gi) || converstionStepsText.match(/about/gi) ||
                converstionStepsText.match(/development/gi) || converstionStepsText.match(/mall/gi) ||

                converstionStepsText.match(/when/gi) || converstionStepsText.match(/start/gi) ||
                converstionStepsText.match(/construction/gi) ||
                converstionStepsText.match(/about/gi)

            ) {
                await playScript("Okey. How has this development changed your daily routine?");
                setSampleAns([`It has made shopping a lot more convenient for me. I can get groceries and essentials nearby instead of traveling far.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When did you first hear about this development?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How has this development changed your daily routine?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How has this development changed your daily routine?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/has/gi) ||
                converstionStepsText.match(/development/gi) || converstionStepsText.match(/change/gi) ||
                converstionStepsText.match(/daily/gi) || converstionStepsText.match(/routine/gi) ||
                converstionStepsText.match(/shop/gi) || converstionStepsText.match(/convenient/gi) ||
                converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/near/gi) || converstionStepsText.match(/instead/gi) ||
                converstionStepsText.match(/traveling/gi)
            ) {
                await playScript("Okey. What do you think of the development’s impact on your community?");
                setSampleAns([`It has brought more business and jobs to the area, but it also increased traffic, which is a bit frustrating sometimes.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How has this development changed your daily routine?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What do you think of the development’s impact on your community?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What do you think of the development’s impact on your community?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/development/gi) ||
                converstionStepsText.match(/impact/gi) || converstionStepsText.match(/community/gi) ||
                converstionStepsText.match(/brought/gi) || converstionStepsText.match(/business/gi) ||

                converstionStepsText.match(/job/gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/sometime/gi) ||
                converstionStepsText.match(/society/gi)
            ) {
                await playScript("So, Do you think this development has any downsides?");
                setSampleAns([`While it's great for shopping, the increased traffic and noise can be annoying, especially during weekends.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. What do you think of the development’s impact on your community?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think this development has any downsides?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Do you think this development has any downsides?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/development/gi) ||
                converstionStepsText.match(/downside/gi) || converstionStepsText.match(/great/gi) ||

                converstionStepsText.match(/situation/gi) || converstionStepsText.match(/shop/gi) ||
                converstionStepsText.match(/increase/gi) || converstionStepsText.match(/traffic/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/especially/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/responsible/gi) ||
                converstionStepsText.match(/pressure/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think this development has any downsides?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}