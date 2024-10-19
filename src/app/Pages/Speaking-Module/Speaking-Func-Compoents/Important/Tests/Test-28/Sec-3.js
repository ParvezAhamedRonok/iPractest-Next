let converstionSteps = 0;


export async function Test28Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, Do you think nowadays children are learning too much about history?");
                setSampleAns([`No, I don’t think so. Though there are more sources for learning about history today, like 
                                museums, the internet and films, but children don't seem interested in the past, somehow.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, Do you think nowadays children are learning too much about history?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So, Do you think nowadays children are learning too much about history?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/learning/gi) || converstionStepsText.match(/history/gi) ||
                converstionStepsText.match(/Though/gi) || converstionStepsText.match(/sources/gi) ||
                converstionStepsText.match(/museums/gi) || converstionStepsText.match(/internet/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/seem/gi)

            ) {
                await playScript("Okey, Many children tend to get bored with history because of all these dates, time and names to  remember, do you agree with that?");
                setSampleAns([`Yes, I do agree because even I am intimidated with dates. When there are too many dates to 
                                remember, it becomes boring. However, if history is taught through movies and TV serials, 
                                then many people would start taking interest in history.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think nowadays children are learning too much about history?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Many children tend to get bored with history because of all these dates, time and names to  remember, do you agree with that?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Many children tend to get bored with history because of all these dates, time and names to  remember, do you agree with that?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/too/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/bored/gi) ||
                converstionStepsText.match(/history/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/date/gi) || converstionStepsText.match(/name/gi) ||
                converstionStepsText.match(/remember/gi) || converstionStepsText.match(/agree/gi) ||
                converstionStepsText.match(/intimidate/gi) || converstionStepsText.match(/boring/gi) ||

                converstionStepsText.match(/through/gi) || converstionStepsText.match(/taught/gi) ||
                converstionStepsText.match(/serials/gi) || converstionStepsText.match(/tv/gi)

            ) {
                await playScript("Okey. Some people tend to go against the idea of learning from past experiences, what about you?");
                setSampleAns([`Well, everyone looks at things differently. I believe that the past is a good teacher of life. 
                                    You learn from the past and try to avoid those mistakes, which were made then. Many 
                                    politicians have handled tough times with lessons from the pas.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Many children tend to get bored with history because of all these dates, time and names to  remember, do you agree with that?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Some people tend to go against the idea of learning from past experiences, what about you?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Some people tend to go against the idea of learning from past experiences, what about you?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/tend/gi) ||
                converstionStepsText.match(/against/gi) || converstionStepsText.match(/learning/gi) ||
                converstionStepsText.match(/from/gi) || converstionStepsText.match(/past/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/about/gi) ||
                converstionStepsText.match(/everyone/gi) || converstionStepsText.match(/look/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/believe/gi) ||
                converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/politician/gi) || converstionStepsText.match(/tough/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/lesson/gi)
            ) {
                await playScript("Okey. Do you think it is important to know about history? OR What can we learn from history?");
                setSampleAns([`Yes, it is very important to know about history. History tells us about our past. It teaches us many 
                                    things. Everything has its history. We enjoy the freedom we have today only because we knew that 
                                    once we were slaves. History also teaches us not to repeat the mistakes of the past. We learn about 
                                    the progress we have made through history.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Some people tend to go against the idea of learning from past experiences, what about you?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think it is important to know about history? OR What can we learn from history?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think it is important to know about history? OR What can we learn from history?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/history/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/past/gi) || converstionStepsText.match(/teache/gi) ||

                converstionStepsText.match(/many/gi) || converstionStepsText.match(/Everything/gi) ||
                converstionStepsText.match(/enjoy/gi) || converstionStepsText.match(/freedom/gi) ||
                converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/mistakes/gi)
            ) {
                await playScript("So, How can people get reliable historical information?");
                setSampleAns([`People can get reliable and historical information from books written by eminent historians, from 
                                    museums, and from art galleries. Nowadays many reliable sites have information about history on 
                                    the Internet.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. Do you think it is important to know about history? OR What can we learn from history?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How can people get reliable historical information?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. How can people get reliable historical information? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/get/gi) || converstionStepsText.match(/reliable/gi) ||
                converstionStepsText.match(/historical/gi) || converstionStepsText.match(/information/gi) ||

                converstionStepsText.match(/written/gi) || converstionStepsText.match(/eminent/gi) ||
                converstionStepsText.match(/histor/gi) || converstionStepsText.match(/museums/gi) ||
                converstionStepsText.match(/galle/gi) || converstionStepsText.match(/Nowaday/gi) ||
                converstionStepsText.match(/Internet/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . How can people get reliable historical information?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}