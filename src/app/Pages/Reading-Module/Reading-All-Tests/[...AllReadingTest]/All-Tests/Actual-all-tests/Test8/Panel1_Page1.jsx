import React from 'react'
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";




function Test8Panel1Page1({ AnswersData }) {
    //  submitted answers for showing at submit popup---------->>  
    let AllAnswersData = [
        ["ix"], ["iii"], ["vi"], ["i"], ["v"], ["viii"], ["ii"], ["vii"],
        ["F"], ["E"], ["A"], ["B"], ["E"],
        ["NO"], ["YES"], ["NOT GIVEN"], ["NO"], ["YES"], ["YES"],
        ["automated", "/", "Automated"],
        ["rising costs", "/", "Rising costs"],
        ["3m people", "/", "3M Meople"],
        ["2getthere", "/", "2GETTHERE"],
        ["each other", "/", "Each other"],
        ["effect", "/", "Effect"],
        ["risks", "/", "Risks"],
        ["iii"], ["ix"], ["vii"], ["ii"], ["x"], ["vi"], ["iv"], ["viii"], ["v"],
        ["NOT GIVEN"], ["TRUE"], ["FALSE"], ["NOT GIVEN"], ["FALSE"],
    ]
    AnswersData(AllAnswersData)



    return (
        <section className='mainSection p-4 mb-[50px]'
        onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
            <div className='text-inherit Titles'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
                    <div className=''>SECTION 1<br />Questions 1-13</div> <br />
                    <div className="mt-2 mb-3">Read the text and answer Questions 1-13</div>
                    <div className="mt-2 mb-3">Green Transport</div> <br />
                </div>
            </div>
            <div className="mt-2 mb-3">
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2'>A</span>Society has tended to be shaped by its modes of transport, from the horse and cart to the car and the plane. Now, though, our world and its transport systems are being shaped by the threat from climate change. In the UK, transport alone accounts for around a quarter of greenhouse-gas emissions, so the big question is how we can make it green.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>B</span> This challenge has become more pressing since the government released its white paper on energy and climate change in July. With slashing emissions by 80 per cent by 2050 now an official target, the spotlight of transport research has shifted from miles per hour on to miles per gallon, says Roger Kemp, professor of engineering at Lancaster University. This shift has been helped by the white paper's emphais on green transport, and boosted by its prediction that an estimated 1.2 million extra green energy jobs will be created by 2020. "Green energy for transportation is a huge marketplace," says Barry Potier from Resourcing Solutions, a recruitment consultancy based in Ruscombe, Berkshire, that specialises in renewable energy.</p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>C</span>To sustain this marketplace, the UK will need a strong base in terms of expertise. Combine this with the fact that there is a real shortfall in people with the technical skills required, says Potier, and those who have the qualifications can have their pick of the jobs. "Energy should be the career of choice for all scientists, technicians and engineers at the moment - it's a no-brainer," adds Kemp.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>D</span> So where should you begin? In such a broad industry the options can be overwhelming, so focus on getting a grounding in an applied science or engineering, advises Tristan Smith, a mechanical engineering research assistant at University College London. "Employers are looking for excellent knowledge of first principles, rather than someone who can just 'talk the talk' ". It doesn't necessarily pay to start with the greenest companies either. Large engineering firms, such as Rolls-Royce or BAE Systems, might not be the poster boys of sustainable development at the moment, says Smith, but they do have the funding and graduate training schemes to give you the best start.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>E</span>All transport methods will be affected by the government's target, with the Royal Society saying that "radical" changes in how we travel and the way we fuel our vehicles will be needed. So which area should you specialise in? Road transport is ahead of the game, having received some of the biggest investments for green projects. Steven Chu, the US Secretary of Energy, has stated his belief in the "inevitable transition to electricity as the energy for our personal transportation". Even Google is investing in green cars, bankrolling the futuristic Aptera - which not only looks good, but runs off electricity too.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>F</span> Yet despite this support there is still a long way to go. "Your electric car is only as green as your electricity supply," says Jeff Hardy, from the UK Energy Research Centre in London. One of the biggest challenges will be to make sure the electricity we use to charge our cars is low-carbon. What's more, we will need a whole new infrastructure to charge them - think exchanging your battery when you stop at a service station rather than filling the tank. This infrastructure just doesn't exist yet. Then there is all the energy needed to run the new system: "Switching 23 million cars to electric, that requires quite a large extra chunk of electricity that we don't currently produce," says Hardy. According to Smith, these challenges are no bad thing. "If we are going to meet any of our C02 reduction targets, there's so much for engineers to get stuck into. For anyone who enjoys a challenge, this is the most exciting time since the industrial revolution."
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>G</span> While electricity for cars is seen as a winning investment, biofuels are more contentious. A recent study by the European Commission predicts that, of all the renewables, biofuels will offer the most career opportunities in the future. Yet confidence in this energy source is far from universal, as producing biofuel would involve encroaching on agricultural land. Even if you could power all cars with it, no one would be able to eat, argues Kemp. Despite these doubts, there is cash available for research. This year the Biotechnology and Biological Sciences Research Council invested £27 million in biofuels by launching the Sustainable Bioenergy Centre, a partnership between academia and industry. There is still hope for biofuels, says Hardy, because there is a lot of interest in what comes next - second and third-generation technologies which move us away from crops as a fuel source and towards using agricultural waste, for instance.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>H</span> Using fuel cells to power vehicles is another exciting and hotly debated prospect. "A fuel cell gives us the highest efficiency device for producing electricity that we know of. It produces very low emissions too, so it's efficient and it's clean," says Nigel Brandon, director of the Energy Futures Lab at Imperial College London. Nevertheless, issues such as refuelling and ensuring the energy comes from renewable sources are proving problematic, as is the fact that fuel cells are still expensive to produce. "We need to work to make those fuel cells cheaper, and to do so we need to develop new materials," says Brandon. All these obstacles stand between fuel-cell cars and the mass market. So is it a career dead end for young scientists? Not according to Brandon. "We absolutely have to address our emissions from the transport sector and there are very few ways we can do it," he says. "For young scientists and engineers in the years ahead there are tremendous opportunities to make a contribution. The challenges are there and fuel cells are part of the solution."
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Test8Panel1Page1