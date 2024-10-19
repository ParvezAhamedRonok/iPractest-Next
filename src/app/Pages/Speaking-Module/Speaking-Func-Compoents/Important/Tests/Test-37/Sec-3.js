let converstionSteps = 0;



export async function Test37Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, Should schools teach both arts and science?");
                setSampleAns([`Yes, schools should teach both arts and science. Both subjects are important in school. Science and 
                                    technology give us better life but arts tell us how to live that life. In Science truths are proved and 
                                    phenomena are explained. In art they are interpreted. Art makes people enjoy life, gives people the 
                                    pleasure of living from the mental level. That’s why both are important to be taught in schools.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, Should schools teach both arts and science?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Should schools teach both arts and science?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Should/gi) ||
                converstionStepsText.match(/teach/gi) || converstionStepsText.match(/school/gi) ||

                converstionStepsText.match(/both/gi) || converstionStepsText.match(/arts/gi) ||
                converstionStepsText.match(/science/gi) || converstionStepsText.match(/subject/gi) ||
                converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/interpreted/gi) ||
                converstionStepsText.match(/life/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/important/gi)
            ) {
                await playScript("Okey, What kinds of courses are useful for university students?");
                setSampleAns([`University students can do any course according to their choice. All courses have their own 
                                    importance. Some courses help in the job market. Some are just for personal fulfillment.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Should schools teach both arts and science?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What kinds of courses are useful for university students?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What kinds of courses are useful for university students?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/courses/gi) ||
                converstionStepsText.match(/courses/gi) || converstionStepsText.match(/useful/gi) ||
                converstionStepsText.match(/university/gi) || converstionStepsText.match(/student/gi) ||

                converstionStepsText.match(/make/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/according/gi) || converstionStepsText.match(/choice/gi) ||
                converstionStepsText.match(/importance/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/time/gi)

            ) {
                await playScript("Okey. Why do some students dislike studying at school?");
                setSampleAns([`Some students dislike studying because of many reasons. Firstly, they may just not be interested in 
                                studying. Secondly, the way of teaching may not be good. Another important reason maybe that 
                                parents force them to study those subjects, which they do not like. For example, the student may 
                                want to do commerce, but parents force him to choose medical stream`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kinds of courses are useful for university students?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why do some students dislike studying at school?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do some students dislike studying at school?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/student/gi) || converstionStepsText.match(/dislike/gi) ||
                converstionStepsText.match(/study/gi) || converstionStepsText.match(/school/gi) ||
                converstionStepsText.match(/reasons/gi) || converstionStepsText.match(/interest/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/subject/gi) ||
                converstionStepsText.match(/commerce/gi) ||
                converstionStepsText.match(/medical/gi)
            ) {
                await playScript("Okey. What school activities are good for schoolchildren?");
                setSampleAns([`All curricular and extra-curricular activities are good for children. They should study academic 
                                    subjects as well as take part in sports, music etc.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why do some students dislike studying at school?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What school activities are good for schoolchildren?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What school activities are good for schoolchildren?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/school/gi) || converstionStepsText.match(/activitie/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/school/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/curricular/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/should/gi) ||

                converstionStepsText.match(/academic/gi) || converstionStepsText.match(/subject/gi) ||
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/sport/gi)
            ) {
                await playScript("So, How can teachers make learning more engaging for students?");
                setSampleAns([`Teachers can make learning more engaging by using interactive methods like group activities, games, and technology. Making lessons practical and relatable to real life also helps keep students interested.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. What school activities are good for schoolchildren?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can teachers make learning more engaging for students?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. How can teachers make learning more engaging for students?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/teachers/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/learn/gi) ||

                converstionStepsText.match(/engagin/gi) || converstionStepsText.match(/student/gi) ||
                converstionStepsText.match(/method/gi) || converstionStepsText.match(/group/gi) ||
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/practical/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . How can teachers make learning more engaging for students?");
                converstionSteps--;
            }
        }
    }

    converstionStepsText = "";



}