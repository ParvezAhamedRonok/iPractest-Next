import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";



function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["TRUE"], ["TRUE"], ["NOT GIVEN"], ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["NOT GIVEN"],
    ["height restrictions", "/", "Height restrictions", "/", "HEIGHT RESTRICTIONS"],
    ["disney", "/", "Disney", "/", "DISNEY"],
    ["Cloud Cuckoo Land", "/", "Cloud cuckoo land", "/", "CLOUD CUCKOO LAND"],
    ["Battle Galleons", "/", "Battle galleons", "/", "BATTLE GALLEONS"],
    ["high cost", "/", "High cost", "/", "HIGH COST"],
    ["in advance", "/", "In advance", "/", "IN ADVANCE"],
    ["a picnic", "/", "A picnic", "/", "A PICNIC"],
    ["E"], ["A"], ["F"], ["C"], ["B"], ["E"], ["NOT GIVEN"], ["TRUE"], ["NOT GIVEN"], ["FALSE"], ["TRUE"],
    ["NOT GIVEN"], ["FALSE"], ["x"], ["iii"], ["vi"], ["viii"], ["ii"], ["ix"], ["vii"], ["i"], ["iv"], ["C"], ["A"], ["C"], ["B"]
  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit'>
        <div className="Titles text-xl font-bold mb-2 text-justify mt-2">
          <div className=''>SECTION 1 <br /> Questions 1 - 14</div>
          <div>Read the text and answer Questions 1 - 7</div> <br />
          <div>How to Get Here</div>
          <div>Flying to Colorado</div>
        </div> <br />
        <p className='text-justify text-inherit'>Save time and money when you book your flights as part of your vacation package. Simply call 877-734-4479. We can save you up to 30%, eliminate the advance purchase penalties, allow you to change your passenger names and flights for free up to 30 days before travel, and avoid Saturday-night stay requirements. Keystone is easily accessible via:</p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Denver International Airport (DEN)</div>
        </div>
        <p className=''>
          Located just outside of Denver, the airport is 90 miles east of Keystone via Interstate 70. DIA is a nonstop destination for over 21 national and international carriers.
          Shuttles and car rentals via Hertz are available at the airport. Vail/Eagle County Airport (EGE) is 65 miles west of Keystone.
          Direct flights are available from: Atlanta, Charlotte, Chicago, Cincinnati, Dallas, Denver, Houston, Los Angeles, Minneapolis, New York/LGA, Newark, Philadelphia. Shuttles and car rentals via Hertz are available at the airport.
          Colorado Springs Municipal Airport is 109 miles from Keystone. Shuttles and car rentals via Hertz are available at the airport.
        </p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Ground Transportation</div>
        </div>
        <p className='text-justify'>
          Keystone is easily accessible from the Denver International Airport and Eagle County Airport. With onsite scheduled and private shuttle pick up and rental cars you will be on the slopes in no time.
        </p>
      </div>
      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Colorado Mountain Express (CME)</div>
        </div>
        <p className='text-justify'>
          Numerous, daily, door-to-door shuttles to and from Denver International Airport to Keystone. Colorado Mountain Express also offers private chauffeured travel with CME premier. Our Mountain Concierge can book your CME reservation for you as part of your vacation package.
        </p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Scheduled Shuttle Service via CME</div>
        </div>
        <p className='text-justify'>
          Colorado Mountain Express provides shuttles service to and from the resort throughout the day. Shuttle service is not available for flights arriving at the airport later than 8:30pm or departing earlier than 10:00am. Please consider booking a rental car if you are arriving or departing when the shuttle is not available.
        </p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Private Shuttle Service via CME</div>
        </div>
        <p className='text-justify'>
          Colorado Mountain Express provides shuttles service to and from the resort throughout the day. Shuttle service is not available for flights arriving at the airport later than 8:30pm or departing earlier than 10:00am. Please consider booking a rental car if you are arriving or departing when the shuttle is not available.  </p>
      </div>


      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Read the text and answer Questions 8 - 14 <br /> Theme Parks</div>
        </div>
        <p className='text-justify'>
          Over the past few weeks, I have had the pleasure - and for the most part it really has been a pleasure - of visiting five of our most popular theme parks. I have looked at new attractions, tested my nerves on the big-thrill rides and waited patiently in queues. I took along my sons, aged seven and four, to see which attractions they most enjoyed.
          Here are my findings. I hope they will help you decide which park best suits you and your family. Many of the rides have height restrictions, so to avoid disappointment, check details on the relevant website before you set off. With the exception of Legoland, the parks have cafés and restaurants that sell very run-of-the-mill fast food, so I have recommended picnic spots where appropriate
        </p>
      </div>

      <div>
        <div className=" text-inheritfont-bold mb-2 text-justify">
          <div>Alton Towers</div>
        </div>
        <p className='text-justify'>
          This is Britain's only proper theme park resort in the Disney mould. The park is set in attractive, expansive grounds around a ruined neo-Gothic mansion and there are two hotels and a water parkBest forA weekend break for all ages
        </p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>What's new?</div>
        </div>
        <p className='text-justify'>
          In an effort to improve its appeal to families with young children, the park has opened a high-quality aquarium, Sharkbait Reef by Sea Life. Also new is Cloud Cuckoo Land, which includes an impressive indoor soft play area and a rather average musical show.
        </p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Thumbs up</div>
        </div>
        <p className='text-justify'>
          The park's big draws are its daredevil, state-of-the-art roller-coasters which are genuine thrill rides. Those brave enough to tackle On Air are suspended under the track and "fly" face down. Rita has a terrifying high-speed launch. Oblivion is a sadistic, sheer drop into a black hole while Nemesis is said to be "The World's Most Intense Ride Experience" - it's not, but it is still a blast.
          There is excellent entertainment here for all the family. The amazingly elaborate Charlie and the Chocolate Factory ride is a highlight, ending with a simulated ride in a glass elevator. And if you are prepared to get absolutely soaked, Battle Galleons (basically a water pistol fight on a grand scale) is great fun.
          Best for small children
          Old MacDonald's Farmyard - much more charming than Cloud Cuckoo Land.
        </p>
      </div>
      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Thumbs down</div>
        </div>
        <p className='text-justify'>
          Given the high cost of admission, there are too many funfair stalls charging several pounds a go.
        </p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify mt-2">
          <div>Tips</div>
        </div>
        <p className='text-justify'>
          Plan your day carefully: given the size of the park, you don't want to find yourself zigzagging from one side to the other.
          Even on term-time weekdays, waits for the big rides can be more than half an hour, so consider investing in
          "Fastrack" tickets. There are various options: Fastrack Scream, for instance, allows you one ride each on Air, Nemesis and Oblivion for £8.
          Buy tickets in advance at www.altontowers.com Not only are they cheaper, but (new this year), you get access to some major rides an hour before the regular opening time.
          Alton Towers' enjoyable, Disneyesque hotels are a monorail ride from the park's entrance, and attached to a top-notch, Caribbean-themed and mostly indoor water park. Packages with theme-park entry include the early ride time privileges mentioned above.
          Best picnic spots: either on the lawns in front of the mansion, or in the tranquil landscaped gardens.
          0870 520 4060; www.altontowers.com Day tickets bought at the park: adults and over-11s, £36; ages 4-11, £27; family of four, £100.
        </p>
      </div> <br />

      <div>
        <div className="Titles text-xl font-bold mb-2 text-center  mt-3" >
          <div className=''> Questions 15 - 27</div>
          <div>Read the text and answer Questions 15 - 20</div>
          <div>Top 6 Art Exhibitions</div>

        </div> <br />
        <p className='text-justify'>
          Don't miss out on the best London exhibitions! Catch one of these great London exhibitions as chosen by our editorial team. For more London exhibitions see our London Arts Guide.
        </p>
      </div>
      <div>
        <div className=" text-xl font-bold mb-2 text-justify  mt-3" >
          <div className=''>A. Anish Kapoor: Turning the World Upside Down</div>
        </div>
        <p className='text-justify'>
          World-renowned sculptor Anish Kapoor once again creates a sensational London exhibition - this time in the open spaces of Kensington Gardens. Kapoor's series of imposing stainless-steel mirrored sculptures are gathered together for the first time in London, reflecting the luscious surrounds of the Royal Park. Until 13 Mar.
        </p>
      </div>
      <div>
        <div className=" text-xl font-bold mb-2 text-justify  mt-3" >
          <div className=''>B. Pioneering Painters: The Glasgow Boys 1880-1900</div>
        </div>
        <p className='text-justify'>
          The Glasgow Boys were a loose-knit group of painters who caused a stir in the late 19th-century art world with their experimental and ambitious work. Pioneering Painters is the first Glasgow Boys exhibition in London for more than 40 years, and includes more than 80 paintings. Until 23 Jan.
        </p>
      </div>
      <div>
        <div className=" text-xl font-bold mb-2 text-justify  mt-3" >
          <div className=''>C. Journey Through the Afterlife: Ancient Egyptian Book of the Dead</div>
        </div>
        <p className='text-justify'>
          Explore ancient Egyptian beliefs about the afterlife in a fascinating new exhibition at the British Museum. Journey Through the Afterlife: Ancient Egyptian Book of the Dead displays 3,500 year-old artefacts and documents including spells, haunting images and rituals that helped to prepare the dead for the afterlife. Until 6 Mar.
        </p>
      </div>
      <div>
        <div className=" text-xl font-bold mb-2 text-justify  mt-3" >
          <div className=''>D. GSK Contemporary - Aware: Art Fashion Identity</div>
        </div>
        <p className='text-justify'>
          GSK Contemporary takes over the Royal Academy's 6 Burlington Gardens building for the third year running, showcasing the work of 30 artists. This year the exhibition has a fashion theme, looking at how artists and designers use clothing to reveal elements of our identity. Until 30 Jan.
        </p>
      </div>
      <div>
        <div className=" text-xl font-bold mb-2 text-justify  mt-3" >
          <div className=''>E. Veolia Photographer of the Year</div>
        </div>
        <p className='text-justify'>
          See a stunning collection of images from the natural world as the prestigious Wildlife Photographer of the Year competition returns to London. The winner, runner-up and commended photograph in each category are on display at the Natural History Museum. Photos are of underwater scenes to urban wildlife. Until 11 Mar.
        </p>
      </div>

      <div>
        <div className=" text-xl font-bold mb-2 text-justify  mt-3" >
          <div className=''>F. The Unilever Series: Ai Weiwei</div>
        </div>
        <p className='text-justify'>
          Chinese artist Ai Weiwei has laid more than 100 million porcelain sunflower seeds in Tate Modern's Turbine Hall for this year's annual Unilever Series. Past commissions have included Doris Salcedo's crack in the floor, Louise Bourgeois' giant spider sculpture and Carsten Höller's slide. Until 25 Apr
        </p>
      </div>



    </section>
  )
}

export default Panel1