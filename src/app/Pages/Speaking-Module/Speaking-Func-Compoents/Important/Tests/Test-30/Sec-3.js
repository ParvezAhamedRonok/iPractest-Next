let converstionSteps = 0;


export async function Test30Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So,  When do people usually complain?");
                setSampleAns([`People usually complain when they have been inconvenienced or face a discomfort. The other main 
                            reason for people complaining is when they have been duped or cheated by someone. There are 
                            also many people who may complain without any valid reason, as they may have a complaining 
                            attitude. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So,  When do people usually complain?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So, When do people usually complain?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/When/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/complain/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/People/gi) ||

                converstionStepsText.match(/inconvenienced/gi) || converstionStepsText.match(/discomfort/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/been/gi) ||
                converstionStepsText.match(/someone/gi) || converstionStepsText.match(/without/gi) ||
                converstionStepsText.match(/attitude/gi)
            ) {
                await playScript("Okey, Can complaining help solve problems?");
                setSampleAns([`Yes, there are many scenarios when complaining helps solve problems. For instance, when a 
                                product/appliance/gadget stops working or malfunctions, complaining to the customer support or 
                                service helps solve the problem. There are many situations when people get duped or cheated and 
                                if they complain to the authorities, they are very likely to get justice.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When do people usually complain?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Can complaining help solve problems?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Can complaining help solve problems?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/complain/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/solve/gi) || converstionStepsText.match(/problems/gi) ||

                converstionStepsText.match(/instance/gi) || converstionStepsText.match(/malfunctions/gi) ||
                converstionStepsText.match(/support/gi) || converstionStepsText.match(/service/gi) ||

                converstionStepsText.match(/justice/gi)

            ) {
                await playScript("Okey. What other measures you should take to solve problems rather than complain ");
                setSampleAns([`Sometimes complaining is not the best solution to problems that we face. For instance, the traffic 
                                    problems in many cities are due to people themselves not following the traffic rules. However, 
                                    complaining about it doesn’t solve it, taking steps and initiatives at the individual level can help 
                                    resolve such issues.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can complaining help solve problems?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What other measures you should take to solve problems rather than complain");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What other measures you should take to solve problems rather than complain");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/measure/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/solve/gi) || converstionStepsText.match(/problem/gi) ||
                converstionStepsText.match(/rather/gi) || converstionStepsText.match(/complain/gi) ||
                converstionStepsText.match(/increases/gi) || converstionStepsText.match(/traffic/gi) ||
                converstionStepsText.match(/However/gi) || converstionStepsText.match(/individual/gi) ||

                converstionStepsText.match(/resolve/gi)
            ) {
                await playScript("Okey. What kind of people complaint");
                setSampleAns([`People who are aware of their rights and entitlements complain when they do not receive what 
                                they deserve or have been promised. However, there maybe some people who complain without 
                                any valid/solid reason. Such people are usually unaware and do not want to take responsibility for 
                                their actions. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What other measures you should take to solve problems rather than complain");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What kind of people complaint");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What kind of people complaint");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/complaint/gi) || converstionStepsText.match(/kind/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/right/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/entitlement/gi) ||
                converstionStepsText.match(/maybe/gi) || converstionStepsText.match(/receive/gi) ||

                converstionStepsText.match(/deserve/gi) || converstionStepsText.match(/promise/gi) ||
                converstionStepsText.match(/However/gi) || converstionStepsText.match(/valid/gi) ||
                converstionStepsText.match(/responsibility/gi)
            ) {
                await playScript("So,  Do you usually get angry?");
                setSampleAns([`No, I do not usually get angry. However, there are situations which make me angry, like when I see 
                                someone doing or saying something wrong and inappropriate. Sometimes reading or watching the 
                                news about crimes, corruption, and terrorist attacks and innocent people losing their lives makes 
                                me angry.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again.  What kind of people complaint");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you usually get angry?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating.  Do you usually get angry?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/get/gi) ||
                converstionStepsText.match(/angry/gi) || converstionStepsText.match(/However/gi) ||

                converstionStepsText.match(/situation/gi) || converstionStepsText.match(/wrong/gi) ||
                converstionStepsText.match(/corruption/gi) || converstionStepsText.match(/roti/gi) ||
                converstionStepsText.match(/Street/gi) || converstionStepsText.match(/crime/gi) ||
                converstionStepsText.match(/attack/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .  Do you usually get angry?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}