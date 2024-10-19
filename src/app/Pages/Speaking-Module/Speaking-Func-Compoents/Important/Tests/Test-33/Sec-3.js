let converstionSteps = 0;


export async function Test33Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, What do you think of people who are posting about their personal life on social media?");
                setSampleAns([`Personally, I don’t do it because I think it can be really dangerous. However, I also think its 
                                people’s personal decision and I don’t judge people on the basis of this. I know many people 
                                are earning money by doing this, so I can see why people do it.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What do you think of people who are posting about their personal life on social media?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What do you think of people who are posting about their personal life on social media?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/posting/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/media/gi) ||

                converstionStepsText.match(/social/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/dangerous/gi) || converstionStepsText.match(/However/gi) ||
                converstionStepsText.match(/decision/gi) || converstionStepsText.match(/basis/gi) ||
                converstionStepsText.match(/money/gi)
            ) {
                await playScript("Okey, How do you feel about sharing research documents online?");
                setSampleAns([`I wouldn’t do it before the research is published, but I think if the research is shared for the 
                                    benefit of the people after publishing, it is completely understandable.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.What do you think of people who are posting about their personal life on social media?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you feel about sharing research documents online?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do you feel about sharing research documents online?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/feel/gi) || converstionStepsText.match(/sharing/gi) ||
                converstionStepsText.match(/research/gi) || converstionStepsText.match(/research/gi) ||
                converstionStepsText.match(/online/gi) || converstionStepsText.match(/publish/gi) ||

                converstionStepsText.match(/document/gi) || converstionStepsText.match(/benefit/gi) ||
                converstionStepsText.match(/complete/gi) ||
                converstionStepsText.match(/understand/gi)

            ) {
                await playScript("Okey. Do you think children should share their things with each other?");
                setSampleAns([`Within the family, I think there is no question that siblings should share their toys and clothes 
                        with each other. With regards to other children, I think it good to share toys when they visit 
                        to play but I don’t think they should lend the toys for them to take home.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.How do you feel about sharing research documents online?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think children should share their things with each other?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think children should share their things with each other?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/share/gi) ||
                converstionStepsText.match(/their/gi) || converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/other/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/frient/gi) || converstionStepsText.match(/regards/gi) ||
                converstionStepsText.match(/home/gi)
            ) {
                await playScript("Okey. Why aren’t children willing to share their things, such as toys?");
                setSampleAns([`I think they learn and observe these things from their parents. If their parents are very 
                                    possessive about materialistic things, they also turn out so. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think children should share their things with each other?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why aren’t children willing to share their things, such as toys?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why aren’t children willing to share their things, such as toys?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/willing/gi) ||
                converstionStepsText.match(/share/gi) || converstionStepsText.match(/things/gi) ||
                converstionStepsText.match(/impact/gi) || converstionStepsText.match(/toy/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/observe/gi) ||

                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/parent/gi) ||
                converstionStepsText.match(/possessive/gi) || converstionStepsText.match(/materialistic/gi) ||
                converstionStepsText.match(/society/gi)
            ) {
                await playScript("So, How can parents teach their children about sharing?");
                setSampleAns([`I think children should be rewarded for sharing things. For example, they can be bought new 
                                toys if they readily share their toys. Similarly, parents can punish them by not talking to them 
                                for some time if they refuse to share their things`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. Why aren’t children willing to share their things, such as toys?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can parents teach their children about sharing?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. How can parents teach their children about sharing?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/teach/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/their/gi) ||
                converstionStepsText.match(/about/gi) || converstionStepsText.match(/sharing/gi) ||

                converstionStepsText.match(/situation/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/For example/gi) || converstionStepsText.match(/bought/gi) ||
                converstionStepsText.match(/toys/gi) || converstionStepsText.match(/especially/gi) ||
                converstionStepsText.match(/Similarly/gi) || converstionStepsText.match(/responsible/gi) ||
                converstionStepsText.match(/share/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . How can parents teach their children about sharing?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}
