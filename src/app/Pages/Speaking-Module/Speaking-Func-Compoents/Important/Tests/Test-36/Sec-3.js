let converstionSteps = 0;



export async function Test36Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, What do people in your country like to do when they are free?");
                setSampleAns([`People do a lot of things during their free time, most of the people like to gossip with each other or 
                                get in touch with friends and mobile. Nowadays, most of the people use the mobile phones to listen 
                                music or watch videos whenever they are free.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What do people in your country like to do when they are free?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("What do people in your country like to do when they are free?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/when/gi) ||

                converstionStepsText.match(/free/gi) || converstionStepsText.match(/during/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/Nowadays/gi) ||
                converstionStepsText.match(/effect/gi)
            ) {
                await playScript("Okey, Do you think parents should make plans for their children?");
                setSampleAns([`Yes parents should definitely make plans for their children because if they are kept free then they 
                                will get bored and might create trouble for others. Also the children can learn a lot of things if there 
                                parents plan their time`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do people in your country like to do when they are free?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think parents should make plans for their children?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think parents should make plans for their children?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/parents/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/should/gi) ||

                converstionStepsText.match(/make/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/definitely/gi) || converstionStepsText.match(/trouble/gi) ||
                converstionStepsText.match(/expectations/gi) || converstionStepsText.match(/possible/gi) ||
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/time/gi)

            ) {
                await playScript("Okey. Do you think most people are able to manage their free time?");
                setSampleAns([`I think most people get very little free time these days so they do not think about managing it. 
                                    Everyone is very busy these days and people hardly get time to relax so whenever they get free 
                                    they like to do nothing`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think parents should make plans for their children?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think most people are able to manage their free time?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you think most people are able to manage their free time?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/manage/gi) ||
                converstionStepsText.match(/able/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/free/gi) ||
                converstionStepsText.match(/time/gi)
            ) {
                await playScript("Okey. What is the difference between the things people did in their free time in the past and the things they do nowadays?");
                setSampleAns([`In the past there was hardly any technology so people mostly did gossip during their free time 
                                whereas nowadays people have access to lot of gadgets which keep them busy when they are free.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think most people are able to manage their free time?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is the difference between the things people did in their free time in the past and the things they do nowadays?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What is the difference between the things people did in their free time in the past and the things they do nowadays?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/difference/gi) || converstionStepsText.match(/between/gi) ||
                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/free/gi) || converstionStepsText.match(/past/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/mindfulness/gi) ||

                converstionStepsText.match(/exercising/gi) || converstionStepsText.match(/hard/gi) ||
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/access/gi)
            ) {
                await playScript("So, Do you think having free time is important for a person’s well-being?");
                setSampleAns([`Yes, free time is important because it helps people relax and recharge. It gives them a break from work or studies, which is essential for mental and physical health.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. What is the difference between the things people did in their free time in the past and the things they do nowadays?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think having free time is important for a person’s well-being?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Do you think having free time is important for a person’s well-being?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/having/gi) ||
                converstionStepsText.match(/free/gi) || converstionStepsText.match(/important/gi) ||

                converstionStepsText.match(/time/gi) || converstionStepsText.match(/person/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/recharge/gi) ||
                converstionStepsText.match(/break/gi) || converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/health/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think having free time is important for a person’s well-being?");
                converstionSteps--;
            }
        }
    }

    converstionStepsText = "";



}
