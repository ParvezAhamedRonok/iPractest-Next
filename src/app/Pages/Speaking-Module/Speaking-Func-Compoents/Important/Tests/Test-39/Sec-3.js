let converstionSteps = 0;


export async function Test39Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So, What are the benefits of learning a foreign language?");
                setSampleAns([`There are many benefits of learning a foreign language. Firstly, it helps students academically, as the 
                                    skills they learn in one language like comprehension and finding out the main theme of a paragraph 
                                    can also be applied to their language. Secondly, it opens up more opportunities in the future. For 
                                    example, it can help students pursue higher education in a foreign country. Similarly, a foreign 
                                    language can help people secure a job in a company, which deals with foreign clients.
                                    `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What are the benefits of learning a foreign language?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("What are the benefits of learning a foreign language?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/benefits/gi) || converstionStepsText.match(/learning/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/foreign/gi) ||
                converstionStepsText.match(/language/gi) || converstionStepsText.match(/student/gi) ||

                converstionStepsText.match(/career/gi) || converstionStepsText.match(/academically/gi) ||
                converstionStepsText.match(/education/gi) || converstionStepsText.match(/higher/gi) ||
                converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/job/gi)
            ) {
                await playScript("Okey, What are the benefits of being a foreign language teacher?");
                setSampleAns([`The main benefit of teaching another language is that the person can enhance their knowledge of 
                            the language. I think people learn much more about the language when they teach than when they 
                            study it.
                            Secondly, foreign languages also tend to get paid better and they might also get opportunities to 
                            travel abroad. Finally, I feel the language classes have the most diversity in terms of age. I have seen 
                            people as old as seventy learning French and German. So, it never gets boring teaching a foreign 
                            language as people get to meet different people.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the benefits of learning a foreign language?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What are the benefits of being a foreign language teacher?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are the benefits of being a foreign language teacher?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/benefit/gi) ||
                converstionStepsText.match(/being/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/foreign/gi) || converstionStepsText.match(/language/gi) ||

                converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/build/gi) ||
                converstionStepsText.match(/knowledge/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/opportunities/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/different/gi)

            ) {
                await playScript("Okey. Will computers replace foreign language teachers in the future?");
                setSampleAns([`I think computers are certainly beneficial in helping students learn a foreign language. However, I do 
                                    not think computers can replace language teachers completely. Computers can help students 
                                    improve their grammar and pronunciation but they cannot help students develop or express ideas. 
                                    Moreover, there are cultural aspects to a language, which can be only taught by a teacher in my 
                                    opinion.
                                    `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the benefits of being a foreign language teacher?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Will computers replace foreign language teachers in the future?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Will computers replace foreign language teachers in the future?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/computers/gi) || converstionStepsText.match(/replace/gi) ||
                converstionStepsText.match(/foreign/gi) || converstionStepsText.match(/language/gi) ||
                converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/future/gi) ||
                converstionStepsText.match(/beneficial/gi)
                || converstionStepsText.match(/complete/gi) ||
                converstionStepsText.match(/develop/gi) || converstionStepsText.match(/student/gi) ||
                converstionStepsText.match(/idea/gi)
            ) {
                await playScript("Okey.  Is grammar the most difficult part about learning a foreign language?");
                setSampleAns([`No, I don’t think grammar is the most difficult part as there are certain rules of grammar. I think it is 
                                logical and so it can be learnt with practice. However, pronunciation can be very tricky as I find there 
                                are no fixed rules to it. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Will computers replace foreign language teachers in the future?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Is grammar the most difficult part about learning a foreign language?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Is grammar the most difficult part about learning a foreign language?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/grammar/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/part/gi) ||
                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/foreign/gi) ||

                converstionStepsText.match(/language/gi) || converstionStepsText.match(/grammar/gi)
            ) {
                await playScript("So, Do you think grammar is important in language learning?");
                setSampleAns([`Yes, I think grammar is really important in language learning. If the grammar is wrong, the sentence 
                                can give out a completely different meaning and it can lead to misunderstandings and 
                                embarrassment.
                                For example, I taught, and I was taught mean completely different things, just the presence of was in 
                                the middle - changes the meaning completely.
                                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again.  Is grammar the most difficult part about learning a foreign language?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think grammar is important in language learning?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. Do you think grammar is important in language learning?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/grammar/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/language/gi) ||

                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/presence/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Do you think grammar is important in language learning?");
                converstionSteps--;
            }
        }
    }

    converstionStepsText = "";



}