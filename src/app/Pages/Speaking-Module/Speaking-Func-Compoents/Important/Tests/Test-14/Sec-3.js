let converstionSteps = 0;
export async function Test14Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await smallTalkError("Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("Let's start.  Are traffic jams common in Indian cities?");
                setSampleAns([`Yes, India has a huge population and traffic jams are not uncommon especially in big cities like  Delhi, Bombay, Chennai and Kokatta. Moreover, there is also a bad culture of parking cars on the  roads in India, which reduces available space for parking and leads to jams. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Are traffic jams common in Indian cities?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are traffic jams common in Indian cities?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/pollution/gi) ||
                converstionStepsText.match(/India/gi) || converstionStepsText.match(/jam/gi) ||

                converstionStepsText.match(/cit/gi) || converstionStepsText.match(/huge/gi) ||
                converstionStepsText.match(/population/gi) || converstionStepsText.match(/uncommon/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/culture/gi) ||

                converstionStepsText.match(/road/gi) || converstionStepsText.match(/reduces/gi) ||
                converstionStepsText.match(/available/gi) || converstionStepsText.match(/park/gi) ||

                converstionStepsText.match(/lead/gi) || converstionStepsText.match(/car/gi) ||
                converstionStepsText.match(/bus/gi) || converstionStepsText.match(/pollice/gi)

            ) {
                await playScript("Why are cities today facing serious traffic issues?");
                setSampleAns([`I think the main reason for the serious traffic issues is increasing urbanisation. More and more people are moving to cities for the better quality of life but this leads to more cars than roads can  handle. Moreover, some older cities have narrow roads as they were not designed keeping today’s  use of cars in minds. These narrow roads restrict traffic flow and lead to jams. `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Are traffic jams common in Indian cities?");
                converstionSteps--;
            }

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why are cities today facing serious traffic issues?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Why are cities today facing serious traffic issues?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/cities/gi) || converstionStepsText.match(/today/gi) ||
                converstionStepsText.match(/facing/gi) || converstionStepsText.match(/serious/gi) ||
                converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/issues/gi) ||

                converstionStepsText.match(/think/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/increasing/gi) ||

                converstionStepsText.match(/better/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/design/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/mind/gi) || converstionStepsText.match(/restrict/gi)
            ) {
                await playScript("Okey. What can be done to improve traffic conditions in cities?");
                setSampleAns([`First, I think the government should promote the use of public transportation by making it more comfortable and faster. For example, the traffic conditions in Delhi have improved considerably  after the launch of Delhi Metro. Also, the roads need to be widened wherever possible to accommodate more cars. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why are cities today facing serious traffic issues?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(". What can be done to improve traffic conditions in cities?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. . What can be done to improve traffic conditions in cities?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/traffic/gi) ||
                converstionStepsText.match(/condition/gi) || converstionStepsText.match(/cit/gi) ||
                converstionStepsText.match(/First/gi) || converstionStepsText.match(/think/gi) ||

                converstionStepsText.match(/government/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/promote/gi) || converstionStepsText.match(/public/gi) ||
                converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/horns/gi) ||

                converstionStepsText.match(/transportation/gi) || converstionStepsText.match(/mak/gi) ||
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/launch/gi) || converstionStepsText.match(/road/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/widened/gi) ||
                converstionStepsText.match(/wherever/gi) || converstionStepsText.match(/possible/gi)
            ) {
                await playScript(" Can developing public transport help resolve traffic issues in cities?");
                setSampleAns([`I think public transportation can resolve traffic issues but if it is fast and comfortable. Delhi had  local trains for long time and people did not prefer them because they were slow. However, the  construction of Delhi metro, which is quite fast and comfortable, made a real dent in traffic.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.. What can be done to improve traffic conditions in cities?");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Can developing public transport help resolve traffic issues in cities?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Can developing public transport help resolve traffic issues in cities?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/develop/gi) || converstionStepsText.match(/public/gi) ||
                converstionStepsText.match(/transport/gi) || converstionStepsText.match(/resolve/gi) ||
                converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/issues/gi) ||
                converstionStepsText.match(/cit/gi) || converstionStepsText.match(/fast/gi) ||
                converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/slow/gi) ||

                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/However/gi) ||
                converstionStepsText.match(/train/gi) || converstionStepsText.match(/long/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/dent/gi) ||
                converstionStepsText.match(/suffer/gi)
            ) {
                await playScript("So, How do you typically pass the time while stuck in a traffic jam?");
                setSampleAns([`"I usually listen to my favorite music or podcasts to make the time pass more pleasantly."
                "I often catch up on phone calls with family or friends, using hands-free, of course."
                "I like to listen to audiobooks; it feels productive and entertaining at the same time."
                "I take the opportunity to practice mindfulness and do some deep breathing exercises to stay calm."
                "Sometimes, I use the time to plan my day or go over my schedule mentally."
                "I play word or trivia games on my phone when the traffic is at a standstill."
                "I use traffic apps to check for alternate routes and see if I can find a quicker way."
                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can developing public transport help resolve traffic issues in cities?");
                converstionSteps--;
            }
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you typically pass the time while stuck in a traffic jam");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How do you typically pass the time while stuck in a traffic jam");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/typically/gi) || converstionStepsText.match(/pass/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/while/gi) ||
                converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/jam/gi) ||

                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/listen/gi) ||
                converstionStepsText.match(/pleasant/gi) || converstionStepsText.match(/often/gi) ||
                converstionStepsText.match(/book/gi) || converstionStepsText.match(/entertain/gi) ||
                converstionStepsText.match(/practice/gi) || converstionStepsText.match(/breath/gi) ||
                converstionStepsText.match(/schedule/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/play/gi) || converstionStepsText.match(/alternate/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(5)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.How do you typically pass the time while stuck in a traffic jam");
                converstionSteps--;
            }
        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}