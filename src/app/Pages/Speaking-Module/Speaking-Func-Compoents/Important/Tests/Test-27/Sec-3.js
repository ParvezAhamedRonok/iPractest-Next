let converstionSteps = 0;


export async function Test27Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, What technology products or technologies are used by people now?");
                setSampleAns([`Our life is full of technology. In fact, we use a technology from waking up to sleeping. A few 
                            examples are all the kitchen gadgets, vacuum cleaners, washing machines, mobile phones, laptops, 
                            cars and so on.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What technology products or technologies are used by people now?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So, What technology products or technologies are used by people now?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/product/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/use/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/now/gi) ||

                converstionStepsText.match(/life/gi) || converstionStepsText.match(/sleep/gi) ||
                converstionStepsText.match(/walk/gi) || converstionStepsText.match(/kitchen/gi) ||
                converstionStepsText.match(/clean/gi) || converstionStepsText.match(/mobile/gi) ||

                converstionStepsText.match(/laptops/gi) || converstionStepsText.match(/so on/gi)

            ) {
                await playScript("Okey, Why do large companies often produce new products?");
                setSampleAns([`I think it is a game of constant one-upmanship. Companies are trying to cram in more and more 
                                    features trying to out do each other without really thinking about what is essential. For example, 
                                    there are mobile phones out there with more than 10 cameras.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. So, What technology products or technologies are used by people now?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do large companies often produce new products?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do large companies often produce new products?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/large/gi) || converstionStepsText.match(/large/gi) ||
                converstionStepsText.match(/companie/gi) || converstionStepsText.match(/often/gi) ||

                converstionStepsText.match(/produce/gi) || converstionStepsText.match(/product/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/constant/gi) || converstionStepsText.match(/one-upmanship/gi) ||
                converstionStepsText.match(/feature/gi) || converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/For example/gi) || converstionStepsText.match(/camera/gi)

            ) {
                await playScript("Okey. Why are people so enthusiastic about buying newer iPhone models, even when nothing much changes?");
                setSampleAns([`I think the main reason is that the people want to show off that they own the latest model. 
                            Moreover, I think buying something new makes it exciting. We don’t have the same bonds with 
                            products we earlier did and thus its very easy to throw away the older model for the newer one.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why do large companies often produce new products?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why are people so enthusiastic about buying newer iPhone models, even when nothing much changes?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why are people so enthusiastic about buying newer iPhone models, even when nothing much changes?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/enthusiastic/gi) ||
                converstionStepsText.match(/about/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/buying/gi) || converstionStepsText.match(/newer/gi) ||

                converstionStepsText.match(/iPhone/gi) || converstionStepsText.match(/model/gi) ||
                converstionStepsText.match(/nothing/gi) || converstionStepsText.match(/change/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/latest/gi) ||
                converstionStepsText.match(/Moreover/gi) || converstionStepsText.match(/easy/gi)
            ) {
                await playScript("Okey. How has technology changed the way we communicate?");
                setSampleAns([`Technology has made communication faster and easier. With smartphones, messaging apps, and social media, people can stay connected instantly, regardless of distance.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why are people so enthusiastic about buying newer iPhone models, even when nothing much changes?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How has technology changed the way we communicate?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How has technology changed the way we communicate?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/often/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/communicat/gi) ||
                converstionStepsText.match(/made/gi) || converstionStepsText.match(/faster/gi) ||
                converstionStepsText.match(/easier/gi) || converstionStepsText.match(/smartphones/gi) ||

                converstionStepsText.match(/messag/gi) || converstionStepsText.match(/stay/gi) ||
                converstionStepsText.match(/media/gi) || converstionStepsText.match(/instantly/gi) ||
                converstionStepsText.match(/regard/gi) || converstionStepsText.match(/distance/gi)
            ) {
                await playScript("So, Do you think technology makes life more convenient or more complicated? ");
                setSampleAns([`It makes life more convenient by automating tasks and improving communication, but sometimes it also complicates things, especially when there's too much reliance on it or constant updates to keep up with.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. How has technology changed the way we communicate?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think technology makes life more convenient or more complicated?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Do you think technology makes life more convenient or more complicated? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/life/gi) ||

                converstionStepsText.match(/convenient/gi) || converstionStepsText.match(/complicat/gi) ||
                converstionStepsText.match(/improv/gi) || converstionStepsText.match(/communication/gi) ||
                converstionStepsText.match(/preferences/gi) || converstionStepsText.match(/sometime/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/reliance/gi) ||
                converstionStepsText.match(/constant/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think technology makes life more convenient or more complicated?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}