let converstionSteps = 0;
export async function Test16Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            " My name is Adrine. I will be your examiner for this part of the test Part three. Are you comfortable?"
        );
        setSampleAns([" Yes, I am comfortable. You can procced now please"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {
        // if (converstionStepsText.length < 10) {
        //     await smallTalkError();
        // }
        // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
        //     await playScript(
        //         "Ok , I am repeating.");
        //     converstionSteps--;
        // }
        // if (converstionSteps == 0) {
        //     await playScript(

        //         " My name is Adrine. I will be your examiner for this part of the test Part three. Are you confortable?"
        //     );
        // }
        if (converstionSteps == 1) {
            await playScript(
                "Sorry.. Can you repeat that please"
            );
            setSampleAns([" You can simply repeated your previous ans that you have already given"]);
        } else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Are you comfortable?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Are you comfortable?");
                converstionSteps--;
            }
            else {
                await playScript("Now, let's talk about advertisements generally. Why do companies advertise?");
                setSampleAns(["Increase the number of people who buy their productPersuade customers that their product is high-quality, useful or desirable Generate leads, make sales, increase profits and grow the business Display the unique selling points of their products and services Establish a brand positioning in the minds of their target consumers while associating their brand with an idea or category that they want their consumers to remember them as"]);
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why do companies advertise?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Why do companies advertise?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/advertise/gi) || converstionStepsText.match(/brand/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/service/gi) ||
                converstionStepsText.match(/collaborative /gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/product/gi) || converstionStepsText.match(/photo/gi) ||
                converstionStepsText.match(/companies/gi) || converstionStepsText.match(/Because/gi) ||
                converstionStepsText.match(/attention/gi) || converstionStepsText.match(/powerful/gi) ||
                converstionStepsText.match(/customer/gi) || converstionStepsText.match(/persuade/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/multiple/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/sale/gi)
            ) {
                await playScript("Is advertising becoming too commonplace?");
                setSampleAns([
                    "Yes, Advertising has become an integral part of our daily lives, and it is hard to imagine a world without it. It is ubiquitous and has infiltrated every aspect of our lives, from the shows we watch to the music we listen to, and even the magazines we read 1. However, the question of whether advertising has become too commonplace is subjective and open to interpretation. Some people may argue that advertising has become too pervasive and intrusive, while others may argue that it is a necessary part of our economy and society."
                    , "2, It is important to note that advertising has a significant impact on our culture and society. It shapes our perceptions of beauty, success, and happiness, and influences our purchasing decisions 1. However, it is up to us as consumers to be aware of the messages that advertisers are trying to convey and to make informed decisions about the products and services we choose to buy.",
                    "3, In conclusion, advertising has become an integral part of our daily lives, and while some may argue that it has become too commonplace, it is ultimately up to us as consumers to be aware of the messages that advertisers are trying to convey and to make informed decisions about the products and services we choose to buy."
                ])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Why do companies advertise?");
                converstionSteps--;
            }




        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is advertising becoming too commonplace?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Is advertising becoming too commonplace?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                converstionStepsText.match(/may/gi) || converstionStepsText.match(/becoming/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/advertis/gi) || converstionStepsText.match(/brand/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/service/gi) ||
                converstionStepsText.match(/commonplace/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/product/gi) || converstionStepsText.match(/might /gi) ||
                converstionStepsText.match(/companies/gi) || converstionStepsText.match(/Because/gi) ||
                converstionStepsText.match(/attention/gi) || converstionStepsText.match(/powerful/gi) ||
                converstionStepsText.match(/customer/gi) || converstionStepsText.match(/placement/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/multiple/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/sale/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/point/gi) ||
                converstionStepsText.match(/agree /gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/awareness/gi)
            ) {
                await playScript("Should advertising be regulated?");
                setSampleAns([" I think yes, Advertising should be regulated to prevent the spread of false advertisements about products and to establish laws to regulate advertising and not to lie about it1. Positive experiences in some countries and among international organizations prove that advertising can be regulated for the benefit of everyone involved2. Advertising regulation is complex and happens on many levels in nearly all countries2."])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Is advertising becoming too commonplace?");
                converstionSteps--;
            }




        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Should advertising be regulated?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Should advertising be regulated?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                converstionStepsText.match(/may/gi) || converstionStepsText.match(/becoming/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/advertis/gi) || converstionStepsText.match(/brand/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/regulate/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/Should/gi) ||
                converstionStepsText.match(/economy/gi) || converstionStepsText.match(/might /gi) ||
                converstionStepsText.match(/companies/gi) || converstionStepsText.match(/Because/gi) ||
                converstionStepsText.match(/spending/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/way/gi) || converstionStepsText.match(/placement/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/enterprise/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/across/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/point/gi) ||
                converstionStepsText.match(/agree /gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/awareness/gi) ||
                converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi) ||
                converstionStepsText.match(/ensure/gi) || converstionStepsText.match(/truthful/gi)
            ) {
                await playScript("Alright, is celebrity endorsement a good or a bad thing?");
                setSampleAns([" I think i can be good. Celebrity endorsement can be effectively used as a promotional strategy12. It can help reach new audiences, increase brand awareness, generate excitement, and improve brand recognition2. However, there are risks associated with using celebrities for endorsements. These include: *Images change. Celebrities make mistakes. And when they do, they can affect the brands they endorse.*Celebrities become overexposed. When a celebrity works with so many companies, the celebrity’s credibility may suffer.*Celebrities can overshadow brands. Consumers may focus on the celebrity, not the product3."])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Should advertising be regulated?");
                converstionSteps--;
            }




        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is celebrity endorsement a good or a bad thing?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Is celebrity endorsement a good or a bad thing?");
                converstionSteps--;
            }
            else if (

                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                converstionStepsText.match(/may/gi) || converstionStepsText.match(/becoming/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/celebrity/gi) || converstionStepsText.match(/endorsement/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/bad/gi) || converstionStepsText.match(/Should/gi) ||
                converstionStepsText.match(/economy/gi) || converstionStepsText.match(/might/gi) ||
                converstionStepsText.match(/company/gi) || converstionStepsText.match(/Because/gi) ||
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/way/gi) || converstionStepsText.match(/Celebrity/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/enterprise/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/across/gi) ||
                converstionStepsText.match(/awareness/gi) ||
                converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/agree /gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi)

            ) {
                await playScript("Have you ever found yourself buying something? Because a celebrity promoted it.");
                setSampleAns([" No, but I think Twilight was guilty of subliminal messaging. I heard about it by chance when looking up something else on Wikipedia (I get sidetracked very easily), and then kept hearing references to it everywhere for about 3 weeks, before buying the books. I actually liked it, surprisingly. Plus, this was all long before the film came out so it wasn't even movie promotion.", "2, Only One time. I was a kid. I saw a commercial on tv for a thing called POX or something of the sort. They were like these little devices that had creatures that you would fight with other people who had the device. The commercial made them look awesome with a 3D battle and all. When I actually got it, it was like a 2d little piece of trash that reminded me of the earliest tomagachi things."])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is celebrity endorsement a good or a bad thing?");
                converstionSteps--;
            }




        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Have you ever found yourself buying something. Because a celebrity promoted it.");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Have you ever found yourself buying something. Because a celebrity promoted it.");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/found/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/find/gi) || converstionStepsText.match(/celebrity/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/buy/gi) || converstionStepsText.match(/Promote/gi) ||
                converstionStepsText.match(/economy/gi) || converstionStepsText.match(/might/gi) ||
                converstionStepsText.match(/something/gi) || converstionStepsText.match(/Because/gi) ||
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/to be/gi) || converstionStepsText.match(/Celebrity/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/Idea/gi) ||
                converstionStepsText.match(/market/gi) || converstionStepsText.match(/across/gi) ||
                converstionStepsText.match(/awareness/gi) ||
                converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/preference/gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi)
            ) {
                await playScript("Okay, and what celebrity might that be?")
                setSampleAns([" Oprah Winfrey’s remarkable career as a media mogul and philanthropist has showcased her exceptional leadership skills. Her ability to connect with people from diverse backgrounds and address pressing social issues could translate into effective governance. Winfrey’s compassionate nature and dedication to empowering individuals make her a potential candidate for the presidency. Her experience advocating for education, healthcare, and women’s rights could shape policies that benefit the nation."])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever found yourself buying something. Because a celebrity promoted it.");
                converstionSteps--;
            }




        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("what celebrity might that be?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Have you ever found yourself buying something. what celebrity might that be?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/celebrity/gi) || converstionStepsText.match(/might/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                converstionStepsText.match(/may/gi) || converstionStepsText.match(/found/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/could/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/model/gi) ||
                converstionStepsText.match(/remember/gi) || converstionStepsText.match(/industrie/gi) ||
                converstionStepsText.match(/model/gi) || converstionStepsText.match(/Because/gi) ||
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/to be/gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. what celebrity might that be?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}