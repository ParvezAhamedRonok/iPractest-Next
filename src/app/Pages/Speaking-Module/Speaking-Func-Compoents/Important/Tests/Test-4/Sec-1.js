
let converstionSteps = 0;
export async function Test4Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!userSpeakingTestNo) {
            await playScript(
                "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
            );
            setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
        } else {
            await playScript("Are you ready to take the test then?")
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
                    await playScript("I am Repeatin ,What's your full name, please?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    if (converstionStepsText.match("call")) {
                        await playScript("So, for this section. I'm going to ask some general questions. Where do you live?");
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                        localStorage.setItem("SpeakingTestNo", testNo);
                        conditionsDependsOnUserSpeech(0)
                    } else {
                        await playScript("Alright. What can I call you?");
                        setSampleAns([" You can simply say your name. As like I am Mr. Jone Dow. You can call me Jone"])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright. what's your name?");
                    setSampleAns([" Hello i am Jone dow. You can call me dow"]);
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where do you live? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Where do you live? ");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Okay. Let's talk about reading books. What is your favorite book of all time?");
                    setSampleAns([" This is a subjective question, and there is no one correct answer. People have different tastes in books, and their favorite book may change over time. Some people prefer recent bestsellers by popular authors, while others prefer classics or less well-known books. For example, one person's favorite book is the science-fiction classic The Mote in Gods Eye by Larry Niven and Jerry Pournelle1. Another person's favorite books include The Secret History by Donna Tartt, The Bell Jar by Sylvia Plath, For Whom the Bell Tolls by Ernest Hemingway, and The Gargoyle by Andrew Davidson"])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is your full name please? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. What is your full name please");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Are you happy today?");
                    setSampleAns(["Yes, I am felling well today", "Umm, yeah i am good.Just felling kind of nervous"])
                }
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you happy today? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Are you happy today?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. So, what do you do for fun?");
                    setSampleAns([" Reading, learning, documentaries, podcasts, etc.", "2, “Travel is my passion. I’ve been to 21 countries so far, and I’m not done yet! I love learning and adapting to new cultures, finding commonalities between people everywhere, and just trying a bunch of new foods. There’s a real magic to communication in that so much of it is nonverbal, and I’ve learned to pick up on body language and read the room, even if I can’t always read the menu.”"])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what do you do for fun? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. what do you do for fun?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Let's talk about reading books. What is your favorite book of all time?");
                    setSampleAns([" This is a subjective question, and there is no one correct answer. People have different tastes in books, and their favorite book may change over time. Some people prefer recent bestsellers by popular authors, while others prefer classics or less well-known books. For example, one person's favorite book is the science-fiction classic The Mote in Gods Eye by Larry Niven and Jerry Pournelle1. Another person's favorite books include The Secret History by Donna Tartt, The Bell Jar by Sylvia Plath, For Whom the Bell Tolls by Ernest Hemingway, and The Gargoyle by Andrew Davidson"])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is your favorite book of all time?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. What is your favorite book of all time?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/me/gi) || converstionStepsText.match(/my/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/favourite/gi) ||
                converstionStepsText.match(/book/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/difficult /gi) || converstionStepsText.match(/read/gi) ||
                converstionStepsText.match(/all/gi) || converstionStepsText.match(/are/gi) ||
                converstionStepsText.match(/for/gi)

            ) {
                await playScript("Okay. What is your favorite place to read?");
                setSampleAns([" Home is where the books are, right? There’s nothing better than getting into bed after a long day and snugging up with a boOkay. Pros: can be as comfy as you want with instant access to your own books. Cons: a roommate who needs to get up for an 8 a.m. class which forces you to read under the covers with a flashlight like you’re eight years old. So my search for the perfect place to read continues. I might be a bit cynical, but I have actually given up reading during class. (I’ve been told it looks suspicious to have a novel hidden in your accounting textbook"])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is your favorite book of all time?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is your favorite place to read?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. What is your favorite place to read?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/home/gi) || converstionStepsText.match(/room/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/special/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/place/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/spot /gi) ||
                converstionStepsText.match(/neighborhood/gi) || converstionStepsText.match(/garden/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/anywhere/gi) ||
                converstionStepsText.match(/every/gi) || converstionStepsText.match(/librar/gi)
            ) {
                await playScript("Alright. What makes you love to read  books?");
                setSampleAns([" Learning, gaining knowledge, and discovering information1", "2 , Escaping reality, becoming immersed in another world, and the enjoyment they get from using their imaginations"])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is your favorite place to read?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What makes you love to read  books?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,What makes you love to read  books?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/me/gi) ||
                converstionStepsText.match(/cost/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/Safety/gi) || converstionStepsText.match(/book/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/adventure/gi) ||
                converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/emotions/gi) ||
                converstionStepsText.match(/Imagination/gi) || converstionStepsText.match(/knowledgeable/gi) ||
                converstionStepsText.match(/Identity/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/reality/gi) || converstionStepsText.match(/Smell/gi) ||
                converstionStepsText.match(/Magic/gi) ||
                converstionStepsText.match(/teach/gi) || converstionStepsText.match(/feel/gi)
            ) {
                await playScript("Okay. Did anyone read to you when you were a kid?");
                setSampleAns([" Yes, My parents read me when i was kid.", "No, there has no one ot read me when i was kid"])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What makes you love to read  books?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Did anyone read to you when you were a kid?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,Did anyone read to you when you were a kid?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/could/gi) || converstionStepsText.match(/anyone/gi) ||
                converstionStepsText.match(/my/gi) || converstionStepsText.match(/mother/gi) ||
                converstionStepsText.match(/sister/gi) || converstionStepsText.match(/brother/gi) ||
                converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/father/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/kid/gi) ||
                converstionStepsText.match(/child/gi) ||
                converstionStepsText.match(/little/gi) || converstionStepsText.match(/grand/gi) ||
                converstionStepsText.match(/knew/gi) || converstionStepsText.match(/perhap/gi) ||
                converstionStepsText.match(/story/gi) || converstionStepsText.match(/comic/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/listen/gi) ||
                converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/few/gi) || converstionStepsText.match(/one/gi)
            ) {
                await playScript("Okay. Do you prefer reading physical books?");
                setSampleAns([" Yes, I will. Ten years ago, I would have answered otherwise, but as of today, I prefer e-books over traditional books. I have changed my mind because of three main reasons: availability, ecology, and content.", "2, Digital for sure. Physical books are a hassle - lighting, folding, the weight can also be an issue if the book is too large. It sounds superfluous, but I went from reading a book every few months to reading two books a month when I got my Kindle. It was a game changer for me.", "3, I prefer physical, but these days I buy digital. I had like 1000 books at one point and I was struggling to find space for them. When I find a book I own on a deep sale on digital, I buy it and give the physical version to a charity shop, so my collection is slowly thinning."])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Did anyone read to you when you were a kid?");
                converstionSteps--;
            }


        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you prefer reading physical books?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,Do you prefer reading physical books?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/physical/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/book/gi) ||
                converstionStepsText.match(/study/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/comfort/gi) || converstionStepsText.match(/respondent/gi) ||
                converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/want/gi) || converstionStepsText.match(/carry/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/person/gi) ||
                converstionStepsText.match(/better/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/bad/gi) || converstionStepsText.match(/positive/gi) ||
                converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/retain/gi) || converstionStepsText.match(/librarie/gi) ||
                converstionStepsText.match(/appreciate/gi) || converstionStepsText.match(/done/gi)

            ) {
                await playScript("Okay. Who is your favorite author?");
                setSampleAns([" For me, there are several writers I appreciate reading (it varies depending on my mood).Who is your favorite writer?C.S. Lewis is one of my favorite writers of all time.When I need my heart to be rejuvenated by simple themes of beauty and truth, I read John Eldredge.", "2, I read the Bible — often an epistle of Paul, the Gospel of John, or the Psalms. & they all are my favorite authors"])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer reading physical books?");
                converstionSteps--;
            }



        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Who is your favorite author?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,Who is your favorite author?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/author/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/my/gi) ||
                converstionStepsText.match(/he/gi) || converstionStepsText.match(/she/gi) ||
                converstionStepsText.match(/both/gi) || converstionStepsText.match(/prefer/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/they/gi) ||
                converstionStepsText.match(/recent/gi) || converstionStepsText.match(/day/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/all/gi) ||
                converstionStepsText.match(/book/gi)
            ) {
                await playScript("So, what living author would you love to meet?");
                setSampleAns([" I would like to meet with Stephen King: An American author, King is best known for his horror and supernatural fiction. He has published over 60 novels and has sold more than 350 million copies of his books worldwide. He has won numerous awards for his work, including the Bram Stoker Award, World Fantasy Award, and the National Medal of Arts3."])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who is your favorite author?");
                converstionSteps--;
            }

        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("what living author would you love to meet?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating , what living author would you love to meet?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/basically/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/want/gi) ||
                converstionStepsText.match(/living/gi) || converstionStepsText.match(/author/gi) ||
                converstionStepsText.match(/go/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/meet/gi) ||
                converstionStepsText.match(/he/gi) || converstionStepsText.match(/she/gi) ||
                converstionStepsText.match(/read/gi) ||
                converstionStepsText.match(/book/gi) || converstionStepsText.match(/specially/gi) ||
                converstionStepsText.match(/me/gi) || converstionStepsText.match(/really/gi) ||
                converstionStepsText.match(/chance/gi) || converstionStepsText.match(/could/gi) ||
                converstionStepsText.match(/curious/gi) || converstionStepsText.match(/alive/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/favourite/gi)
            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(8)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. what living author would you love to meet?");
                converstionSteps--;
            }
        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}