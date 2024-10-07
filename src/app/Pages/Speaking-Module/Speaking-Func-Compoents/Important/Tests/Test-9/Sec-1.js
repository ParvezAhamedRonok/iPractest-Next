let converstionSteps = 0;
export async function Test9Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
        //         "Welcome to the speaking section 1 of the IELTS exam. My name is Adrian & I will be your examiner. Are you comfortable?"
        //     );
        // }
        if (!userSpeakingTestNo) {
            if (converstionSteps == 1) {
                await playScript(
                    "I'll start your exam now. What's your full name, please?"
                );
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  What's your full name, please?");
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
                        setSampleAns(["You can say, You can call me jone or here you can use your name simply"])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns(["Hellow i am Mr. Jone dow. You can call me jone"]);
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where do you live?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Where do you live?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Okay. What do you do at the weekends?");
                    setSampleAns([` Catch up on sleep (have a ‘lie in,’ which means staying in bed for longer)
                    Spend time with your kids
                    Meet up with friends
                    Relax at home watching TV, playing games, reading books
                    Do household chores
                    Run errands
                    Go grocery shopping
                    Do a hobby
                    Exercise 
                    Attend English classes
                    Work
                    Do overtime work
                    Do your homework
                    Go on trips 
                    Anything else that you do at the weekend
                   `, `2, Usually, on Saturdays I study as I'm planning to pursue my PhD in computer Management in the US. On Sundays I generally hang out with my friends. Last Sunday we went to the stadium hosting a cricket game between Bengaluru and Mumbai which was interesting.`])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                await playScript("Okay. Are you happy today?");
                setSampleAns(["Yes , i am happy today thanks for asking", "2, You can share your felling that your are feel"]);
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. So, what do you do for a living?");
                    setSampleAns([" No matter who asks you the question, they likely don’t want to hear statistics. Keep informative details of your job out of the conversation. Instead, focus on what’s interesting and keep your answer short and sweet. In other words, only describe what’s important on the surface (your resume can describe the details if needed).[3]"])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what do you do for a living?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,what do you do for a living?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. What do you do at the weekends?");
                    setSampleAns([` Catch up on sleep (have a ‘lie in,’ which means staying in bed for longer)
                Spend time with your kids
                Meet up with friends
                Relax at home watching TV, playing games, reading books
                Do household chores
                Run errands
                Go grocery shopping
                Do a hobby
                Exercise 
                Attend English classes
                Work
                Do overtime work
                Do your homework
                Go on trips 
                Anything else that you do at the weekend
               `, `2, Usually, on Saturdays I study as I'm planning to pursue my PhD in computer Management in the US. On Sundays I generally hang out with my friends. Last Sunday we went to the stadium hosting a cricket game between Bengaluru and Mumbai which was interesting.`])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What  do you do at the weekends?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What  do you do at the weekends?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/Spend/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/friends/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/watching/gi) || converstionStepsText.match(/play/gi) ||
                converstionStepsText.match(/games/gi) || converstionStepsText.match(/weekend/gi) ||
                converstionStepsText.match(/game/gi) || converstionStepsText.match(/shop/gi) ||
                converstionStepsText.match(/hobby/gi) || converstionStepsText.match(/exercise/gi) ||
                converstionStepsText.match(/class/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/trip/gi) || converstionStepsText.match(/travel/gi) ||
                converstionStepsText.match("do") || converstionStepsText.match(/like/gi) || converstionStepsText.match(/go/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/read/gi) ||
                converstionStepsText.match(/generally /gi) || converstionStepsText.match(/Meet  /gi) ||
                converstionStepsText.match(/Run/gi) || converstionStepsText.match(/Anything/gi)
            ) {
                await playScript("Okay. Let's talk about art. Do you like to draw or paint?");
                setSampleAns([`  Not really. I mean it is not one of my hobbies. Last time I
                    painted in Middle School was for an art  project and I sketched  my grandparents house which 
                    `, "2, - I have a lifelong passion for art since I was a child. Besides the conventional art classes in school, I also joined a drawing class in “The Childrens’ House” where my teachers ", "3, Yes, i like drawing & painting"])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. I am repeating. What  do you do at the weekends?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you like to draw or paint?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Do you like to draw or paint?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/like/gi) || converstionStepsText.match(/draw/gi) |
                converstionStepsText.match(/paint/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/draw/gi) || converstionStepsText.match(/about/gi) ||
                converstionStepsText.match(/join/gi) || converstionStepsText.match(/participate/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/not really/gi)) {
                await playScript("Okay. Did you study art in school, and did you like it?");
                setSampleAns([" : Yes, I did some beginner-level classes in my early schooling or maybe between grades one or two and six or seven but not after that uh I felt that I'm not that talented in art so I did not pursue it when I got an option to choose mystudies and my hobbies.", "2, Yes, I’ve always loved art. My parents used to take me to art galleries in the city center. And even when I was young, I remember that I was very moved by some of the amazing paintings I saw.", "3,  Yes, I do. I’m no good at art myself, but I do love looking at beautiful paintings. I really like Van Gogh’s paintings, like that famous painting Sunflowers, I think it’s called. It’s so cheerful and vivid and lively."])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you like to draw or paint?");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Did you study art in school, and did you like it?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Did you study art in school, and did you like it?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/study/gi) ||
                converstionStepsText.match(/art/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/beginner/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/paint/gi) ||
                converstionStepsText.match(/yet/gi) || converstionStepsText.match(/parents/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/art/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/use/gi) ||
                converstionStepsText.match(/To be honest/gi) || converstionStepsText.match(/don’t/gi) ||
                converstionStepsText.match(/but/gi) || converstionStepsText.match(/school/gi)

            ) {
                await playScript("Do you have any art in your home and can you tell me about it?");
                setSampleAns([" Yes, we have Painting ,Architecture,Music ,Theater,Cinema,,Visual Art,Plastic Art,Natural beauty art,Painting, colors, Abstract Art Forms,Pop ,Cubism,Contemporary ,Stained ,Aboriginal ,Japanese ,Impressionism,Surrealism,Fantasy ,Graffiti ,Calligraphy,Mosaic,Sculpture ,", "2,  yes we do uh we have a couple of pictures of uh sceneries a real nice picture of the Himalayas and most interesting we have an awesome looking elephant statue in my room"])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Did you study art in school, and did you like it?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you have any art in your home and can you tell me about it?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Do you have any art in your home and can you tell me about it?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/art/gi) || converstionStepsText.match(/my home/gi) ||
                converstionStepsText.match(/at/gi) || converstionStepsText.match(/in/gi) ||
                converstionStepsText.match(/house/gi) || converstionStepsText.match(/do/gi) || converstionStepsText.match(/picture/gi) ||
                converstionStepsText.match(/have /gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not really/gi) || converstionStepsText.match(/don’t/gi)

            ) {
                await playScript("Okay. what is your favorite type of art and why?");
                setSampleAns([" yes that's tricky to answer because I do consider music and movies as art forms too and there's a lot of shows and music that I like if I were to pick one I would say the movies because it actually gets out the visual as well as the audio Talent um I would say my favorite movie is uh gangs of wasseypur it is an action-packed movie with a real great story .", "2, Almost everyone is drawn to music in some form or another. And many of us aspire to become musicians or singers, creating our own music for others to enjoy. Even if you’re not a musician, you can appreciate music as an art form. Music organizes sounds into a composition that is attractive to the ear. But as with any other type of art, there are endless types of music. You can probably think of everything from classical music to pop, rock, and more.There’s evidence that we’ve been creating music as far back as history. Basic instruments date back thousands of years. And you can find some form of singing in almost every culture around the world.", "3, Music is a unique art form. It is a lyrical and auditory representation of the story. Through patterned constructions of words, rhythm, and instrumental collaboration, music provides listeners with insight to personal experiences and even in-depth interpretations of the world around us."])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you have any art in your home and can you tell me about it?")
                converstionSteps--;
            }

        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What is your favorite type of art and why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,   What is your favorite type of art and why?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/art/gi) ||
                converstionStepsText.match(/tricky /gi) || converstionStepsText.match(/don’t/gi) ||
                converstionStepsText.match(/type/gi) || converstionStepsText.match(/forms/gi) ||
                converstionStepsText.match(/would  /gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/music/gi) || converstionStepsText.match(/movie/gi) ||
                converstionStepsText.match(/painting/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/basecally/gi)

            ) {
                await playScript("Okay. Have you ever been to an art show?");
                setSampleAns([" oh yes uh we'd been to this Art Exhibit at the government Museum it was related to native art and I went there with my friend who was really interested in it.", `2, Yes, I have. I remember going to an art gallery on a school trip when I was quite young. I think it was classical art. I remember there were lots of colorful oil paintings of kings and battles.`, "3, No, to be honest, I’ve never been to an art gallery. The only kind of artwork I enjoy is the drawings in comic books and simple cartoons. But I’m not sure there are any galleries for that kind of art."])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is your favorite type of art and why?");
                converstionSteps--;
            }

        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Have you ever been to an art show?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,   Have you ever been to an art show?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/been/gi) || converstionStepsText.match(/no/gi) || converstionStepsText.match(/art/gi) ||
                converstionStepsText.match(/show/gi) || converstionStepsText.match(/painting/gi) ||

                converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/parent/gi) ||
                converstionStepsText.match(/went/gi) || converstionStepsText.match(/gallery/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/visit/gi) ||
                converstionStepsText.match(/interested/gi)


            ) {
                await playScript("If you could make any artwork what would you make?");
                setSampleAns([" interesting question uh if given a chance I would direct my own movie uh something like The Gangs of wasseypur uh it would be a action-packed movie with a provoking philosophy at the end stating that two wrongs do not do a right it would be fun.", "2, As a non-artist, I am not skillful enough to paint those complicated and colorful subjects, such as landscapes (mountains and trees), portraits, animals, and so on.Even so, I still want to create some pieces because of love. I may want to paint some geometric patterns with my favorite colors. Every pattern and every color will be given a special meaning. For example, a black rectangle, which I think can show my feeling of loneliness at midnight.If I have to show what my work looks like, it's probably like Kazimir Malevich's artworks. But I can't be that good."])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever been to an art show?")
                converstionSteps--;
            }



        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" If you could make any artwork what would you make?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,   If you could make any artwork what would you make?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/if/gi) || converstionStepsText.match(/possible/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/could/gi) ||
                converstionStepsText.match(/art/gi) || converstionStepsText.match(/piece/gi) ||
                converstionStepsText.match(/i/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/gallery/gi) || converstionStepsText.match(/color/gi) ||
                converstionStepsText.match(/paint/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/interesting/gi) || converstionStepsText.match(/chance /gi) ||
                converstionStepsText.match(/given/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/favorite /gi)
            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(8)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  If you could make any artwork what would you make?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}