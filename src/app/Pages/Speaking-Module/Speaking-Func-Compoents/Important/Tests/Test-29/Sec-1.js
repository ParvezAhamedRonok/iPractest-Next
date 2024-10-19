let converstionSteps = 0;

export async function Test29Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!localStorage.getItem("SpeakingTestNo")) {
            await playScript(
                "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
            );
            setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
        } else {
            await playScript("Are you ready to take the test then?");
            setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
        }

    }

    converstionSteps++;
    if (converstionStepsText != '') {

        if (!localStorage.getItem("SpeakingTestNo")) {
            if (converstionSteps == 1) {
                await playScript(
                    "I'll start your exam now. What's your full name, please?"
                );
                setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What's your full name, please?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    if (converstionStepsText.match("call")) {
                        await playScript(
                            "So, for this section. I'm going to ask some general questions. Where do you live?"
                        );
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in Bangladesh."])
                        localStorage.setItem("SpeakingTestNo", testNo);
                        conditionsDependsOnUserSpeech(0)
                    } else {
                        await playScript("Alright. What can I call you?");
                        setSampleAns(["You can call me Jone or you simply tell your nickname."])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where do you live? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Where do you live? ");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {

                    await playScript("Okey. Lets talk about Puzzles. Did you do puzzles in your childhood?");
                    setSampleAns(["Yes, I loved doing puzzles in my childhood. I used to solve a lot of jigsaw puzzles when I was young. "]);
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                await playScript("Okey. Are you happy today?");
                setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" Are you ready? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are you ready? ");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. So, Are you feeling well?");
                    setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("So, Are you feeling well?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. So, Are you feeling well?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about Puzzles. Did you do puzzles in your childhood?");
                    setSampleAns(["Yes, I loved doing puzzles in my childhood. I used to solve a lot of jigsaw puzzles when I was young. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Did you do puzzles in your childhood?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Did you do puzzles in your childhood?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/Puzzles/gi) || converstionStepsText.match(/childhood/gi) ||
                converstionStepsText.match(/was/gi) || converstionStepsText.match(/were/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/young/gi)
            ) {
                await playScript("Okey. When do you do puzzles, during your trip or when you feel bored?");
                setSampleAns([`I think nowadays I do puzzles when I am travelling or when my younger cousins are visiting 
                                    me. It is really fun to do puzzles with them.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Did you do puzzles in your childhood?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("When do you do puzzles, during your trip or when you feel bored?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. When do you do puzzles, during your trip or when you feel bored?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/puzzles/gi) ||
                converstionStepsText.match(/during/gi) || converstionStepsText.match(/trip/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/feel/gi) ||
                converstionStepsText.match(/bored/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/younger/gi) ||
                converstionStepsText.match(/therefore/gi) || converstionStepsText.match(/cousin/gi) ||
                converstionStepsText.match(/visit/gi)
            ) {
                await playScript("So, Do you like doing word puzzles or number puzzles? Which is more difficult for you?");
                setSampleAns([`I like doing both word puzzles like Crossword puzzles and games like worldle and number 
                                puzzles like Sudoku. However, my English is weaker than my Math and so the word puzzles 
                                are much more difficult for me. Also, there is a cultural element to word puzzles sometimes 
                                and that makes it difficult for me to solve them. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When do you do puzzles, during your trip or when you feel bored?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you like doing word puzzles or number puzzles? Which is more difficult for you?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like doing word puzzles or number puzzles? Which is more difficult for you?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/word/gi) ||
                converstionStepsText.match(/puzzle/gi) || converstionStepsText.match(/Which/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/both/gi) ||
                converstionStepsText.match(/Crossword/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/number/gi) || converstionStepsText.match(/solve/gi)
            ) {
                await playScript("Ok, Do you think it is good for old people to do puzzles? ");
                setSampleAns([`I think puzzles are one of the best ways to keep the mind sharp and active. So, I think it is a 
                                        great idea for old people to solve puzzles.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who do you want to sing for? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think it is good for old people to do puzzles? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think it is good for old people to do puzzles? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/puzzle/gi) || converstionStepsText.match(/way/gi) ||
                converstionStepsText.match(/sharp/gi) ||
                converstionStepsText.match(/active/gi) || converstionStepsText.match(/focus/gi) ||
                converstionStepsText.match(/idea/gi) ||
                converstionStepsText.match(/solve/gi)
            ) {
                await playScript("So, Do you prefer doing puzzles alone or with others?");
                setSampleAns([`I prefer doing puzzles with others, especially with family or friends. It's more fun and engaging when we solve them together, and it also helps us share ideas to complete the puzzle faster.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think it is good for old people to do puzzles? ");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you prefer doing puzzles alone or with others?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you prefer doing puzzles alone or with others?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/puzzles/gi) ||

                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/variety/gi) || converstionStepsText.match(/alone/gi) ||

                converstionStepsText.match(/family/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/engag/gi) || converstionStepsText.match(/solve/gi) ||
                converstionStepsText.match(/together/gi) || converstionStepsText.match(/complete/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer doing puzzles alone or with others?");
                converstionSteps--;
            }


        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}
