let converstionSteps = 0;



export async function Test23Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, Who in your family use the site?");
                setSampleAns([`My siblings use this site. Sometimes my father also uses it. ( Give your personal answer)`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, Who in your family use the site?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.So, Who in your family use the site?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/site/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/many/gi) ||

                converstionStepsText.match(/sibling/gi) || converstionStepsText.match(/Some/gi) ||
                converstionStepsText.match(/father/gi) || converstionStepsText.match(/mother/gi) ||
                converstionStepsText.match(/brother/gi) || converstionStepsText.match(/sister/gi) ||

                converstionStepsText.match(/baby/gi) || converstionStepsText.match(/wife/gi) ||
                converstionStepsText.match(/use/gi)

            ) {
                await playScript("Can internet help children in their study?");
                setSampleAns([`Yes, definitely. The Internet is an ocean of knowledge. Children can take the help of many 
                                    educational sites on the net. `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. So, Who in your family use the site?");
                converstionSteps--;
            }
            //Question-4

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Can internet help children in their study?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Can internet help children in their study?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/internet/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/definitely/gi) ||
                converstionStepsText.match(/their/gi) || converstionStepsText.match(/study/gi) ||
                converstionStepsText.match(/senior/gi) || converstionStepsText.match(/affect/gi) ||
                converstionStepsText.match(/ocean/gi) || converstionStepsText.match(/knowledge/gi) ||
                converstionStepsText.match(/wide/gi) || converstionStepsText.match(/take/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/educational/gi) || converstionStepsText.match(/site/gi)

            ) {
                await playScript("Okey. Will the internet replace the teacher?");

                setSampleAns([`I don't think so. The teacher will always be there. The teacher can keep the student focused on 
                                study. The Internet cannot do so`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can internet help children in their study?");
                converstionSteps--;
            }

            //question-5

        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Will the internet replace the teacher?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Will the internet replace the teacher?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/could/gi) ||

                converstionStepsText.match(/replace/gi) || converstionStepsText.match(/through/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/example/gi) ||

                converstionStepsText.match(/always/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/essential/gi) || converstionStepsText.match(/progress/gi) ||
                converstionStepsText.match(/purpose/gi) || converstionStepsText.match(/fulfilled/gi) ||
                converstionStepsText.match(/focus/gi) || converstionStepsText.match(/study/gi)
            ) {
                await playScript("Okey. Will downloading music or movies for free cause a problem?");
                setSampleAns([`Yes, it can cause problems. It can affect the sale of this music and the movies also. But it cannot be 
                                    stopped. People will always find ways of doing so. This has also made many amateur singers and 
                                    actors famous overnight.
                                    `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Will the internet replace the teacher?");
                converstionSteps--;
            }
            //question-6

        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Will downloading music or movies for free cause a problem?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Will downloading music or movies for free cause a problem?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/downloading/gi) ||
                converstionStepsText.match(/allow/gi) || converstionStepsText.match(/music/gi) ||
                converstionStepsText.match(/free/gi) || converstionStepsText.match(/movie/gi) ||

                converstionStepsText.match(/cause/gi) || converstionStepsText.match(/problem/gi) ||
                converstionStepsText.match(/affect/gi) || converstionStepsText.match(/stop/gi) ||
                converstionStepsText.match(/amateur/gi) || converstionStepsText.match(/actor/gi) ||
                converstionStepsText.match(/famous/gi)
            ) {
                await playScript("So, What are the reasons why people use the internet?");
                setSampleAns([`People use internet for various purposes like entertainment, to gain information or for online 
                                shopping or services like banking etc.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Will downloading music or movies for free cause a problem?");
                converstionSteps--;
            }

            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What are the reasons why people use the internet?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. What are the reasons why people use the internet?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Where/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/there/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/reasons/gi) ||

                converstionStepsText.match(/internet/gi) || converstionStepsText.match(/use/gi) ||
                converstionStepsText.match(/various/gi) || converstionStepsText.match(/purpose/gi) ||
                converstionStepsText.match(/entertainment/gi) || converstionStepsText.match(/gain/gi) ||

                converstionStepsText.match(/information/gi) || converstionStepsText.match(/online/gi) ||

                converstionStepsText.match(/shop/gi) || converstionStepsText.match(/service/gi) || converstionStepsText.match(/banking/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . What are the reasons why people use the internet?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}