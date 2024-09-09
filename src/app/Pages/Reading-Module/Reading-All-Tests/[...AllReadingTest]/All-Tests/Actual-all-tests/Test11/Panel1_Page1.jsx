import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";



function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["x"], ["iii"], ["vi"], ["viii"], ["ii"], ["ix"], ["vii"], ["i"], ["iv"], ["C"], ["A"], ["C"], ["B"], ["D"], ["F"], ["B"], ["A"], ["F"],
    ["People"],
    ["center"],
    ["attractions"],
    ["cinema"],
    ["ethnically"],
    ["facilities"],
    ["measures"],
    ["reclaim"],
    ["C"], ["E"], ["D"], ["A"], ["B"], ["E"],
    ["mildew"],
    ["bug"],
    ["arrival"],
    ["fine-wine"],
    ["market"],
    ["validation"],
    ["globally"],
    ["B"]
  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />Questions 1-13</div>
          <div>LEISURE TIME IN AMERICA</div>
        </div>
      </div>

      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span> As most Americans will tell you if you can stop them long enough to ask, working people in the United States are as busy as ever. Sure, technology and competition are boosting the economy; but nearly everyone thinks they have increased the demands on people at home and in the workplace. But is the overworked American a creature of myth?
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span> A pair of economists have looked closely at how Americans actually spend their time. Mark Aguiar, at the Federal Reserve Bank of Boston and Erik Hurst, at the University of Chicago's Graduate School of Business constructed four different measures of leisure. The narrowest includes only activities that nearly everyone considers relaxing or fun; the broadest counts anything that is not related to a paying job, housework or errands as "leisure". No matter how the two economists slice the data, Americans seem to have much more free time than before. </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>Over the past four decades, depending on which of their measures one uses, the amount of time that working-age Americans are devoting to leisure activities has risen by 4-8 hours a week. For somebody working 40 hours a week, that is equivalent to 5-10 weeks of extra holiday a year. Nearly every category of American has more spare time: single or married, with or without children, both men and women. Americans may put in longer hours at the office than other countries, but that is because average hours in the workplace in other rich countries have dropped sharply.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>How then have Messrs Aguiar and Hurst uncovered a more relaxed America, where leisure has actually increased? It is partly to do with the definition of work, and partly to do with the data they base their research upon. Most American labour studies rely on well-known official surveys, such as those collected by the Bureau of Labour Statistics (BLS) and the Census Bureau, that concentrate on paid work. These are good at gleaning trends in factories and offices, but they give only a murky impression of how Americans use the rest of their time. Messrs Aguiar and Hurst think that the hours spent at your employer's are too narrow a definition of work. Americans also spend lots of time shopping, cooking, running errands and keeping house. These chores are among the main reasons why people say they are so overstretched, especially working women with children.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> However, Messrs Aguiar and Hurst show that Americans actually spend much less time doing them than they did 40 years ago. There has been a revolution in the household economy. Appliances, home delivery, the internet, 24-hour shopping, and more varied and affordable domestic services have increased flexibility and freed up people's time.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span> The data for Messrs Aguiar and Hurst's study comes from time-use diaries that American social scientists have been collecting methodically, once a decade, since 1965. These diaries ask people to give detailed information on everything they did the day before, and for how long they did it. The beauty of such surveys, which are also collected in Australia and many European countries, is that they cover the whole day, not just the time at work, and they also have a built-in accuracy check, since they must always account for every hour of the day.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span> Do the numbers add up? One thing missing in Messrs Aguiar's and Hurst's work is that they have deliberately ignored the biggest leisure-gainers in the population, the growing number of retired folk. The two economists excluded anyone who has reached 65 years old, as well as anyone under that age who retired early. So America's true leisure boom is even bigger than their estimate
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>H</span> The biggest theoretical problem with time diaries is "multi-tasking". Do you measure the time you spend cleaning your house while listening to portable music as "leisure" or "work"? This problem may be exaggerated: usually people seem to combine two work activities, using a laptop computer on a plane, or two leisure ones, watching television and doing something else. The two economists counted many combinations of work and leisure, such as reading a novel while commuting or goofing off on the internet at the office, as time spent working.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>I</span>Is all this leisure a good thing? Some part-time workers might well wish they had less leisure and more income. For most Americans, however, the leisure dividend appears to be a bonus. Using average hourly wages after tax, Steven Davis, a colleague of Mr Hurst's, reckons that the national value of five extra hours of leisure per week is $570 billion, or $3,300 per worker, every year.
        </p>
      </div>

      <div className='text-inherit Titles mb-2 mt-[40px]'>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div className=''>Reading Passage 2 <br />Questions 14-26</div> <br />
          <div>RECLAIMING THE NIGHT</div> <br />
        </div>
      </div>

      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span> On a summer's day, apart from the intermittent drizzle and lowering sky, South Street in Romford looks as close to an Englishman's dream of a continental-style piazza as it is possible to get. Leafy trees line the extended pavements crowded with seats and tables as young families, pensioners, teenagers and businessmen tuck into a variety of faux-European dishes for lunch. Local cafes serve the full range of meaningless variations on the theme of coffee, from cappuccino through mochaccino to doppos, all at top prices. Round the corner, in the Market Place, it is French week. There are several stalls, complete with real Frenchmen, selling claret and cheeses.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span> The cafes are open during the day, and the clubs stay open until two or three in the morning most nights. In this respect, Romford is typical of contemporary Britain. In the late 1980s, the centres of many towns and cities went into decline as retailers, and particularly supermarkets, moved to new big, out-of-town shopping centres. So in the early 1990s, many local councils, in league with local businesses, re-developed their increasingly desolate town centres into "leisure zones". They looked to continental Europe for the inspiration to create modern 24-hour environments, mixing cafes, bars and clubs to keep people in the centres spending money for as long as possible. </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>By night however, South Street turns into a very different place. The street becomes a mass of 18-26-year-olds, drinking as much as they can. For anyone else, the place becomes almost a no-go area. Gillian Balfe, the council's town-centre manager and a strong supporter of the "leisuring" of South Street, concedes that the crowds become uncontrollable, and the atmosphere quickly turns "hostile and threatening". Buses are now barred from going down South Street after 9.30pm: there are too many drunken people milling about.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>In a survey for the local council done last year, 49% of the residents of the surrounding areas of South Street confessed that they did not want to come to the city centre any more for fear of crime. The local police concede that they are virtually overwhelmed. Violence is commonplace. There has only been one consequent fatality in the area in the past couple of years, but the police say that this is mainly thanks to the merciful proximity of the local hospital. Romford's dilemma is typical of what has happened in the other "leisure zones" in towns and cities throughout the country. What were meant to be civilised places for entertainment and shopping have too often turned into alcoholic ghettos for the young..
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span>  For all the problems, however, Romford's local authority thinks that the idea of a 24-hour-city is already too profitable to be stopped. Local authorities think that new repressive legislation, or even a decision not to reform the licensing laws, would be unworkable. So instead of trying to pack everyone back off to bed, Romford is trying to reclaim the town centre for a broader mix of people, and so to fulfil the original ambitions of the 24-hour-city dreamers
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span> The first part of the strategy involves security. The police accept that, with their current resources, they will never be able to make South Street safe on their own. So they now work closely with the 528 "door-staff", previously known as bouncers, to target drug-dealers in the bars and clubs. In the year since that scheme came into effect, there have been more than 300 arrests for drugs. In the six months before that, there had been only one. All the premises now have a radio link to the police station for an instant response to trouble.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span> The second part of the strategy involves trying to encourage more, and different kinds of people to use the town centre at night. New attractions are opening next year to rival the pubs. On the site of the old Romford brewery there will be a 16-screen cinema and a 24-hour supermarket. A new health and leisure centre, open on some nights until 9pm, starts up soon. The hope is that these facilities will draw in a different, more sober and ethnically diverse crowd. The police have bravely encouraged one club to start a gay night on Wednesdays
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>H</span> Together with other measures such as better street lighting, Romford hopes that it can show that the phrase "24-hour city" can be more than a euphemism for an all-night drinkathon. As the new licensing laws delegate the job of granting alcohol licences to local councils, cities across England will be trying to reclaim the night.
        </p>
      </div>

    </section>
  )
}

export default Panel1