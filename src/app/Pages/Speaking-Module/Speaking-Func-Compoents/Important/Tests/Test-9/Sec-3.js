let converstionSteps = 0;
export async function Test9Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            "For part three. Let's talk about social activities & football. So, are you ready ?"
        );
        setSampleAns(["Yes, I am comfortable you please proceed the test"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {

        if (converstionSteps == 1) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" are you ready ?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  are you ready ?");
                converstionSteps--;
            }
            else {
                await playScript("Let me begin your test. Can you tell me your full name again?");
                setSampleAns(["Yes, My name is Mr. Jone dow. you can call me jone"])
            }
        }

        else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" are you ready ?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  are you ready ?");
                converstionSteps--;
            }
            else {
                await playScript("So, what are the most positive aspects of our team?");
                setSampleAns([` Teamwork Reduces Your Workload,Teamwork Fosters Creativity,
            Working Within a Team Builds Trust. Teamwork Combines Multiple Strengths.
            , Working Within a Team Relieves Pressure,Teamwork Helps Keep Your Mind Open,
            Working Within a Team Teaches New Skills,Teamwork Helps New Workers Adapt,
            Teamwork Helps Employees Tackle Problems,
            Working Within a Team Promotes Responsibility,Working Within a Team Allows for Greater Risks,
             Teamwork Provides Clear Objectives,Working Within a Team Provides Faster Results, Teamwork Promotes Enthusiasm for Work,Working in a Team Benefits Your Company,
            ,Teamwork May Produce Unexpected Results
            `, `2, The most important aspect of working as a team is the ability to share the workload. When each team member handles their share of the work, they each have less work to complete.
            Reducing the burden on each member of the team leads to a wide range of additional benefits, from increased productivity to greater creativity.
            `]);
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  what are the most positive aspects of our team?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. what are the most positive aspects of our team?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/aspect/gi) || converstionStepsText.match(/team/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/teamwork/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                converstionStepsText.match(/collaborative /gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/chance/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/in/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi)


            ) {
                await playScript("Okay. Can you tell me three specific things? That we can improve as a team?");
                setSampleAns([" Ensure alignment and buy-inClarify goals, roles, and responsibilitiesEngage in proper planning and rapid executionInvolve team leaders in corporate communicationAvoid cringe-worthy team-building exercises", `2, Involve team leaders in corporate communication,
                Avoid cringe-worthy team-building exercises,
                Create teamwork recognition programs,
                Clarify ownership early on,
                Make communication a two-way Street,
                Have a clear organizational purpose,
                Set clear team goals,
                 Identify communication problems,
                 Stop micromanaging,
                Talk less, listen more,
                Let teams use multiple methods of communication,
                Mediate disputes,
                Use better collaboration tools,
                Ask team members for feedback,
                Start a culture committee,
                 Create a mentor program,
                Create team traditions,
                Eliminate unnecessary meetings
                `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  I am repeating. what are the most positive aspects of our team?");
                converstionSteps--;
            }
        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Can you tell me three specific things? That we can improve as a team?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Can you tell me three specific things? That we can improve as a team?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/improve/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/chance/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/team/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/ensure/gi) || converstionStepsText.match(/goal/gi) ||
                converstionStepsText.match(/aim/gi) || converstionStepsText.match(/rapid/gi) ||
                converstionStepsText.match(/engage /gi) || converstionStepsText.match(/involve/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/team/gi) ||
                converstionStepsText.match(/Avoid/gi) || converstionStepsText.match(/create/gi) ||
                converstionStepsText.match(/problem/gi) || converstionStepsText.match(/Stop/gi) ||
                converstionStepsText.match(/Make/gi) || converstionStepsText.match(/exercise/gi) ||
                converstionStepsText.match(/proper/gi) || converstionStepsText.match(/build/gi)
            ) {
                await playScript("Okay. What are we hoping to achieve this season?");
                setSampleAns([` We are hoping to have an abundant harvest this season.`, "2, should I say in response to I hope next year is better", "3, Define your personal and career goals The first step is to define what your life goals are, because this can provide you withdirection for developing an appropriate answer. These goals don't require any complexity. For example, your personal goals may include becoming a better listener or exploring travel destinations. Similarly, your career goals may include starting a personal brand, obtaining a leadership role or improving professional performance. Whatever these goals are, take note of them so that you remember them easi "])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can you tell me three specific things? That we can improve as a team?");
                converstionSteps--;
            }
        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are we hoping to achieve this season?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are we hoping to achieve this season?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/hoping/gi) || converstionStepsText.match(/hope/gi) ||
                converstionStepsText.match(/achieve/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/season/gi) ||
                converstionStepsText.match(/are/gi) || converstionStepsText.match(/abundant/gi) ||
                converstionStepsText.match(/harvest/gi) || converstionStepsText.match(/year/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/define/gi) ||
                converstionStepsText.match(/direction/gi) || converstionStepsText.match(/answer/gi) ||
                converstionStepsText.match(/develop/gi) || converstionStepsText.match(/goal/gi)
                ||
                converstionStepsText.match(/aim/gi) || converstionStepsText.match(/to Be/gi) ||
                converstionStepsText.match(/want/gi) || converstionStepsText.match(/next/gi)

            ) {
                await playScript("Okay. How would you rate your performances of late?");
                setSampleAns([" I rate myself as a six out of 10 this review cycle because I missed a few deadlines in October. Unfortunately, I had some personal troubles that prevented me from coming to work for several days and caused me to miss deadlines. The company was patient and flexible, but I'm ultimately responsible for those deadlines. I hope to learn to better manage personal affairs to prevent interference next time.", "2, It’s important that self-ratings are aligned with the feedback you've gotten from your manager throughout the year. in my opinion i would like to give 7 rate on my late performance"])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are we hoping to achieve this season?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How would you rate your performances of late?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How would you rate your performances of late?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/Will/gi) || converstionStepsText.match(/performances/gi) ||
                converstionStepsText.match(/late/gi) || converstionStepsText.match(/give/gi) ||
                converstionStepsText.match(/want/gi) || converstionStepsText.match(/could/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/unfortunately/gi) ||
                converstionStepsText.match(/company/gi) || converstionStepsText.match(/was/gi) ||
                converstionStepsText.match(/important/gi)
            ) {
                await playScript("What aspect of training or coaching has helped you? Improve as an individual for this club?");
                setSampleAns([" Coaching is a highly personalized and individualized well-being intervention. In the last million coaching sessions with BetterUp members, we’ve learned quite a lot about how to reliably deliver positive coaching outcomes for all kinds of people. Whether you are pursuing business coaching for your company or career coaching for yourself, the relationship with a coach is unlike any other personal or professional relationship. A coach, through their training and expertise, sees the coach holistically and encourages the coach to bring their whole self to the coaching sessions.", "2, Coaching validates, supports, and empowers the individuals within an organization. It gives them a neutral party to tackle concerns about professional development with, as well as a safe space to practice having difficult conversations."])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How would you rate your performances of late?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What aspect of training or coaching has helped you? Improve as an individual for this club?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What aspect of training or coaching has helped you? Improve as an individual for this club?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/aspect/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/train/gi) || converstionStepsText.match(/performances/gi) ||
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/individual/gi) ||
                converstionStepsText.match(/club/gi) || converstionStepsText.match(/lot /gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/unfortunately/gi) ||
                converstionStepsText.match(/coaching/gi) || converstionStepsText.match(/has/gi) ||
                converstionStepsText.match(/outcome/gi) || converstionStepsText.match(/give/gi) ||
                converstionStepsText.match(/teach/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/Self awareness/gi) || converstionStepsText.match(/Resilience/gi) ||
                converstionStepsText.match(/Collaboration/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/health/gi) || converstionStepsText.match(/Increase/gi)
            ) {
                await playScript("Okay. Do you find our training sessions challenging?");
                setSampleAns(" As a trainer/student, you want to create a positive and engaging learning environment for your participants. However, sometimes you may encounter learners who are disruptive, resistant, or disinterested in your training sessions. How can you manage these challenging learners and keep your training sessions positive? Here are some tips to help you deal with different types of difficult learners and maintain a productive and respectful atmosphere.", "2, No, not really i didn’t get so more challenging sessions at the training sessions ")
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What aspect of training or coaching has helped you? Improve as an individual for this club?");
                converstionSteps--;
            }

        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you find our training sessions challenging?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you find our training sessions challenging?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/challenging/gi) || converstionStepsText.match(/challenges/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/train/gi) || converstionStepsText.match(/session/gi) ||

                converstionStepsText.match(/student/gi) || converstionStepsText.match(/find/gi) ||
                converstionStepsText.match(/found/gi) || converstionStepsText.match(/not/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/environment/gi) ||
                converstionStepsText.match(/participant/gi) || converstionStepsText.match(/difficult/gi) ||
                converstionStepsText.match(/got/gi) || converstionStepsText.match(/type/gi) ||
                converstionStepsText.match(/too many/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/Increase/gi)
            ) {
                await playScript("What extra drills can you do to improve?");
                setSampleAns([" Personal development skills are qualities and abilities that help you grow both personally and professionally. In other words, they are skills that help you nurture your personal development. Understanding and improving these skills is a process also known as self-development or personal growth", `2, Butterfly drill: A good drill to improve conditioning while practicing passing and controlled serving skills.
                Serve and chase your ball: A drill to improve serving accuracy and footwork.
                Peppering: A drill to improve ball control and communication.
                Blocks along the net: A drill to improve blocking and footwork.
                Hustle to touch 10 balls: A drill to improve speed and agility.
                `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you find our training sessions challenging?");
                converstionSteps--;
            }


        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What extra drills can you do to improve?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What extra drills can you do to improve?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/extra/gi) || converstionStepsText.match(/improve/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/dicress/gi) ||
                converstionStepsText.match(/could/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/drill/gi) ||
                converstionStepsText.match(/Butterfly/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/development/gi) || converstionStepsText.match(/communication/gi) ||
                converstionStepsText.match(/speed/gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/growing/gi) || converstionStepsText.match(/progress/gi) ||
                converstionStepsText.match(/basically/gi)

            ) {
                await playScript("What should you do to improve your weaker foot?");
                setSampleAns([" Becoming two-footed will lead to more goals.  Being accurate with both feet will lead to even more.  It’s during the crucial moments after you have been going one way all game that you are able to shock your opponents with a clinical finish using your weak foot.Adding targets, a keeper and pressure will replicate that moment.  There are no magic tricks to shooting. Keep doing it over and over again until your shots become accurate and they feel natural.Start with setting up targets and then invite a goalkeeper friend.  Shoot from all angles incorporating finishing and dribbling.", `2, To improve your weak foot, you can:
                Develop a growth mindset
                Spend more time juggling
                Play 1v1 against younger friends
                Grab a ball and find a wall
                Decide to use your weak foot in practice
                `])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What extra drills can you do to improve?");
                converstionSteps--;
            }

        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What should you do to improve your weaker foot?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What should you do to improve your weaker foot?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/improve/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/practice/gi) ||
                converstionStepsText.match(/develop/gi) || converstionStepsText.match(/communication/gi) ||
                converstionStepsText.match(/speed/gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/progress/gi) ||
                converstionStepsText.match(/basically/gi) ||
                converstionStepsText.match(/foot/gi) || converstionStepsText.match(/weaker/gi) ||
                converstionStepsText.match(/AGAINST/gi) || converstionStepsText.match(/TARGETS/gi) ||
                converstionStepsText.match(/aim/gi) || converstionStepsText.match(/define/gi) ||
                converstionStepsText.match(/goal/gi)
            ) {
                await playScript("Okay. What should you work on to enhance your dribbling ability?");
                setSampleAns([` To improve dribbling, you need to:
                Use your fingers, not your palm, to control the ball15
                Keep your head up while dribbling and keep the ball close to your feet12
                Practice dribbling with both hands and both feet124
                Use the leading edge of the foot to dribble galloping and change the pace2
                Use your body to shield the ball from defenders and initiate a dribble with a jab step or a fake12`])
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What should you do to improve your weaker foot?");
                converstionSteps--;
            }



        } else if (converstionSteps == 11) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What should you work on to enhance my dribbling ability??");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.   What should you work on to enhance my dribbling ability?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/improve/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/practice/gi) ||
                converstionStepsText.match(/enhance/gi) || converstionStepsText.match(/dribbling/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/progress/gi) ||
                converstionStepsText.match(/basically/gi) ||
                converstionStepsText.match(/Use/gi) || converstionStepsText.match(/Keep/gi) ||
                converstionStepsText.match(/technique/gi) || converstionStepsText.match(/Pass /gi) ||
                converstionStepsText.match(/Repeat/gi) || converstionStepsText.match(/define/gi) ||
                converstionStepsText.match(/pattern/gi)
            ) {
                await playScript("Okay. What advice can you give to an up coming player?");
                setSampleAns([` Always play fairly, according to the spirit and letter of the rules.
                Stay calm under difficult conditions. It’s easy to maintain composure when things go right; when they don’t real athletes step forward and stand up to the test.
                Support and encourage your teammates at all times. All of us make mistakes at times and they are not done on purpose. Encourage your teammates to be the best they can be.
                Play as hard as you can in practice and in games. Never be beaten because of lack of effort. Even opponents who are bigger or more skilled than you can be beaten if you out-hustle them.
                Show respect to your coaches, referees, and your opponents; win or lose.
                A good soccer player must have conditioning, skills and tactical knowledge. A player must work on all three to be the best they can be.
                When your team has the football, everyone is an attacker; when your opponent has the ball everyone is a defender.
                No matter what position you are in, you are first a soccer player and you will have to be able to receive, shoot, pass, dribble, head, make space, etc., regardless of your position.
                Do not just “kick” the ball unless it is in a dangerous position in front of your goal. Instead take a ” picture ” of the situation before you get the ball. In this way you can perceive the situation, determine the best solution, and act accordingly when the ball arrives. Develop Field Vision. Always send the ball to someplace or someone.
                Always maintain your position. Don’t run following the movement of the ball. Know where you are on the field in relation to where the other players and positions are on the field. `])
                conditionsDependsOnUserSpeech(9)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.   What should you work on to enhance my dribbling ability?");
                converstionSteps--;
            }


        } else if (converstionSteps == 12) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  What advice can you give to an up coming player?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What advice can you give to an up coming player?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/advice/gi) || converstionStepsText.match(/up coming/gi) ||
                converstionStepsText.match(/want/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/Would/gi) || converstionStepsText.match(/player/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/increase/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/progress/gi) ||
                converstionStepsText.match(/basically/gi) ||
                converstionStepsText.match(/Use/gi) || converstionStepsText.match(/Keep/gi) ||
                converstionStepsText.match(/game/gi) || converstionStepsText.match(/Pass/gi) ||
                converstionStepsText.match(/fairly/gi) || converstionStepsText.match(/define/gi) ||
                converstionStepsText.match(/Always/gi) ||
                converstionStepsText.match(/soccer/gi) || converstionStepsText.match(/skill/gi) ||
                converstionStepsText.match(/defender/gi) || converstionStepsText.match(/position/gi) ||
                converstionStepsText.match(/maintain/gi) || converstionStepsText.match(/field/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(10)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What advice can you give to an up coming player?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}