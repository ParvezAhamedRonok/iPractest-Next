let converstionSteps = 0;
export async function Test10Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
        // if (converstionStepsText.length < 10) {
        //     await smallTalkError();
        // }

        // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
        //     await playScript(
        //         "Ok , I am repeating.");
        //     converstionSteps--;
        // }
        // if (converstionSteps == 0) {
        //     await playScript(
        //         "Welcome to the speaking section of the IELTS exam. My name is Adrian. And i will be your examiner for this part of the test. We're conducting. Can you tell me your full name please?"
        //     );
        // }
        if (!userSpeakingTestNo) {
            if (converstionSteps == 1) {
                await playScript("I'll start your exam now. What's your full name, please?");
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
                        setSampleAns([" You can call me Jone or say your sort name"]);
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns([" Hellow sir, My name is Mr.jone dow you can call me jone"]);
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where do you live?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Where do you live?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Okay. That's nice. Now let's talk about colors. Do you have a favorite color and if yes why do you like it ?");
                    setSampleAns([` uh yes my favorite color is blue I find it calming and soothing blue also reminds me of the Serene Waters of the brahmaputra river that flows through my hometown it has a peaceful and tranquil effect on me which allows me to relax and feel refreshed`, `2, Umm, generally i love/like all the colors but i say specifically i like yellow color, because that effect in my mind`])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                await playScript("Okay. Are you happy today?");
                setSampleAns(["Yes, sir i really happy today. Thanks for asking."])
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are You ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. S0,What sports do you like to play?");
                    setSampleAns([`Football,
                Basketball,
                Tennis,
                Swimming,
                Mixed Martial Arts`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What sports do you like to play?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What sports do you like to play?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. That's nice. Now let's talk about colors. Do you have a favorite color, and if yes, why?");
                    setSampleAns([` uh yes my favorite color is blue I find it calming and soothing blue also reminds me of the Serene Waters of the brahmaputra river that flows through my hometown it has a peaceful and tranquil effect on me which allows me to relax and feel refreshed`, `2, Umm, generally i love/like all the colors but i say specifically i like yellow color, because that effect in my mind`])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }



        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you have a favorite color, and if yes, why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.   Do you have a favorite color, and if yes, why?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/favorite /gi) ||
                converstionStepsText.match(/color /gi) || converstionStepsText.match(/colour/gi) ||
                converstionStepsText.match(/remind/gi) || converstionStepsText.match(/peaceful/gi) ||
                converstionStepsText.match(/effect/gi) || converstionStepsText.match(/refresh/gi) ||
                converstionStepsText.match(/certainly/gi) || converstionStepsText.match(/preference/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/impact/gi) || converstionStepsText.match(/like/gi)) {
                await playScript("Okay. Do you think colors can affect a person's mood? Why or why not?");
                setSampleAns([`  yes I do believe colors have a significant impact on a person's mood different colors
                evoke different emotions and can influence our psychological state for example warm colors like red and orange are often associated with energy and excitement while cool colors like cream
                and blue creates a sense of calmness and relaxation by using Color strategically we can enhance our mood and create a desired atmosphere.
                `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you have a favorite color, and if yes, why?");
                converstionSteps--;
            }




        } else if (converstionSteps == 5) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think colors can affect a person's mood? Why or why not?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think colors can affect a person's mood? Why or why not?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/color/gi) || converstionStepsText.match(/colour/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/belive/gi) ||
                converstionStepsText.match(/effect/gi) || converstionStepsText.match(/mood/gi) ||
                converstionStepsText.match(/person/gi) || converstionStepsText.match(/evoke/gi) ||
                converstionStepsText.match(/create/gi) || converstionStepsText.match(/enhance/gi) ||
                converstionStepsText.match(/behavior/gi) || converstionStepsText.match(/stress /gi) ||

                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/mind/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/includ/gi) ||
                converstionStepsText.match(/give/gi) || converstionStepsText.match(/depend/gi) ||
                converstionStepsText.match(/individual/gi)
            ) {
                await playScript("Okay. How do colors play a role in your everyday life?");
                setSampleAns([` colors do play a significant role in my everyday life from the moment I wake up and chose my clothing to the interior Decor of my living space her colors surround me and contribute towards my overall mood and well-being I often find myself gravitating towards the colors that reflect an Ambience that I desire for a particular day or an occasion I feel optimistic today so I'm wearing my favorite color of blue.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think colors can affect a person's mood? Why or why not?");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("How do colors play a role in your everyday life?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do colors play a role in your everyday life?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/color/gi) || converstionStepsText.match(/colour/gi) ||
                converstionStepsText.match(/play/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/Many/gi) || converstionStepsText.match(/some/gi) ||
                converstionStepsText.match(/role /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/life/gi) || converstionStepsText.match(/everyday/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/action/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/relieve/gi) ||
                converstionStepsText.match(/Influence/gi) || converstionStepsText.match(/reaction/gi) ||
                converstionStepsText.match(/perception/gi) || converstionStepsText.match(/Change/gi) ||
                converstionStepsText.match(/mood/gi) || converstionStepsText.match(/mind/gi) ||
                converstionStepsText.match(/senses/gi) || converstionStepsText.match(/important /gi) ||
                converstionStepsText.match(/importance/gi) || converstionStepsText.match(/worth /gi)
            ) {
                await playScript(
                    "Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?"
                );
                setSampleAns([` uh yes I have changed my opinion about the color yellow over time in my younger years I
                used to associate yellow with brightness and positivity but as I grew up I
                developed a preference for more calm and subtle colors. Yellow started to appear too vibrant and too energetic for my taste and I found myself gravitating towards more softer and muted tones and hence over the time I have changed my opinion about yellow as my personal preferences and style have evolved.
                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do colors play a role in your everyday life?");
                converstionSteps--;
            }




        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/color/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/made/gi) || converstionStepsText.match(/Where/gi) ||
                converstionStepsText.match(/changed /gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/opinion/gi) ||

                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/younger/gi) ||
                converstionStepsText.match(/personal/gi) || converstionStepsText.match(/preferences/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/language/gi) ||
                converstionStepsText.match(/conversion/gi)
            ) {
                await playScript(
                    "Okay. Do you think people's preferences for certain colors change with age? Why or why not?");
                setSampleAns([` uh I do think I do believe uh people's preference uh over certain colors change with time uh as people age and uh grow and they go through different stages of Life uh their personality tastes and environment can influence their color preferences for example children may be drawn towards more playful and bright colors while adults maybe adults might prefer more sophisticated and neutral tones additionally cultural and societal factors also play a role in shaping color preferences and hence it's not very uncommon for people to change their opinion about certain colors as they mature and undergo different lives Experiences.`]);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?");
                converstionSteps--;
            }


        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think people's preferences for certain colors change with age? Why or why not?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think people's preferences for certain colors change with age? Why or why not?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/color/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/Think/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/chance/gi) ||
                converstionStepsText.match(/preference/gi) || converstionStepsText.match(/age/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/toward/gi) || converstionStepsText.match(/learn/gi) ||

                converstionStepsText.match(/Apparently/gi) || converstionStepsText.match(/proof/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/mature/gi) ||
                converstionStepsText.match(/Adult/gi) || converstionStepsText.match(/child/gi) ||
                converstionStepsText.match(/kid/gi) || converstionStepsText.match(/preference/gi)
            ) {

                await playScript("Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
                setSampleAns([` one such example of effective color use in advertising would be the logo of Coca-Cola the logo features a vibrant red color red is often associated with energy excitement and stimulation the
                choice of red in the logo of Coca-Cola is strategic as it aims to evoke the feelings of enthusiasm and creates a strong brand identity another example would be the logo of Facebook which has a blue color scheme blue is often associated with trust reliability and communication the Facebook's choice of blue in their logo is reflects their commitment towards creating a safe and trustworthy platform for connecting and sharing.
                `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think people's preferences for certain colors change with age? Why or why not?");
                converstionSteps--;
            }




        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/advertisement/gi) || converstionStepsText.match(/logo/gi) ||
                converstionStepsText.match(/color/gi) || converstionStepsText.match(/colour/gi) ||
                converstionStepsText.match(/effective/gi) || converstionStepsText.match(/chosen/gi) ||
                converstionStepsText.match(/choice /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/example/gi) || converstionStepsText.match(/stimulation/gi) ||
                converstionStepsText.match(/create/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/associate/gi) || converstionStepsText.match(/trust/gi) ||
                converstionStepsText.match(/reliability /gi) || converstionStepsText.match(/communication /gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/sure/gi)


            ) {
                await playScript("Okay. Do you believe that colors convey emotion?");
                setSampleAns([` Anyone who has ever felt blue, seen red, blacked out, or turned green knows we're prone to make emotional associations with different shades" wrote Winifred Gallagher. I believe this to be true. The connection between colors and feelings is probably the most simple and profound. I would suggest it is even more powerful for young children without the words to convey their feelings.
                Scratching the surface
                Modern science has just started to scratch the surface of the enormous influence (i.e. consciously, unconsciously) color has upon our mental states, mood and emotions. Hemphill and Lange have concluded that colors do indeed impact our feelings. It's the start of the all-important fact gathering process. Interestingly enough, color has been used medicinally since as far back as the Ancient Egyptians and Chinese.
                It seems reasonable that color influences mood. Ask anyone how they feel watching a sunset, rainbow or snowstorm...it sets a mood. Commercially there is even such as thing as "mood lighting" to stimulate certain feelings via varying colors and wavelengths of light. My real question is: Can it work the other way around? Can children express their initial feeling states via color?
                `])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
                converstionSteps--;
            }


        } else if (converstionSteps == 10) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Okay. Do you believe that colors convey emotion?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Okay. Do you believe that colors convey emotion?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/color/gi) ||
                converstionStepsText.match(/colour/gi) || converstionStepsText.match(/convey/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                converstionStepsText.match(/emotion /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/think/gi) ||

                converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/not/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/sure/gi) ||
                converstionStepsText.match(/anger/gi) || converstionStepsText.match(/happy/gi)
            ) {
                await playScript("Imagine being in a room where everything is a certain color. How would you feel?");
                setSampleAns([`Do you feel anxious in a yellow room? Does the color blue make you feel calm and relaxed? Artists and interior designers have long believed that color can dramatically affect moods, feelings, and emotions. "Colors, like features, follow the changes of the emotions," the artist Pablo Picasso once remarked. 
                Color is a powerful communication tool and can be used to signal action, influence mood, and even influence physiological reactions. Certain colors have been associated with physiological changes, including increased blood pressure, increased metabolism, and eyestrain.
                This article discusses what color psychology means and how colors affect the mind and body. It also explores research on the effect of color and the psychological reactions people may experience.
                `])
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Okay. Do you believe that colors convey emotion?");
                converstionSteps--;
            }


        } else if (converstionSteps == 11) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Imagine being in a room where everything is a certain color. How would you feel?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Imagine being in a room where everything is a certain color. How would you feel?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/room/gi) || converstionStepsText.match(/color/gi) ||
                converstionStepsText.match(/colour/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/everything/gi) || converstionStepsText.match(/chance/gi) ||
                converstionStepsText.match(/feel/gi) ||

                converstionStepsText.match(/emotion/gi) ||
                converstionStepsText.match(/artist/gi) || converstionStepsText.match(/powerful/gi) ||
                converstionStepsText.match(/communication/gi) || converstionStepsText.match(/Certain/gi) ||
                converstionStepsText.match(/associated/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/psychological/gi) || converstionStepsText.match(/explores/gi)
            ) {
                await playScript("Okay. What colors do you associate with happiness, sadness, anger, etc.?");
                setSampleAns([`Here's a list of colours commonly used to identify several emotions: Red: Anger, embarrassment, passion, or lust. Blue: Shyness, sadness, or calmness. Yellow: Cowardice, happiness, or caution. Green: Disgust, envy, friendliness, or greed.`])
                conditionsDependsOnUserSpeech(9)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Imagine being in a room where everything is a certain color. How would you feel?");
                converstionSteps--;
            }


        } else if (converstionSteps == 12) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What colors do you associate with happiness, sadness, anger, etc.?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What colors do you associate with happiness, sadness, anger, etc.?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/associate/gi) || converstionStepsText.match(/color/gi) ||
                converstionStepsText.match(/colour/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                converstionStepsText.match(/belive /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Happy/gi) || converstionStepsText.match(/Anger/gi) ||
                converstionStepsText.match(/Sadness/gi) ||
                converstionStepsText.match(/character/gi) ||
                converstionStepsText.match(/identif/gi) || converstionStepsText.match(/mood /gi) ||
                converstionStepsText.match(/mind/gi) || converstionStepsText.match(/associate/gi) ||
                converstionStepsText.match(/character/gi) ||
                converstionStepsText.match(/red/gi) || converstionStepsText.match(/green/gi) ||
                converstionStepsText.match(/blue/gi) || converstionStepsText.match(/black/gi) ||
                converstionStepsText.match(/white/gi) ||
                converstionStepsText.match(/yellow/gi) || converstionStepsText.match(/orange/gi) ||
                converstionStepsText.match(/purple/gi) || converstionStepsText.match(/pink/gi)
            ) {
                await playScript("Okay. that was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(10)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What colors do you associate with happiness, sadness, anger, etc.?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}