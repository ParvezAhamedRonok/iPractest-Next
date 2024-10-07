let converstionSteps = 0;
export async function Test18Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await smallTalkError(" I will as you the qustion related of question two. so , Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("I am asking you the question related of section 2 . so, Let's talk about Country product .Describe another traditional product from your country (apart from what you spoke about in section 2) ");
                setSampleAns([`India is a diverse country. There are many traditional products here. We have earthen pots, ceramic  pottery of Jaipur, puppets of Rajasthan, phulkari embroidery of Punjab, hand-knotted carpets of  Srinagar and many more. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Describe another traditional product from your country (apart from what you spoke about) ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Describe another traditional product from your country (apart from what you spoke about) ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/product/gi) ||
                converstionStepsText.match(/country/gi) || converstionStepsText.match(/from/gi) ||
                converstionStepsText.match(/diverse/gi) || converstionStepsText.match(/many/gi) ||

                converstionStepsText.match(/have/gi) || converstionStepsText.match(/earthen/gi) ||
                converstionStepsText.match(/ceramic/gi) || converstionStepsText.match(/pottery/gi) ||
                converstionStepsText.match(/embroidery/gi) || converstionStepsText.match(/more/gi) ||
                converstionStepsText.match(/our/gi) || converstionStepsText.match(/this/gi)

            ) {
                await playScript(" What are the benefits of traditional products to locals?");
                setSampleAns([`Traditional products keep the locals in touch with their culture and tradition. They also become a  source of earning, when tourists show interest in these products and buy them. `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Describe another traditional product from your country (apart from what you spoke about) ");
                converstionSteps--;
            }

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What are the benefits of traditional products to locals?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are the benefits of traditional products to locals?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/benefits/gi) || converstionStepsText.match(/traditional/gi) ||
                converstionStepsText.match(/products/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/local/gi) || converstionStepsText.match(/touch/gi) ||
                converstionStepsText.match(/earn/gi) || converstionStepsText.match(/culture/gi) ||

                converstionStepsText.match(/become/gi) || converstionStepsText.match(/source/gi) ||
                converstionStepsText.match(/raft/gi) || converstionStepsText.match(/tourist/gi) ||

                converstionStepsText.match(/interest/gi) || converstionStepsText.match(/buy/gi) || converstionStepsText.match(/etc/gi)
            ) {
                await playScript("Okey. Do you think the government should help in the promotion of traditional products? ");
                setSampleAns([`Definitely, it should. If governments promotes traditional products, only then these will remain alive,  otherwise these products will die and so will our culture and tradition. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are the benefits of traditional products to locals?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think the government should help in the promotion of traditional products?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think the government should help in the promotion of traditional products?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/government/gi) || converstionStepsText.match(/should/gi) ||

                converstionStepsText.match(/help/gi) || converstionStepsText.match(/promotion/gi) ||
                converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/product/gi) ||
                converstionStepsText.match(/Definitely/gi) || converstionStepsText.match(/make/gi) ||

                converstionStepsText.match(/promote/gi) || converstionStepsText.match(/remain/gi) ||
                converstionStepsText.match(/alive/gi) || converstionStepsText.match(/otherwise/gi) ||
                converstionStepsText.match(/culture/gi)
            ) {
                await playScript("Okey. Do you think because of globalization countries are adopting each other’s traditions.");
                setSampleAns([`Yes, as countries know about these traditions, they adopt them. In a way it is good. Diwali is  celebrated by many people outside India also. We have also started celebrating Valentine’s Day,  Grandparents’ Day, Father’s Day and Mother’s Day etc
                 `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you think the government should help in the promotion of traditional products?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think because of globalization countries are adopting each other’s traditions.");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you think because of globalization countries are adopting each other’s traditions.");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Do/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/global/gi) || converstionStepsText.match(/count/gi) ||
                converstionStepsText.match(/adopt/gi) || converstionStepsText.match(/provider/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/celebrat/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/outside/gi) ||
                converstionStepsText.match(/start/gi) || converstionStepsText.match(/etc/gi) ||
                converstionStepsText.match(/excit/gi)
            ) {
                await playScript("So,Why do people buy traditional products because of their traditional value or because of they  are handmade");
                setSampleAns([`People buy these products for both these reasons. Handmade things have their own charm and only  handmade things can have the real traditional value. When things are made in bulk using machines, then the whole traditional value of the thing is lost. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .Do you think because of globalization countries are adopting each other’s traditions.");
                converstionSteps--;
            }
        } else if (converstionSteps == 7) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do people buy traditional products because of their traditional value or because of they  are handmade");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Why do people buy traditional products because of their traditional value or because of they  are handmade ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/buy/gi) ||
                converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/product/gi) || converstionStepsText.match(/because/gi) ||

                converstionStepsText.match(/value/gi) || converstionStepsText.match(/handmade/gi) ||
                converstionStepsText.match(/reasons/gi) || converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/us/gi) || converstionStepsText.match(/time/gi) ||

                converstionStepsText.match(/However/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/lost/gi)
            ) {
                await playScript("Okey. Did the traditional things of the past have more value than the present things? ");
                setSampleAns([`Yes, of course. We must remember that the things we consider new and modern today will become  traditions for the future. So, the traditional things of the past were different and as time passes those things become antiques and so become more valuable. `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .Why do people buy traditional products because of their traditional value or because of they  are handmade ");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  Did the traditional things of the past have more value than the present things? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Did the traditional things of the past have more value than the present things?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/past/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/value/gi) || converstionStepsText.match(/than/gi) ||

                converstionStepsText.match(/present/gi) || converstionStepsText.match(/Yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/remember/gi) ||
                converstionStepsText.match(/course/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/today/gi) || converstionStepsText.match(/common/gi) ||

                converstionStepsText.match(/different/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/more/gi) || converstionStepsText.match(/valuable/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Did the traditional things of the past have more value than the present things? ");
                converstionSteps--;
            }
        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";

}