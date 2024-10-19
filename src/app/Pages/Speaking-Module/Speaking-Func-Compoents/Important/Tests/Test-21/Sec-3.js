let converstionSteps = 0;



export async function Test21Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section 2 . So, What kind of people do you like to study or work with?");
                setSampleAns([`I like to study or work with people who are intelligent, cooperative and helpful.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What kind of people do you like to study or work with?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.So, What kind of people do you like to study or work with?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/many/gi) ||

                converstionStepsText.match(/study/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/nice/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/intelligent/gi) || converstionStepsText.match(/help/gi)

            ) {
                await playScript("Do you think managers can be friends with their subordinates?");
                setSampleAns([`Yes, they can. But the subordinates must realise that such a friendship can be affected if 
                              they become complacent at their work well because of their friendship.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.So, What kind of people do you like to study or work with?");
                converstionSteps--;
            }
            //Question-4

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think managers can be friends with their subordinates?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think managers can be friends with their subordinates?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/managers/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/friend/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/subordinat/gi) || converstionStepsText.match(/culture/gi) ||
                converstionStepsText.match(/realise/gi) || converstionStepsText.match(/affect/gi) ||
                converstionStepsText.match(/complacent/gi) || converstionStepsText.match(/because/gi)
            ) {
                await playScript("Okey. Which one is more important for you at work, development in work related skills or the  recognitions from your supervisor?");

                setSampleAns([`Both are equally important for me. Development in work skills is very essential to progress 
                                and get promotions at work. Recognition from supervisors gives me the impetus to work 
                                even harder.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think managers can be friends with their subordinates?");
                converstionSteps--;
            }

            //question-5

        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Which one is more important for you at work, development in work related skills or the  recognitions from your supervisor?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Which one is more important for you at work, development in work related skills or the  recognitions from your supervisor?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/development/gi) ||

                converstionStepsText.match(/important/gi) || converstionStepsText.match(/through/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/recognit/gi) ||

                converstionStepsText.match(/supervisor/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/essential/gi) || converstionStepsText.match(/progress/gi) ||
                converstionStepsText.match(/promotion/gi) || converstionStepsText.match(/impetus/gi) ||
                converstionStepsText.match(/share/gi) || converstionStepsText.match(/even/gi) ||
                converstionStepsText.match(/harder/gi)
            ) {
                await playScript("Okey. Should children be allowed to choose whom they want to sit with or it should be decided by the teacher.");
                setSampleAns([`In the primary classes, it should be decided by the teachers, because the teacher will know 
                            better which students could be more helpful for each other if made to sit together. In senior 
                            classes, children can figure out for themselves about whom to sit with. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Which one is more important for you at work, development in work related skills or the  recognitions from your supervisor?");
                converstionSteps--;
            }
            //question-6

        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Should children be allowed to choose whom they want to sit with or it should be decided by the teacher.");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Should children be allowed to choose whom they want to sit with or it should be decided by the teacher.");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/allow/gi) || converstionStepsText.match(/choose/gi) ||
                converstionStepsText.match(/sit/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/decide/gi) || converstionStepsText.match(/teacher/gi) ||
                converstionStepsText.match(/primary/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/together/gi) || converstionStepsText.match(/senior/gi) ||
                converstionStepsText.match(/them/gi)
            ) {
                await playScript("So, Should children be involved in management activities of the school?");
                setSampleAns([`I believe that they should be. They feel important and they learn confidence. They can voice 
                                out their problems and help the school authorities find answers for them. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Should children be allowed to choose whom they want to sit with or it should be decided by the teacher.");
                converstionSteps--;
            }

            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Should children be involved in management activities of the school?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Should children be involved in management activities of the school?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Should/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/invol/gi) || converstionStepsText.match(/management/gi) ||

                converstionStepsText.match(/activit/gi) || converstionStepsText.match(/change/gi) ||
                converstionStepsText.match(/school/gi) || converstionStepsText.match(/believe/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/confidence/gi) ||

                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/everlast/gi) ||
                converstionStepsText.match(/problem/gi) || converstionStepsText.match(/authorit/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Should children be involved in management activities of the school? ");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}