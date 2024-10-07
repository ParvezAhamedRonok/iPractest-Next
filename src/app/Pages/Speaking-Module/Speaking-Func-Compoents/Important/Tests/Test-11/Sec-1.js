let converstionSteps = 0;
export async function Test11Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What's your full name, please?");
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
                        setSampleAns([" You can simply say.You can call me Jone"])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns(["My name is Parvez Ahamed. You can call me Ronok"]);
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where do you live?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Where do you live?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Do you work or study?");
                    setSampleAns(["  I am currently pursuing studies and enrolled in The Bachelor degrees in mathematics.", "2, Currenty I working somwhere for my livlihood."])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                await playScript("Okay. Are you happy today?");
                setSampleAns([" Yes, sir i am happy to day.Thanks for asking."])
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Do you like music?");
                    setSampleAns([" Yes, sir i love music. When i get spair time i always listen musics"]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError("Do you like music?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you like music?");
                    converstionSteps--;
                }
                else {
                    await playScript("Do you work or study?");
                    setSampleAns(["  I am currently pursuing studies and enrolled in The Bachelor degrees in mathematics.", "2, Currenty I working somwhere for my livlihood."])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }



        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you work or study?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you work or study?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/work/gi) || converstionStepsText.match(/study/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/working/gi) || converstionStepsText.match(/studying/gi) ||
                converstionStepsText.match(/currently  /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/studies /gi) || converstionStepsText.match(/pursuing/gi)) {
                await playScript("Okay. Let's talk about spending time in nature. Do you enjoy spending time in nature? Why or why not?");
                setSampleAns([` enjoy spending time in nature why why not yes I enjoy spending time in nature in Ranchi with its picturesque landscape and Syrian surrounding helps me to unwind and stay away from`, `2, the bustling of the city life nature helps me to reconnect with myself and find inner peace
                Spending time in nature can help relieve stress and anxiety, improve your mood, and boost feelings of happiness and wellbeing123. Humans evolved in the great outdoors, and your brain benefits from a journey back to nature1. Time spent outside can reduce stress, anxiety, and depression, and the calming nature sounds and even outdoor silence can lower blood pressure and levels of the stress hormone cortisol, which calms the body's fight-or-flight response`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you work or study?");
                converstionSteps--;
            }

        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you enjoy spending time in nature? Why or why not?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you enjoy spending time in nature? Why or why not?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/enjoy/gi) ||
                converstionStepsText.match(/nature /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/landscape /gi) || converstionStepsText.match(/chance/gi) ||
                converstionStepsText.match(/outdoor/gi) || converstionStepsText.match(/calm/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/relieve/gi)
            ) {
                await playScript("Okay. What are some activities you like to do when you are in nature?");
                setSampleAns([` when I am in nature I like to 
                go for exploring the beautiful Scenic landscape of of Ranchi capturing the breathtaking um of waterfall of him through photography
               `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you enjoy spending time in nature? Why or why not?");
                converstionSteps--;
            }

        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What are some activities you like to do when you are in nature?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are some activities you like to do when you are in nature?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/activitie/gi) || converstionStepsText.match(/nature/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/want/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/Want /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/explor/gi) || converstionStepsText.match(/photography/gi) ||
                converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/Collect/gi) || converstionStepsText.match(/butterflie/gi) ||
                converstionStepsText.match(/Paint/gi) || converstionStepsText.match(/decorate/gi) ||
                converstionStepsText.match(/tree/gi)
            ) {
                await playScript(" How often do you have the opportunity to spend time in nature?");
                setSampleAns([`  being in Ranchi I am very enough to start I make sure that I spend time in weekends on weekends or um or during holidays to venture into Lush Green Hills of Ranchi and its landscape around the city I spend few hours of the week in nature to reconnect with myself`, `2, According to a survey, over half of American adults report spending 5 hours or fewer outside in nature each week1. Here are some suggestions for spending time in nature2:
                1 30 minute walk or run 6 days a week.,
                2 45 minute walk or run 4 - 6 days a week.,
                3 60 minute walk or run 3 - 5 days a week.,
                4 Two-hour walk or hike twice a week.,
                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are some activities you like to do when you are in nature?");
                converstionSteps--;
            }

        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How often do you have the opportunity to spend time in nature?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  How often do you have the opportunity to spend time in nature?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/opportunity/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/explor/gi) || converstionStepsText.match(/photography/gi) ||
                converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/Collect/gi) || converstionStepsText.match(/butterflie/gi) ||
                converstionStepsText.match(/Paint/gi) || converstionStepsText.match(/decorate/gi) ||
                converstionStepsText.match(/tree/gi) ||
                converstionStepsText.match(/nature/gi) || converstionStepsText.match(/some/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/spend/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/not/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/minute/gi) ||
                converstionStepsText.match(/hour/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/enough /gi) ||
                converstionStepsText.match(/venture/gi) || converstionStepsText.match(/landscape/gi) ||
                converstionStepsText.match(/connect /gi)

            ) {
                await playScript("Do you prefer spending time in nature alone? Or with others, why while?");
                setSampleAns([`  I enjoy the Solitude in nature for introspection and self-reflection. I also enjoy the company of my close friend exploring the beauty of Ranchi. With a companion, help me to share memories and reconnect with the person.
                laughter and cherish lifelong memories which we look back on with fondness. Last weekend I went for a hike with my friend Puneet and we had a lot of fun.
                `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How often do you have the opportunity to spend time in nature?");
                converstionSteps--;
            }



        } else if (converstionSteps == 8) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you prefer spending time in nature alone? Or with others, why while?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you prefer spending time in nature alone? Or with others, why while?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/alone/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/nature/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/prefer/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/enough /gi) || converstionStepsText.match(/connect /gi) ||
                converstionStepsText.match(/venture/gi) || converstionStepsText.match(/landscape/gi) ||
                converstionStepsText.match(/self/gi) || converstionStepsText.match(/companion/gi) ||
                converstionStepsText.match(/laught/gi) || converstionStepsText.match(/memorie/gi) ||
                converstionStepsText.match(/weeken/gi) || converstionStepsText.match(/fun/gi) ||
                converstionStepsText.match(/everyday/gi) || converstionStepsText.match(/calm/gi) ||
                converstionStepsText.match(/similar /gi) || converstionStepsText.match(/particularly/gi) ||
                converstionStepsText.match(/through/gi) || converstionStepsText.match(/research/gi)

            ) {
                await playScript("Have you ever had any memorable experiences? Or adventures while spending time in nature?");
                setSampleAns([`  memorable experiences spending spending time in nature I would like to tell you about my experience when I was trekking in the top on the top of the pahari Monday where I witness a mesmerizing Sunset painting the sky with its vibrant colors
                it filled my heart with joy and tranquility.
                `, `2, How often do you spend time in nature? How closely do you observe your surroundings? Has the pandemic changed your relationship with the natural world in any way? If so, how?
                In honor of Earth Day, we invite you to ponder these questions and tell us, too, about the coolest and most memorable things you’ve ever seen or experienced outside — whether on a camping trip in a remote place or in your own backyard.
                `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you prefer spending time in nature alone? Or with others, why while?");
                converstionSteps--;
            }



        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Have you ever had any memorable experiences? Or adventures while spending time in nature?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Have you ever had any memorable experiences? Or adventures while spending time in nature?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/memorable/gi) || converstionStepsText.match(/nature/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/self/gi) || converstionStepsText.match(/Adventure/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/memorie/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/fun/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/calm/gi) ||
                converstionStepsText.match(/similar /gi) || converstionStepsText.match(/particularly/gi) ||
                converstionStepsText.match(/through/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/Sunset/gi) ||
                converstionStepsText.match(/color/gi) || converstionStepsText.match(/heart/gi) ||
                converstionStepsText.match(/tranquility /gi)
            ) {
                await playScript("Okay. Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
                setSampleAns([`  yes uh staying in Ranchi there are obstacles of rainy season due to rain there are few um sites in Ranchi which become inaccessible due to Slippery conditions not because of the work I get very less time to spend in nature. Additionally, time constraints and work pressure don't allow me to spend a lot of time in Nature.
                `])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever had any memorable experiences? Or adventures while spending time in nature?");
                converstionSteps--;
            }


        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
                converstionSteps--;
            }
            else if (

                converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/nature/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/self/gi) || converstionStepsText.match(/Adventure/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/memorie/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/trying/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/obstacle/gi) ||
                converstionStepsText.match(/face/gi) || converstionStepsText.match(/particularly/gi) ||
                converstionStepsText.match(/through/gi) || converstionStepsText.match(/become/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/condition/gi) ||
                converstionStepsText.match(/color/gi) || converstionStepsText.match(/heart/gi) ||
                converstionStepsText.match(/Additionally/gi) ||
                converstionStepsText.match(/pressure /gi) || converstionStepsText.match(/Disadvantage/gi) ||
                converstionStepsText.match(/Apart/gi) || converstionStepsText.match(/trip/gi) ||
                converstionStepsText.match(/problem/gi) || converstionStepsText.match(/comfortable/gi) ||
                converstionStepsText.match(/reserve/gi) || converstionStepsText.match(/quite/gi) ||
                converstionStepsText.match(/reserve/gi)


            ) {
                await playScript("What can we do to combat deforestation?");
                setSampleAns([` Some ways to combat deforestation are:
                Plant more trees in your community or through global organizations,
                Use less paper and go paperless at home and in the office,
                Recycle paper and cardboard and buy recycled products,
                Buy only sustainable wood products and avoid products containing palm oil,
                Reduce meat consumption and food waste,
                `])
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
                converstionSteps--;
            }

        } else if (converstionSteps == 11) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" What can we do to combat deforestation?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What can we do to combat deforestation?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/combat/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/self/gi) || converstionStepsText.match(/belive/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/deforestation/gi) || converstionStepsText.match(/obstacle/gi) ||
                converstionStepsText.match(/face/gi) || converstionStepsText.match(/particularly/gi) ||
                converstionStepsText.match(/through/gi) || converstionStepsText.match(/Plant/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/condition/gi) ||
                converstionStepsText.match(/tree/gi) || converstionStepsText.match(/organization/gi) ||
                converstionStepsText.match(/paper/gi) ||
                converstionStepsText.match(/Recycle/gi) || converstionStepsText.match(/contain/gi) ||
                converstionStepsText.match(/approach/gi) || converstionStepsText.match(/grocery/gi) ||
                converstionStepsText.match(/vegetable/gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/Donat/gi) || converstionStepsText.match(/might/gi)
            ) {
                await playScript("Okay. Why do we need to stop deforestation?");
                setSampleAns([` Stopping deforestation is vitally important for many reasons12. Some of these reasons are:
                Protecting millions of animal and plant species from extinction1.,
                Reducing global warming and climate change by preventing the release of massive amounts of carbon dioxide into the atmosphere.,
                Preventing floods and soil erosion by maintaining the natural water cycle and soil quality.,`])
                conditionsDependsOnUserSpeech(9)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What can we do to combat deforestation? ");
                converstionSteps--;
            }



        } else if (converstionSteps == 12) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why do we need to stop deforestation?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Why do we need to stop deforestation?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/deforestation/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/belive/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/stop/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/face/gi) || converstionStepsText.match(/particularly/gi) ||
                converstionStepsText.match(/through/gi) || converstionStepsText.match(/Plant/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/condition/gi) ||
                converstionStepsText.match(/tree/gi) || converstionStepsText.match(/prevent/gi) ||
                converstionStepsText.match(/release/gi) ||
                converstionStepsText.match(/Recycle/gi) || converstionStepsText.match(/atmosphere/gi) ||
                converstionStepsText.match(/maintain/gi) || converstionStepsText.match(/Restor/gi) ||
                converstionStepsText.match(/livelihood/gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/Donat/gi) || converstionStepsText.match(/might/gi) ||
                converstionStepsText.match(/ecosystem/gi) || converstionStepsText.match(/climate/gi) ||
                converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/gase/gi) || converstionStepsText.match(/activitie/gi) ||
                converstionStepsText.match(/effort/gi) || converstionStepsText.match(/forest/gi) ||
                converstionStepsText.match(/emission/gi) || converstionStepsText.match(/leader/gi)

            ) {
                await playScript("Okay. that was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(10)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry,the reply is irrelevant. I am repeating.  Why do we need to stop deforestation?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}