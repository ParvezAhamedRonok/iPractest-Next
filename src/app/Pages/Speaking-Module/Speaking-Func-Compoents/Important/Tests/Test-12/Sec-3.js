let converstionSteps = 0;
export async function Test12Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await smallTalkError("Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("Let's talk about life-changing situations. What are the most common planned situations? When do people's lives change drastically?");
                setSampleAns([` i think that the most common uh situations where people's lives change is as i said education career goals and marriage`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the most common planned situations? When do people's lives change drastically?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What are the most common planned situations? When do people's lives change drastically?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/start/gi) ||
                converstionStepsText.match(/living/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/drastically/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/belive/gi) || converstionStepsText.match(/education/gi) ||
                converstionStepsText.match(/career/gi) || converstionStepsText.match(/goal/gi) ||
                converstionStepsText.match(/marriage/gi) || converstionStepsText.match(/destinaion/gi)

            ) {
                await playScript("So, is this common to all cultures?");
                setSampleAns([`Yes because whether you are in tunisia brazil france or china you're most likely to make these decisions these personal decisions by yourself yes most school expectations and system school systems are the same in every country teenagers are expected to go to school go to university graduate and get a job and then get married `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the most common planned situations? When do people's lives change drastically?");
                converstionSteps--;
            }




        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is this common to all cultures?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Is this common to all cultures?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/plan/gi) || converstionStepsText.match(/culture/gi) ||
                converstionStepsText.match(/all/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/expect/gi) || converstionStepsText.match(/job/gi) ||
                converstionStepsText.match(/goal/gi) || converstionStepsText.match(/marriage/gi)
            ) {
                await playScript("Okey. What are unplanned circumstances. That can suddenly change a person's life?");
                setSampleAns([`  there are certainly unplanned situations that people have no control over such as the loss of a loved one an accident a car accident for example or simply winning the lottery
                `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is this common to all cultures?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are unplanned circumstances. That can suddenly change a person's life?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What are unplanned circumstances. That can suddenly change a person's life?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/plan/gi) || converstionStepsText.match(/there/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/example/gi) ||
                converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/Moving/gi) || converstionStepsText.match(/travel/gi) ||
                converstionStepsText.match(/circumstance/gi) || converstionStepsText.match(/suddenly/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/life/gi)
            ) {
                await playScript("So. Are these always positive or negative?");
                setSampleAns([` it can be both people get surprised by good news like expecting to have a child but in other cases it can be negative`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are unplanned circumstances. That can suddenly change a person's life?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Are these always positive or negative?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are these always positive or negative?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/plan/gi) || converstionStepsText.match(/always/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/example/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/suddenly/gi) || converstionStepsText.match(/travel/gi) ||
                converstionStepsText.match(/circumstance/gi) || converstionStepsText.match(/suddenly/gi) ||
                converstionStepsText.match(/both/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/might/gi) || converstionStepsText.match(/could/gi) ||
                converstionStepsText.match(/case/gi) || converstionStepsText.match(/expect/gi)
            ) {
                await playScript("So, what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
                setSampleAns([` i think the most important notion to remember is that life changes there are ups and downs and it is important to remember the good times when the going is rough Serious stress, such as major relationship, financial or work-related issues. Depression or anxiety, especially serious depression, depression that lasts a long time or anxiety with 
                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are these always positive or negative?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/advice/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/Stay/gi) || converstionStepsText.match(/focus/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/flexible/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/suddenly/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/remember/gi) || converstionStepsText.match(/down/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/financial/gi) ||
                converstionStepsText.match(/anxiety/gi) || converstionStepsText.match(/especially/gi) ||
                converstionStepsText.match(/seriou/gi) || converstionStepsText.match(/panic/gi)

            ) {
                await playScript("Can you elaborate on that?")
                setSampleAns([` :yes/sure/whynot/ no    if someone loses a loved one say a father it's saddening but it is also good to remember the good times that they shared with their father so that he or she would live on um his memory and children
                `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
                converstionSteps--;
            }




        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Can you elaborate give some details in that?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Can you elaborate give some details in that?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/sure/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/live/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/lose/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/share/gi)
            ) {
                await playScript(
                    "Okey. Let's talk about making big decisions. Which steps are important to consider? When making big decisions in order to reach the best possible outcomes")
                setSampleAns([` i think that doing researching as much as possible is a good idea or opting for professional advice that's what i did when i when i was looking to which university i should go to i researched as much as possible before making up my mind `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can you elaborate give some details in that?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Which steps are important to consider? When making big decisions in order to reach the best possible outcomes?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Which steps are important to consider? When making big decisions in order to reach the best possible outcomes?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Taking/gi) || converstionStepsText.match(/using/gi) ||
                converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/mind/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/consider/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/big/gi) || converstionStepsText.match(/reach/gi) ||
                converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                converstionStepsText.match(/doing/gi) || converstionStepsText.match(/research/gi) ||
                converstionStepsText.match(/opting/gi) || converstionStepsText.match(/advice/gi) ||
                converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi)
            ) {
                await playScript("Okey. How can people remember to take these important steps?")
                setSampleAns([`  a good way to do this to remember is to write down the decision-making process also keeping a cool head is important`])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Which steps are important to consider? When making big decisions in order to reach the best possible outcomes?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can people remember to take these important steps?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How can people remember to take these important steps?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Taking/gi) || converstionStepsText.match(/using/gi) ||
                converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/remember/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/mind/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/step/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/main/gi) || converstionStepsText.match(/take/gi) ||
                converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                converstionStepsText.match(/doing/gi) || converstionStepsText.match(/way/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/process/gi)

            ) {
                await playScript("Okey. What social support is available to help make big decisions?");
                setSampleAns([`  I mean society can give a helping hand to people who are looking for help. There are tons of online reviews that can guide people. There is also professional advice and I thought the advice of a career counselor when I wanted to decide which university I should go to. `])
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How can people remember to take these important steps?");
                converstionSteps--;
            }


        }
        else if (converstionSteps == 11) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What social support is available to help make big decisions?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What social support is available to help make big decisions?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Taking/gi) || converstionStepsText.match(/using/gi) ||
                converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/remember/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/support/gi) || converstionStepsText.match(/available/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/step/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/decision/gi) || converstionStepsText.match(/take/gi) ||
                converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/looking/gi) ||
                converstionStepsText.match(/career /gi)
            ) {
                await playScript("Okey. Where can people search for these?");
                setSampleAns([`  they can find in governmental offices or they can simply find them online`])
                conditionsDependsOnUserSpeech(9)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What social support is available to help make big decisions?");
                converstionSteps--;
            }


        } else if (converstionSteps == 12) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Where can people search for these?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Where can people search for these?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/search/gi) ||
                converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/support/gi) || converstionStepsText.match(/office/gi) ||
                converstionStepsText.match(/get/gi) || converstionStepsText.match(/online/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/step/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/decision/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/find/gi) ||
                converstionStepsText.match(/important/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(10)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where can people search for these?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";

}