let converstionSteps = 0;



export async function Test24Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, What are things that young people can teach old people to do?");
                setSampleAns([`I think they can teach them anything they are good at. However, if I had to pick something specific I 
                                would say the use of technology like how to use mobile phone features, apps and computer 
                                softwares`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What are things that young people can teach old people to do?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So, What are things that young people can teach old people to do?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/many/gi) ||

                converstionStepsText.match(/teach/gi) || converstionStepsText.match(/Some/gi) ||
                converstionStepsText.match(/old/gi) || converstionStepsText.match(/to do/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/them/gi) ||

                converstionStepsText.match(/good at/gi) || converstionStepsText.match(/specific/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/anything/gi) || converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/feature/gi) || converstionStepsText.match(/mobile/gi) ||
                converstionStepsText.match(/computer/gi)

            ) {
                await playScript("Why older people have problems in learning new things?");
                setSampleAns([`I think its about memory. I think people’s memory deteriorates with time and people start 
                                forgetting things. For example, sometimes when I am teaching my mother, she forgets the previous 
                                steps. However, when I repeat it once or twice, she picks it up. `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. So, What are things that young people can teach old people to do?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why older people have problems in learning new things?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why older people have problems in learning new things?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/problem/gi) || converstionStepsText.match(/learning/gi) ||
                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/memory/gi) || converstionStepsText.match(/deteriorate/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/affect/gi) ||
                converstionStepsText.match(/start/gi) || converstionStepsText.match(/forget/gi) ||
                converstionStepsText.match(/For example/gi) || converstionStepsText.match(/previous/gi) ||
                converstionStepsText.match(/However/gi) || converstionStepsText.match(/educational/gi) || converstionStepsText.match(/site/gi)

            ) {
                await playScript("Okey.  Do you think showing is a better way than telling during education?");

                setSampleAns([`Of course. Its easier to remember things we see. I am not sure why but I think our visual memory is 
                                        far better. Moreover, there can be misunderstandings when telling something as words can be 
                                        interpret differently.
                                        `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why older people have problems in learning new things?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think showing is a better way than telling during education?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you think showing is a better way than telling during education?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/show/gi) ||
                converstionStepsText.match(/better/gi) || converstionStepsText.match(/way/gi) ||

                converstionStepsText.match(/tell/gi) || converstionStepsText.match(/during/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/education/gi) || converstionStepsText.match(/example/gi) ||

                converstionStepsText.match(/Of course/gi) || converstionStepsText.match(/easier/gi) ||
                converstionStepsText.match(/remember/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/Moreover/gi) || converstionStepsText.match(/misunderstandings/gi) ||
                converstionStepsText.match(/something/gi) || converstionStepsText.match(/differently/gi)
            ) {
                await playScript("Okey. Do you think constant training is important for people to study something?");
                setSampleAns([`Yes, practice is the key to success. I remember I once watched a video which said that if a person
                                    spends about 1200 hours on something, he can become an expert at it. I couldn’t agree more. I 
                                    remember I taught my mother how to use Microsoft Word and now she knows about it more than 
                                    me because she uses it much more.
                                    `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think showing is a better way than telling during education?");
                converstionSteps--;
            }
            //question-6

        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think constant training is important for people to study something?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think constant training is important for people to study something?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/constant/gi) ||
                converstionStepsText.match(/training/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/study/gi) || converstionStepsText.match(/something/gi) ||

                converstionStepsText.match(/practice/gi) || converstionStepsText.match(/remember/gi) ||
                converstionStepsText.match(/affect/gi) || converstionStepsText.match(/person/gi) ||
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/expert/gi) ||
                converstionStepsText.match(/taught/gi) ||
                converstionStepsText.match(/Microsoft/gi) || converstionStepsText.match(/much/gi) ||
                converstionStepsText.match(/more/gi)
            ) {
                await playScript("So, How do you think learning from young people impacts the confidence of older people?");
                setSampleAns([`I think it boosts their confidence a lot. When older people learn new skills, especially from younger generations, it shows them that they can still adapt and grow. For example, when my mother learned to use social media, she was excited to stay connected with friends. It gave her a sense of accomplishment and independence, which made her more eager to learn other things too.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think constant training is important for people to study something?");
                converstionSteps--;
            }

            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you think learning from young people impacts the confidence of older people?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. How do you think learning from young people impacts the confidence of older people?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/accomplishment/gi) || converstionStepsText.match(/from/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/people/gi) ||

                converstionStepsText.match(/impact/gi) || converstionStepsText.match(/confidence/gi) ||
                converstionStepsText.match(/various/gi) || converstionStepsText.match(/boosts/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/especially/gi) ||
                converstionStepsText.match(/younger/gi) || converstionStepsText.match(/For example/gi) ||
                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/eager/gi) || converstionStepsText.match(/other/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . How do you think learning from young people impacts the confidence of older people?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}