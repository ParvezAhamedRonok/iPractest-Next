let converstionSteps = 0;
export async function Test15Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await smallTalkError(" I will ask you the qustion related of section two. so , Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("Let's start. How has technology made our life easier?");
                setSampleAns([`Different technologies have made our lives easier in different ways. However, in effect most  technologies reduce our labour and save us valuable time, thus improving our quality of life  considerably. They also in a way reduce our need on others because we can do everything on our .
                own.
                 `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How has technology made our life easier?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How has technology made our life easier?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/made/gi) ||
                converstionStepsText.match(/life/gi) || converstionStepsText.match(/easier/gi) ||

                converstionStepsText.match(/Different/gi) || converstionStepsText.match(/way/gi) ||
                converstionStepsText.match(/However/gi) || converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/reduce/gi) || converstionStepsText.match(/culture/gi) ||

                converstionStepsText.match(/road/gi) || converstionStepsText.match(/reduces/gi) ||
                converstionStepsText.match(/quality/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/lead/gi) || converstionStepsText.match(/everything/gi)

            ) {
                await playScript(" Which invention do you think is the most useful at home?");
                setSampleAns([`I think it’s very hard to choose one. It really depends upon the person and their use. For example, I find dishwashers as very useful because in my house, I have the responsibility of washing utensils.  For my mother the answer might be the vacuum cleaner as she is responsible for cleaning. `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How has technology made our life easier?");
                converstionSteps--;
            }

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Which invention do you think is the most useful at home?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Which invention do you think is the most useful at home?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/invention/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/today/gi) ||
                converstionStepsText.match(/useful/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/choose/gi) || converstionStepsText.match(/because/gi) ||

                converstionStepsText.match(/responsi/gi) || converstionStepsText.match(/clean/gi) ||
                converstionStepsText.match(/vacuum/gi) || converstionStepsText.match(/increasing/gi) ||

                converstionStepsText.match(/better/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/design/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/house/gi)
            ) {
                await playScript("Okey. Is it more difficult for old people to accept new technologies?");
                setSampleAns([`First, I think the government should promote the use of public transportation by making it more comfortable and faster. For example, the traffic conditions in Delhi have improved considerably  after the launch of Delhi Metro. Also, the roads need to be widened wherever possible to accommodate more cars. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Which invention do you think is the most useful at home?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(". Is it more difficult for old people to accept new technologies?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Is it more difficult for old people to accept new technologies?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/more/gi) || converstionStepsText.match(/difficult/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/accept/gi) || converstionStepsText.match(/technolog/gi) ||

                converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/faster/gi) ||
                converstionStepsText.match(/promote/gi) || converstionStepsText.match(/improve/gi) ||
                converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/horns/gi) ||

                converstionStepsText.match(/Metro/gi) || converstionStepsText.match(/possible/gi) ||
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/launch/gi) || converstionStepsText.match(/road/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/widened/gi) ||
                converstionStepsText.match(/wherever/gi) || converstionStepsText.match(/possible/gi)
            ) {
                await playScript("What can be done to help old people learn to make use of new technologies?");
                setSampleAns([`Many steps can be taken to encourage the use of new technologies. Firstly, these big technology 
                companies can organise seminars where older people can be taught about use of latest gadgets. 
                members can also be helpful in helping their parents and grandparents when they are finding 
                something difficult..`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is it more difficult for old people to accept new technologies?");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" What can be done to help old people learn to make use of new technologies?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What can be done to help old people learn to make use of new technologies?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/done/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/public/gi) ||
                converstionStepsText.match(/technolog/gi) || converstionStepsText.match(/these/gi) ||

                converstionStepsText.match(/organise/gi) || converstionStepsText.match(/seminar/gi) ||
                converstionStepsText.match(/cit/gi) || converstionStepsText.match(/fast/gi) ||
                converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/slow/gi) ||

                converstionStepsText.match(/accommodate/gi) || converstionStepsText.match(/However/gi) ||
                converstionStepsText.match(/train/gi) || converstionStepsText.match(/long/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/dent/gi) ||
                converstionStepsText.match(/suffer/gi)
            ) {
                await playScript("So,  Will our life be better if we live without technology？");
                setSampleAns([`Technology has improved our life in many ways but it has also brought many challenges. Life would 
                certainly be simpler, but I wouldn’t call it better. Moreover, I think we have become so accustomed 
                to technology just the idea of living without it is unfathomable. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent . What can be done to help old people learn to make use of new technologies?");
                converstionSteps--;
            }
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Will our life be better if we live without technology？");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Will our life be better if we live without technology？");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Will/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/without/gi) ||
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/improve/gi) ||

                converstionStepsText.match(/many/gi) || converstionStepsText.match(/brought/gi) ||
                converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/often/gi) ||
                converstionStepsText.match(/certainly/gi) || converstionStepsText.match(/simpler/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/accusto/gi) ||
                converstionStepsText.match(/unfathomable/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(5)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Will our life be better if we live without technology？");
                converstionSteps--;
            }
        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}