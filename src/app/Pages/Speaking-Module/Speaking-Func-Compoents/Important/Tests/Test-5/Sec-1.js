
let converstionSteps = 0;
export async function Test5Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!userSpeakingTestNo) {
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

        if (!userSpeakingTestNo) {
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
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
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
                    await playScript("Okey. Let's Talk about watching movies. So, do you like to watch movies?");
                    setSampleAns(["Definitely, I love watching films, all genres of them. I try to absorb and enjoy as many different kinds of films as I can, whether it be the blockbuster Avengers: End Game, emotional rollercoaster-like Parasite, or visual effects such as The Lion King. Film is a medium that can transport you to radically different worlds and environments. That’s why I and so many others love it."]);
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
                    await playScript("I am repeating. Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. So, How is today's weather for you?");
                    setSampleAns([`It's really good, and I just love this weather since the morning.`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What do you do for fun? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What do you do for fun? ");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Let's Talk about watching movies. So, do you like to watch movies?");
                    setSampleAns(["Definitely, I love watching films, all genres of them. I try to absorb and enjoy as many different kinds of films as I can, whether it be the blockbuster Avengers: End Game, emotional rollercoaster-like Parasite, or visual effects such as The Lion King. Film is a medium that can transport you to radically different worlds and environments. That’s why I and so many others love it."])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like to watch movies? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like to watch movies? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/movie/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/film/gi) || converstionStepsText.match(/absorb/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/blockbuster/gi) ||
                converstionStepsText.match(/emotion/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/environment/gi) || converstionStepsText.match(/many/gi)
            ) {
                await playScript("Okey. Why do you like watching movies?");
                setSampleAns([` Here are some reasons why people like watching movies:
                Watching a film or TV series you've seen loads of times is comforting.,
                Some viewers find metaphors or symbols in films that help them grapple with major life ,challenges.,
                Movies are a form of entertainment and escape.,
                They can inspire you to be a better person.,
                They make you smarter,
                `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you like to watch movies?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do you like watching movies?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do you like watching movies? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/movie/gi) || converstionStepsText.match(/just/gi) ||
                converstionStepsText.match(/film/gi) || converstionStepsText.match(/load/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/comfort/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/environment/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/viewer/gi) || converstionStepsText.match(/metaphor/gi) ||
                converstionStepsText.match(/major/gi) || converstionStepsText.match(/entertainment/gi) ||
                converstionStepsText.match(/fun/gi) || converstionStepsText.match(/joy/gi) ||
                converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/process/gi) ||
                converstionStepsText.match(/appreciate/gi) || converstionStepsText.match(/social/gi)

            ) {
                await playScript("Okey. Do you prefer foreign films or Indian films?");
                setSampleAns([` Actually, I like both as both have their individual importance for me while watching them. For instance, by watching Hollywood films, I can learn English vocabulary and grammar skills while watching other online Bollywood movies make my mind calm and relax after exploring them.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why do you like watching movies?");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you prefer foreign films or Indian films?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you prefer foreign films or Indian films? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/movie/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/both/gi) || converstionStepsText.match(/prefer/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/foreign/gi) ||
                converstionStepsText.match(/film/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/indian/gi) || converstionStepsText.match(/Actually/gi) ||
                converstionStepsText.match(/individual/gi) || converstionStepsText.match(/instance/gi) ||
                converstionStepsText.match(/major/gi) || converstionStepsText.match(/entertainment/gi) ||
                converstionStepsText.match(/fun/gi) || converstionStepsText.match(/provide/gi) ||
                converstionStepsText.match(/Bollywood/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/adventure/gi) ||
                converstionStepsText.match(/appreciate/gi) || converstionStepsText.match(/social/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/knowledge/gi)
            ) {
                await playScript("Okey. What’s the best movie you’ve seen this year?");
                setSampleAns([`The best movie I've seen this year is "Everything Everywhere All at Once." It's a mind-bending, genre-blending film that combines elements of science fiction, action, and heartfelt drama. The story follows a woman who discovers she can access parallel universes and must use this power to save her family and the multiverse. The movie is visually stunning, incredibly imaginative, and emotionally powerful, making it a standout film of the year.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer foreign films or Indian films?");
                converstionSteps--;
            }

        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What’s the best movie you’ve seen this year?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What’s the best movie you’ve seen this year?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/best/gi) || converstionStepsText.match(/movie/gi) ||
                converstionStepsText.match(/seen/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/year/gi) ||
                converstionStepsText.match(/movie/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/recent/gi) || converstionStepsText.match(/this/gi) ||
                converstionStepsText.match(/Everywhere/gi) || converstionStepsText.match(/action/gi) ||
                converstionStepsText.match(/film/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/story/gi) || converstionStepsText.match(/discover/gi) ||
                converstionStepsText.match(/stun/gi) || converstionStepsText.match(/visually/gi)
            ) {
                await playScript("Okey. Do you like watching movie trailers before seeing the film?");
                setSampleAns([`Yes, I do enjoy watching movie trailers before seeing the film. Trailers give a sneak peek into the storyline, characters, and overall vibe of the movie, helping me decide if it's something I'd be interested in watching. They can build excitement and anticipation, making the movie experience even more enjoyable. However, I try to avoid trailers that reveal too much about the plot to keep some surprises for the actual viewing.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What’s the best movie you’ve seen this year?");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like watching movie trailers before seeing the film?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like watching movie trailers before seeing the film?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/movie/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/trailer/gi) ||
                converstionStepsText.match(/before/gi) || converstionStepsText.match(/seeing/gi) ||

                converstionStepsText.match(/enjoy/gi) || converstionStepsText.match(/story/gi) ||
                converstionStepsText.match(/overall/gi) || converstionStepsText.match(/decide/gi) ||
                converstionStepsText.match(/film/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/actual/gi) || converstionStepsText.match(/surprises/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like watching movie trailers before seeing the film?");
                converstionSteps--;
            }

        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}