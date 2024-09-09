import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["FALSE"],["NOT GIVEN"], ["FALSE"],  ["TRUE"], ["TRUE"], 
    ["lightweight"],
    ["bronze"],
    ["levels"],
    ["hull"],
    ["triangular"],
    ["music"],
    ["grain"],
    ["towboats"],
    ["D"], ["C"], ["F"], ["H"], ["G"],
    ["B"],
    ["microorganisms" , "/" ,"micro-organisms"],
    ["reindeer"],
    ["insects"],
    ["B"], ["A"], ["A"],["A"],

     ["NOT GIVEN"], ["TRUE"], ["TRUE"], ["NOT GIVEN"], ["FALSE"],
    ["FALSE"], ["H"], ["D"], ["G"], ["C"], ["A"],
    ["warm winter"],
    ["summer"],
    ["mustard plants" , "/" , "mustard"],
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
          <h5 className='mt-1 text-xl mb-2'>Roman shipbuilding and navigation</h5> <br />


        </div>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>Shipbuilding today is based on science and ships are built using computers and sophisticated tools. Shipbuilding in ancient Rome, however, was more of an art relying on estimation, inherited techniques and personal experience. The Romans were not traditionally sailors but mostly land-based people, who learned to build ships from the people that they conquered, namely the Greeks and the Egyptians.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>There are a few surviving written documents that give descriptions and representations of ancient Roman ships, including the sails and rigging. Excavated vessels also provide some clues about ancient shipbuilding techniques. Studies of these have taught us that ancient Roman shipbuilders built the outer hull first, then proceeded with the frame and the rest of the ship. Planks used to build the outer hull were initially sewn together. Starting from the 6th century BCE, they were fixed using a method called mortise and tenon, whereby one plank locked into another without the need for stitching. Then in the first centuries of the current era, Mediterranean shipbuilders shifted to another shipbuilding method, still in use today, which consisted of building the frame first and then proceeding with the hull and the other components of the ship. This method was more systematic and dramatically shortened ship construction times. The ancient Romans built large merchant ships and warships whose size and technology were unequalled until the 16th century CE.</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>Warships were built to be lightweight and very speedy. They had to be able to sail near the coast which is why they had no ballast or excess load and were built with a long, narrow hull. They did not sink when damaged and often would lie crippled on the sea’s surface following naval battles. They had a bronze battering ram, which was used to pierce the timber hulls or break the oars of enemy vessels. Warships used both wind (sails) and human power (oarsmen) and were therefore very fast. Eventually, Rome’s navy became the largest and most powerful in the Mediterranean, and the Romans had control over what they therefore called Mare Nostrum meaning ‘our sea’.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>There were many kinds of warship. The ‘trireme’ was the dominant warship from the 7th to 4th century BCE. It had rowers in the top, middle and lower levels, and approximately 50 rowers in each bank. The rowers at the bottom had the most uncomfortable position as they were under the other rowers and were exposed to the water entering through the oar-holes. It is worth noting that contrary to popular perception, rowers were not slaves but mostly Roman citizens enrolled in the military. The trireme was superseded by larger ships with even more rowers. <br /> <br />

          Merchant ships were built to transport lots of cargo over long distances and at a reasonable cost. They had a wider hull, double planking and a solid interior for added stability. Unlike warships, their V-shaped hull was deep underwater, meaning that they could not sail too close to the coast. They usually had two huge side rudders located off the stern and controlled by a small tiller bar connected to a system of cables. They had from one to three masts with large square sails and a small triangular sail at the bow. Just like warships, merchant ships used oarsmen, but coordinating the hundreds of rowers in both types of ship was not an easy task. In order to assist them, music would be played on an instrument, and oars would then keep time with this.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span>The cargo on merchant ships included raw materials (e.g. iron bars, copper, marble and granite), and agricultural products (e.g. grain from Egypt’s Nile valley). During the Empire, Rome was a huge city by ancient standards of about one million inhabitants. Goods from all over the world would come to the city through the port of Pozzuoli situated west of the bay of Naples in Italy and through the gigantic port of Ostia situated at the mouth of the Tiber River. Large merchant ships would approach the destination port and, just like today, be intercepted by a number of towboats that would drag them to the quay. <br /> <br />


          The time of travel along the many sailing routes could vary widely. Navigation in ancient Rome did not rely on sophisticated instruments such as compasses but on experience, local knowledge and observation of natural phenomena. In conditions of good visibility, seamen in the Mediterranean often had the mainland or islands in sight, which greatly facilitated navigation. They sailed by noting their position relative to a succession of recognisable landmarks. When weather conditions were not good or where land was no longer visible, Roman mariners estimated directions from the pole star or, with less accuracy, from the Sun at noon. They also estimated directions relative to the wind and swell. Overall, shipping in ancient Roman times resembled shipping today with large vessels regularly crossing the seas and bringing supplies from their Empire.
        </p>
      </div>
    </section>
  )
}

export default Panel1