let converstionSteps = 0;
export async function Test2Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await playScript("Let's talk about Noice. Is noise pollution serious in your city?");
                setSampleAns([`Yes, it is. We have noise all around us, most of which can be avoided. There is unnecessary honking  of pressure horns from vehicles. Industries are making noise. People use loudspeakers for personal functions, and neighbours are forced to bear the noise. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Is noise pollution serious in your city?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Is noise pollution serious in your city?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/Noice/gi) || converstionStepsText.match(/pollution/gi) ||
                converstionStepsText.match(/India/gi) || converstionStepsText.match(/avoided/gi) ||
                converstionStepsText.match(/unnecessary/gi) || converstionStepsText.match(/honking/gi) ||
                converstionStepsText.match(/vehicles/gi) || converstionStepsText.match(/Indust/gi) ||
                converstionStepsText.match(/loudspeaker/gi) || converstionStepsText.match(/neighbour/gi)

            ) {
                await playScript("Do you like to live in a noisy place?");
                setSampleAns([`No, definitely not. But, unfortunately it is difficult to find places in cities, which are noise free. `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is noise pollution serious in your city?");
                converstionSteps--;
            }
        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like to live in a noisy place?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you like to live in a noisy place?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/definit/gi) || converstionStepsText.match(/fortunate/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/find/gi) ||
                converstionStepsText.match(/places/gi) || converstionStepsText.match(/culture/gi) ||
                converstionStepsText.match(/cit/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/noise/gi) || converstionStepsText.match(/free/gi)
            ) {
                await playScript("Okey. Where can you hear a loud noise?");
                setSampleAns([` We can hear loud noise all around us. There is unnecessary honking of pressure horns from 
                vehicles. Industries are making noise. People use loudspeakers for personal functions, and 
                neighbours are forced to bear the noise. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like to live in a noisy place?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  Where can you hear a loud noise?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Where can you hear a loud noise?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/hear/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/loud/gi) || converstionStepsText.match(/noise/gi) ||
                converstionStepsText.match(/around/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/us/gi) || converstionStepsText.match(/socity/gi) ||
                converstionStepsText.match(/road/gi) || converstionStepsText.match(/public/gi) ||
                converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/horns/gi) ||
                converstionStepsText.match(/vehicles/gi) || converstionStepsText.match(/noise/gi) ||
                converstionStepsText.match(/personal/gi) || converstionStepsText.match(/function/gi) ||
                converstionStepsText.match(/Moving/gi) || converstionStepsText.match(/bear/gi) ||
                converstionStepsText.match(/force/gi) || converstionStepsText.match(/suddenly/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/life/gi)
            ) {
                await playScript("So.  Do you think that there is more noise in people’s lives today than in the past?");
                setSampleAns([`Yes, I think so. The number of vehicles is growing day by day. All these are making noise. Industries  are also growing in numbers. These are also making too much noise. As these sources of noise are increasing, so definitely we are suffering from more and more noise these days.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where can you hear a loud noise?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think that there is more noise in people’s lives today than in the past?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think that there is more noise in people’s lives today than in the past?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/more/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/today/gi) || converstionStepsText.match(/than/gi) ||
                converstionStepsText.match(/past/gi) || converstionStepsText.match(/number/gi) ||

                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/noise/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/increas/gi) || converstionStepsText.match(/definitely/gi) ||
                converstionStepsText.match(/suffer/gi) || converstionStepsText.match(/these days/gi) || converstionStepsText.match(/expect/gi)
            ) {
                await playScript("So,  Do you think that cities will become noisier in the future?");
                setSampleAns([` Yes, I suppose so. Whether we like it or not, the noise producing things are increasing and so it is  quite probable that cities will become noisier in the future.
                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think that there is more noise in people’s lives today than in the past?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think that cities will become noisier in the future?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you think that cities will become noisier in the future?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/cities/gi) || converstionStepsText.match(/city/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/future/gi) ||

                converstionStepsText.match(/suppose/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/Whether/gi) || converstionStepsText.match(/produc/gi) ||
                converstionStepsText.match(/increas/gi) || converstionStepsText.match(/quite/gi) ||
                converstionStepsText.match(/probable/gi) || converstionStepsText.match(/negative/gi)

            ) {
                await playScript(" What is the noise in life?")
                setSampleAns([` The noise in our life means the distractions that do not let us focus on the goals in our life. For example, nowadays, people do not concentrate on their studies or work, and are often busy scrolling unimportant feeds/updates on their mobile phones. The loads of data that they consume  everyday becomes the noise in their life. `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think that cities will become noisier in the future?");
                converstionSteps--;
            }




        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is the noise in life?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What is the noise in life?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/noise/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/mean/gi) || converstionStepsText.match(/distraction/gi) ||
                converstionStepsText.match(/focus/gi) || converstionStepsText.match(/goal/gi) ||

                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/concentrate/gi) || converstionStepsText.match(/studies/gi) ||

                converstionStepsText.match(/work/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/consume/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/everyday/gi) ||
                converstionStepsText.match(/their/gi)
            ) {
                await playScript(
                    "Okey.  How is the noise level in your city?")
                setSampleAns([`My city is an industrial city and on top of that it is on the national highway. So, the noise levels are 
                very high. `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is the noise in life?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How is the noise level in your city?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How is the noise level in your city?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/How/gi) || converstionStepsText.match(/noise/gi) ||
                converstionStepsText.match(/level/gi) || converstionStepsText.match(/generally/gi) ||

                converstionStepsText.match(/city/gi) || converstionStepsText.match(/industrial/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/national/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/highway/gi) || converstionStepsText.match(/keep/gi) ||

                converstionStepsText.match(/level/gi) || converstionStepsText.match(/high/gi) ||
                converstionStepsText.match(/low/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi)
            ) {
                await playScript("Okey.Where does noise in urban areas come from? ")
                setSampleAns([`The noise in urban areas comes from pressure horns of vehicles, industries and loud speakers.`])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How is the noise level in your city?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Where does noise in urban areas come from?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Where does noise in urban areas come from?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Where/gi) || converstionStepsText.match(/noise/gi) ||
                converstionStepsText.match(/does/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/from/gi) || converstionStepsText.match(/urban/gi) ||

                converstionStepsText.match(/come/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/vehicle/gi) || converstionStepsText.match(/horn/gi) ||

                converstionStepsText.match(/indust/gi) || converstionStepsText.match(/loud/gi) ||
                converstionStepsText.match(/speaker/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/step/gi) ||
                converstionStepsText.match(/main/gi) || converstionStepsText.match(/take/gi) ||
                converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) || converstionStepsText.match(/way/gi) || converstionStepsText.match(/process/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Where does noise in urban areas come from?");
                converstionSteps--;
            }
        }


    }

    converstionStepsText = "";


}