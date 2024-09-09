import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["FALSE"], ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["NOT GIVEN"], ["TRUE"],
    ["droppings"],
    ["coffee"],
    ["mosquitoes"],
    ["protein"],
    ["unclean"],
    ["culture"],
    ["houses"],
    ["E"], ["A"], ["D"], ["F"], ["C"],
    ["descendants"],
    ["sermon"],
    ["fine"],
    ["innovation"],
    ["B"], ["A"], ["B"], ["A"], 
    ["D"], ["E"], ["F"], ["B"],["H"], ["E"],
    ["NO"], ["NOT GIVEN"], ["NOT GIVEN"], ["YES"],
    ["memory"],
    ["numbers"],
    ["communication"],
    ["visual"]

  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />READING PASSAGE 1</div> <br />
          <h5>You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.</h5> <br />
          <h4 className='mt-1 text-xl'>Bats to the rescue</h4>
          <h5 className='mt-1 text-xl mb-2'>How Madagascar’s bats are helping to save the rainforest</h5> <br />


        </div>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>There are few places in the world where relations between agriculture and conservation are more strained. Madagascar’s forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country’s main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields. The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>Enter University of Cambridge zoologist Ricardo Rocha. He’s passionate about conservation, and bats. More specifically, he’s interested in how bats are responding to human activity and deforestation in particular. Rocha’s new study shows that several species of bats are giving Madagascar’s rice farmers a vital pest control service by feasting on plagues of insects. And this, he believes, can ease the financial pressure on farmers to turn forest into fields.

          Bats comprise roughly one-fifth of all mammal species in Madagascar and thirty-six recorded bat species are native to the island, making it one of the most important regions for conservation of this animal group anywhere in the world.</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields. They include the Malagasy mouse-eared bat, Major’s long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters’ wrinkle-lipped bat. <br /> <br />

          ‘These winner species are providing a valuable free service to Madagascar as biological pest suppressors,’ says Rocha. ‘We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm. The damage which these insects cause puts the island’s farmers under huge financial pressure and that encourages deforestation.’
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>The study, now published in the journal Agriculture, Ecosystems and Environment, set out to investigate the feeding activity of insectivorous bats in the farmland bordering the Ranomafana National Park in the southeast of the country. <br /> <br />

          Rocha and his team used state-of-the-art ultrasonic recorders to record over a thousand bat ‘feeling buzzes’ (echolocation sequences used by bats to target their prey) at 54 sites, in order to identify the favourite feeding spots of the bats. The next used DNA barcoding techniques to analyse droppings collected from bats at the different sites. <br /> <br />

          The recordings revealed that bat activity over rice fields was much higher than it was in continuous forest – seven times higher over rice fields which were on flat ground, and sixteen times higher over fields on the sides of hills – leaving no doubt that the animals are preferentially foraging in these man-made ecosystems. The researchers suggest that the bats favour these fields because lack of water and nutrient run-off make these crops more susceptible to insect pest infestations. DNA analysis showed that all six species of bat had fed on economically important insect pests. While the findings indicated that rice farming benefits most from the bats, the scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits).
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> ‘The effectiveness of bats as pest controllers has already been proven in the USA and Catalonia,’ said co-author James Kemp, from the University of Lisbon. ‘But our study is the first to show this happening in Madagascar, where the stakes for both farmers and conservationists are so high.’

          Local people may have a further reason to be grateful to their bats. While the animal is often associated with spreading disease, Rocha and his team found evidence that Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness.<br /> <br />


          Rocha points out that the relationship is complicated. When food is scarce, bats become a crucial source of protein for local people. Even the children will hunt them. And as well as roosting in trees, the bats sometimes roost in buildings, but are not welcomed there because they make them unclean. At the same time, however, they are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people. And one potential problem is that while these bats are benefiting from farming, at the same time deforestation is reducing the places where they can roost, which could have long-term effects on their numbers. Rocha says, ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’<br /> <br />

          Rocha and his colleagues believe that maximising bat populations can help to boost crop yields and promote sustainable livelihoods. The team is now calling for further research to quantify this contribution. ‘I’m very optimistic,’ says Rocha. ‘If we give nature a hand, we can speed up the process of regeneration.’
        </p>
      </div>
    </section>
  )
}

export default Panel1