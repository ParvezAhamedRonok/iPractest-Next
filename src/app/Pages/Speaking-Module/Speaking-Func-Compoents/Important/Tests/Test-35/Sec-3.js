let converstionSteps = 0;


export async function Test35Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, Do you think exercise is important for mental and physical health?");
                setSampleAns([`Definitely, physical health is directly dependent upon exercise. With today’s sedentary lifestyles it is 
                            nearly impossible to be healthy without exercise. Similarly, when we exercise, we feel more 
                            confident about our looks and this makes us much more social, which in effect is good for people 
                            mental health.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, Do you think exercise is important for mental and physical health?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Do you think exercise is important for mental and physical health?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/exercise/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/mental/gi) ||

                converstionStepsText.match(/physical/gi) || converstionStepsText.match(/health/gi) ||
                converstionStepsText.match(/Definitely/gi) || converstionStepsText.match(/directly/gi) ||
                converstionStepsText.match(/effect/gi)
            ) {
                await playScript("Okey,  Why do people feel stressful all the time?");
                setSampleAns([`I think there are many reasons for the increasing stress in our lives. One is the growing competition, 
                            which has reduced job security. So people are always stressed about their work and job. Secondly, 
                            today people have very high expectations. When we expect much more than it is possible, we are 
                            bound to be stressed. Finally, stress is relieved by talking to friends but as people are spending less 
                            and less time with each other. As a result people feel stressed all the time.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think exercise is important for mental and physical health?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why do people feel stressful all the time?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Why do people feel stressful all the time? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/stressful/gi) || converstionStepsText.match(/feel/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reasons/gi) ||

                converstionStepsText.match(/lives/gi) || converstionStepsText.match(/competition/gi) ||
                converstionStepsText.match(/reduced/gi) || converstionStepsText.match(/security/gi) ||
                converstionStepsText.match(/expectations/gi) || converstionStepsText.match(/possible/gi) ||
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/time/gi)

            ) {
                await playScript("Okey.  Do you think there should be classes for teaching young people and children how to be relaxed?");
                setSampleAns([`Yes, I think it has become essential in today’s time. The growing rate of mental issues and 
                            depression among youth are evidence that it is very crucial that we teach young people how to deal 
                            with stress. I think it can be done by having relaxation classes in school itself. Moreover, if they 
                            learn to deal with stress at a young age, they can deal with it much better when they become 
                            adults.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Why do people feel stressful all the time?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think there should be classes for teaching young people and children how to be relaxed?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you think there should be classes for teaching young people and children how to be relaxed?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/classes/gi) || converstionStepsText.match(/teach/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/relax/gi) || converstionStepsText.match(/depression/gi) ||
                converstionStepsText.match(/youth/gi) || converstionStepsText.match(/school/gi) ||
                converstionStepsText.match(/Moreover/gi) || converstionStepsText.match(/stress/gi) ||
                converstionStepsText.match(/deal/gi)
            ) {
                await playScript("Okey. How can people manage stress in their daily lives?");
                setSampleAns([`People can manage stress by practicing mindfulness, exercising regularly, and maintaining a healthy work-life balance. Simple activities like going for a walk or talking to a friend can also help relieve stress.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think there should be classes for teaching young people and children how to be relaxed?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can people manage stress in their daily lives?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How can people manage stress in their daily lives?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/difference/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/manage/gi) || converstionStepsText.match(/stress/gi) ||
                converstionStepsText.match(/daily/gi) || converstionStepsText.match(/lives/gi) ||
                converstionStepsText.match(/practic/gi) || converstionStepsText.match(/mindfulness/gi) ||

                converstionStepsText.match(/exercising/gi) || converstionStepsText.match(/regular/gi) ||
                converstionStepsText.match(/maintain/gi) || converstionStepsText.match(/healthy/gi) ||
                converstionStepsText.match(/balance/gi) || converstionStepsText.match(/for example/gi) ||
                converstionStepsText.match(/relieve/gi) || converstionStepsText.match(/strange/gi)
            ) {
                await playScript("So, Do you think technology contributes to stress?");
                setSampleAns([`Yes, technology can contribute to stress because we’re always connected, making it hard to switch off from work or social media. The constant notifications and pressure to be online can overwhelm people.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. How can people manage stress in their daily lives?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think technology contributes to stress?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Do you think technology contributes to stress?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/contribute/gi) || converstionStepsText.match(/stress/gi) ||

                converstionStepsText.match(/situation/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/nervous/gi) || converstionStepsText.match(/excite/gi) ||
                converstionStepsText.match(/curious/gi) || converstionStepsText.match(/connect/gi) ||
                converstionStepsText.match(/switch/gi) || converstionStepsText.match(/social/gi) ||
                converstionStepsText.match(/constant/gi) || converstionStepsText.match(/online/gi) ||
                converstionStepsText.match(/people/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think technology contributes to stress?");
                converstionSteps--;
            }
        }
    }

    converstionStepsText = "";



}