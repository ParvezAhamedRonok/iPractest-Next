import React from 'react';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";



function Test6Panel1Page1({ AnswersData }) {
    //  submitted answers for showing at submit popup---------->>  
    let AllAnswersData = [
        ["regime", "/", "REGIME", "/", "Regime"],
        ["discoloured", "/", "Discoloured"],
        ["leather lining", "/", "Leather lining", "/", "LEATHER LINING"],
        ["open backed", "/", "Open backed", "/", "OPEN BACKEND"],
        ["your holiday", "/", "Your holiday", "/", "YOUR HOLIDAY"],
        ["natural materials", "/", "Natural materials", "/", "NATURAL MATERIALS"],
        ["chilblains", "/", "Chilblains", "/", "CHILBLAINS"],
        ["FALSE"], ["TRUE"], ["NOT GIVEN"], ["FALSE"], ["TRUE"], ["FALSE"], ["NOT GIVEN"],
        ["E"], ["F"], ["D"], ["B"], ["I"], ["C"], ["H"],
        ["A"], ["B"], ["C"], ["B"], ["C"], ["A"],
        ["vi"], ["iii"], ["viii"], ["v"], ["ii"], ["vii"], ["i"],
        ["tell whether", "/", "Tell whether", "/", "TELL WHETHER"],
        ["components", "/", "Components", "/", "COMPONENTS"],
        ["scrutiny", "/", "Scrutiny", "/", "SCRUTINY"],
        ["FALSE"], ["TRUE"], ["FALSE"],


    ]

    AnswersData(AllAnswersData)


    return (
        <section className='mainSection p-4 mb-[50px]'
            onMouseDown={() => { makeEditableAndHighlight("green"); }}>
            <div className='text-inherit Titles'>
                <div className="Titles text-inherit font-bold mb-2 pt-2 text-justify">
                    <div className=''>SECTION 1 <br />Questions 1-14</div>
                    <div className="mt-2 mb-3">Read the text and answer Questions 1-7 <br />
                        Looking after Your Feet</div>
                </div>
            </div>

            <div className="mt-2 mb-3">
                <p className=''>
                    <span className=' font-bold mr-2 mb-2'>During Summer</span> <br /> With the arrival of warmer weather, many of us will be baring feet that have spent all winter hidden inside shoes and socks. If you haven’t kept up a foot-care regime over the winter months, get one started as soon as possible! <br /> <br />


                    Dry or rough skin can be made smooth and supple by exfoliating with Scholl Rough Skin Remover, then moisturising with Scholl Deep Moisturising Cream or Scholl Re-Hydrating Moisture Mousse. Dull or discoloured nails can be given a fresh summer look with Scholl Healthy Nails, Nail Brightening System.In hot weather, feet are likely to perspire more. Apart from potential odour problems, this leads to conditions that allow bacteria and fungi to thrive. Keep your feet cool and hygienic by:<br /> <br />


                    • Wearing cotton socks whenever you have shoes on. Cotton absorbs perspiration, allowing your feet to breathe.• Choosing shoes with leather lining. This will also help to absorb perspiration and help your feet from becoming too hot.• Allow your feet maximum exposure to fresh air by not wearing shoes or socks at all when relaxing at home. Please note, if you have diabetes or circulatory problems, going bare-foot is not recommended because of the increased risk of cuts or abrasions going unnoticed.<br /> <br />
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className=' font-bold mr-2 mb-2'>Footwear</span> <br />Many types of summer footwear - such as sandals or flip-flops - are associated with particular foot problems. By offering limited support and inadequate padding, some types of summer footwear can cause pain in the soles and ankles. Open-backed footwear can leave your heels prone to cracking. Shoes with an open design on top can leave the delicate skin on your upper foot exposed to the sun.• Footwear with straps or thongs between the toes can lead to friction and blisters.</p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className=' font-bold mr-2 mb-2'>On Holiday</span> <br />Going on holiday rarely involves a break for our feet. Trips to hot, dry climates increase the likelihood of dry skin, cracked heels and increased perspiration. Often, our footwear changes from the well-worn and comfortable to newly-purchased sandals or flip-flops. This can cause friction that leads to blisters and other painful problems. When packing your bags, remember to pop a few foot care products in with your beachwear and sunhat.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className=' font-bold mr-2 mb-2'>Feet get sunburned too!</span> <br />It’s easy to forget about the skin on the tops of your toes, upper feet and ankles. But its thin nature and the fact it’s usually protected by shoes and socks makes it especially susceptible to sunburn. Best, therefore, to use the same type of high-factor cream you’d use on your face. A few weeks before your holiday, start up an exfoliating and moisturising regime and start trimming your toenails on a regular basis. If your journey will involve a flight lasting four hours or more, don’t forget Scholl Flight Socks. Evidence suggests flights of this duration or longer may increase the risk of developing a DVT.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className=' font-bold mr-2 mb-2'>During Winter</span> <br />The cold weather of winter can lead to a variety of health implications for your feet. The extremities of the body - such as toes - are more susceptible to losing heat, particularly if you have circulatory problems. Wearing thicker socks and shoes that provide an adequate layer of insulation from ground-chill are obvious precautions. Natural materials, especially cotton or wool, will help prevent the build-up of moisture in your shoes, so depriving bacteria and fungi of the conditions they need to spread. Take care not to warm up chilly feet too quickly - by placing them in hot water, for instance. This can cause chilblains, a painful condition that arises when heat causes the blood to start flowing too quickly for the surrounding blood vessels to cope with. The resulting leakage into the surrounding tissue then causes itchy, red areas of swelling. <br />


                    Because your feet are likely to spend large amounts of time hidden in shoes and socks during the winter, it’s important to maintain a foot-care regime. While washing, drying, exfoliating and moisturising, keep a careful watch for the early signs of problems, such as the build-up of hard skin that can lead to a callus or a discolouring of the nails which can be the first signs of a fungal infection.
                </p>
            </div>




            <div className='text-inherit Titles mt-2 mb-3'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
                    <div className=''>Read the text and answer Questions 8- 14 </div> <br />
                    <div className="mt-2 mb-3">Gym safety</div><br />
                </div>
            </div>

            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>A</span>It is essential to follow certain safety tips while you are out at your fitness center. This will assure your safety during workouts while avoiding injuries and/or other complications. It is imperative that you adhere to your physician's/fitness therapist's guidelines before taking up any workouts. Check out vital gym safety tips.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>B</span> Check your fitness before you start up any strength-training program. You might have to modify or avoid weightlifting if you have muscle or joint problems, seizure disorders, heart disease, high blood pressure, previous injuries or any other physical condition with potential for danger.</p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>C</span>One of the cardinal principles of gym safety is to never work out when you are tired or ill. You can worsen your situation or injure yourself. Warm up before any aerobic workout, as it involves repetitive exercise that increases your heart rate. Stretch your muscles before putting them through a strenuous workout. Follow your brief warm-up with some stretches. Do not injure your muscles without preparing them adequately.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>D</span>Don't rush into any sport or exercise without warming up first - muscles that haven't been properly prepared tend to be injured more easily. Start out with some light cardiovascular activities, such as easy jogging, jumping jacks, or brisk walking, just to get your muscles going.Do not lift weights jerkily. This can lead to muscle injuries. Do your exercises in a slow and controlled manner. Increase weights gradually. Use safety collars when working out on squats, bench presses, curls and dumbbells. This will ensure that weight plates don't slip off and cause an injury. Use a weight belt, wraps, straps and gloves to support heavy lifts. This protects your lumbar region. Knee wraps prevent injury to your tendons and ligaments
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>E</span> Using the proper lifting form is important not only to work your muscles correctly, but also to prevent injury. Always do your exercises through a full range of motion in a slow, controlled manner. Don't hold your breath while lifting weights, it can cause inter-abdominal pressure that can lead to hernia. Breathe out as you exert yourself and breathe in as you relax and let weight back down. Repeat exercise routines steadily to benefit from the workout. Lift weights with control and not explosively. Don't lean heavily on the stair-stepper rails. Leaning heavily on the stair-stepper rails will place unnecessary weight on your wrists and back. Unnecessary leaning can cause injuries to your wrists and back.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>F</span>Drink water while you workout. This prevents dehydration and aids better workout performance. Stop your gym activity if you experience dizziness, fainting or change in heart rhythm. Any significant increase or drop in blood pressure must not be ignored. A critical gym safety tip is to discontinue the fitness activity if you feel tightness in the chest or shoulders and surrounding areas..
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>G</span>  Replace gym equipment in the right place after you are done with them. Leaving them around can injure other gym members. Always use the collars that prevent weights from falling off the barbells. Keep your hands away from chains, cams, pulleys, and weight plates of exercise machines when they are in use. Use gym equipment after wiping them. Wash your hands after your workout. This may reduce your chance of catching any virus
                </p>
            </div>


            <div className='text-inherit Titles mt-3 mb-3'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
                    <div className=''>Read the text and answer Questions 15-21 </div> <br />
                    <div className="mt-2 mb-3">Fitness Trends</div><br />
                </div>
            </div>

            <div className='mb-2 mt-2'>
                <p className=''>
                    The annual worldwide survey by the American College of Sports Medicine into fitness trends, shows the growing demand for educated and experienced fitness professionals claimed the top spot for the fourth consecutive year. The survey, now in its fifth year, was distributed to ACSM-certified health and fitness professionals worldwide and was designed to reveal trends in various fitness environments. The top ten fitness trends predicted for next year are given below.

                </p>
            </div>


            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>A</span>Fitness programmes for older adults. As the baby boom generation ages into retirement, some of these people have more discretionary money than their younger counterparts. Therefore, many health and fitness professionals are taking the time to create age-appropriate fitness programmes to keep older adults healthy and active.

                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>B</span> Strength training. Strength training remains a central emphasis for many health clubs. Incorporating strength training is an essential part of a complete physical activity programme for all physical activity levels and genders.</p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>C</span>Children and obesity. With childhood obesity growing at an alarming rate, health and fitness professionals see the epidemic as an opportunity to create programmes tailored to overweight and obese children. Solving the problem of childhood obesity will have an impact on the health care industry today and for years to come.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>D</span>Personal training. More and more students are studying sport and exercise science, which indicates that students are preparing themselves for careers in allied health fields such as personal training. Education, training and the possession of recognized qualifications for personal trainers has become increasingly important to the health and fitness facilities that employ them.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>E</span>Core training. Distinct from strength training, core training specifically emphasizes conditioning of the middle-body muscles, including the pelvis, lower back, hips and abdomen - all of which provide needed support for the spine.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>F</span>Exercise and weight loss. In addition to nutrition, exercise is a key component of a proper weight loss programme. Health and fitness professionals who provide weight loss programmes are increasingly incorporating regular exercise and calorific restriction for better weight control in their clients.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>G</span> Boot camp. Boot camp is a high-intensity structured activity programme modeled after military style training and led by an instructor. Boot camp incorporates cardiovascular, strength, endurance and flexibility drills in both indoor and outdoor settings.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>H</span> Functional fitness. This is a trend toward using strength training to improve balance and ease of daily living. Functional fitness and special fitness programmes for older adults are closely related.
                </p>
            </div>
            <div className="mt-2 mb-3">
                <p className=''>
                    <span className='text-xl font-bold mr-2 mt-2 mb-3'>I</span>Physician referrals. Physician referrals partner medical and health and fitness professionals to allow the simple integration of exercise into patients’ lives
                </p>
            </div>


        </section>
    )
}

export default Test6Panel1Page1