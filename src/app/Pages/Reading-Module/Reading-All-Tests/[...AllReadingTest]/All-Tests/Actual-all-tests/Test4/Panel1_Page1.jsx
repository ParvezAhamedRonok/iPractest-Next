import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";

 




function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["E"], ["B"], ["D"], ["A"], ["C"], ["B"], ["F"], ["C"], ["E"], ["A"],
    ['flexi-time', "/", 'FLEXI-TIME', "/", 'Flexi-Time', "/", 'Flexi-time', "/", 'flexi time', "/", 'Flexi time', "/", 'FLEXI TIME'],
    ['raw recruit', "/", 'RAW RECRUIT', "/", 'Raw recruit'],
    ['binge-work', "/", 'BINGE-WORK', "/", 'Binge-Work', "/", 'Binge-work', "/", 'binge work', "/", 'BINGE WORK', "/", 'Binge work', "/", 'Binge Work'],
    ["ii"], ["viii"], ["x"], ["xi"], ["vi"], ["ix"], ["vii"], ["iii"], ["i"], ["v"], ["C"], ["A"], ["B"], ["YES"], ["YES"], ["NO"], ["YES"], ["NO"], ["NOT-GIVEN"], ["YES"],
    ["size", "/", "SIZE", "/", "Size"],
    ["conjecture", "/", "Conjecture", "/", "CONJECTURE"],
    ["shape", "/", "SHAPE", "/", "Shape"],
    ["influence", "/", "INFLUENCE", "/", "Influence"],
    ["testing", "/", "Testing", "/", "TESTING"],
    ["detail","/","Detail","DETAIL"],
    ["decision makers", "/", "Decision Makers", "/", "Decision makers", "/", "DECISION MAKErS"]
  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
          <div className=''>SECTION 1 <br /> Reading Passage 1 <br /> Questions 1-13</div> <br /> 
          <div className="mt-2 mb-3">Life beyond pay</div><br /> 
        </div>
      </div>

      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span> A new magazine was published in America this month. Success is the resurrection of a title first published in 1897 by Orison Swett Marden, an entrepreneur and author of a series of self-help books, including “Getting the Most Out of Life”. The magazine's publisher, Joseph Guerriero, wants today's Success to reflect the contemporary workplace, where, he says, success is measured less by money and titles, and more by what is sweepingly referred to as “work-life balance”. The first issue contains an article about men leaving work to become full-time fathers.
        </p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span> Improving the balance between the working part of the day and the rest of it is a goal of a growing number of workers in rich Western countries. Some are turning away from the ideals of their parents, for whom work always came first; others with scarce skills are demanding more because they know they can get it. Employers, caught between a falling population of workers and tight controls on immigration, are eager to identify extra perks that will lure more “talent” their way. Just now they are focusing on benefits (especially flexible working) that offer employees more than just pay.</p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>Some companies saw the change of mood some time ago. IBM has more than 50 different programmes promoting work-life balance and Bank of America over 30. But plenty of other firms remain unconvinced and many lack the capacity to cater to such ideas even if they wanted to. Helen Murlis, with Hay Group, a human-resources consultancy, sees a widening gap between firms “at the creative end of employment” and those that are not.
        </p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>The chief component of almost all schemes to promote work-life balance is flexible working. This allows people to escape rigid nine-to-five schedules and work away from a formal office. IBM says that 40% of its employees today work off the company premises. For many businesses, flexible working is a necessity. Globalisation has spread the hours in which workers need to communicate with each other and increased the call for flexible shifts. Nella Barkley, an American who advises companies on work-life balance, says that large firms are beginning to understand the value of such schemes, “but only slowly”. For most of them, they still mean little more than child care, health care and flexible working.n.
        </p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> Yet some schemes go well beyond these first steps. American Century Investments, an investment manager in Kansas City, pays adoption expenses and the cost of home-fitness equipment for its employees. Rob Marcolina, a gay consultant with Bain & Company based in Los Angeles, was allowed time off to marry his partner in Canada, and another break to look after their daughter when she was born to a surrogate mother. Mr Marcolina, who has an MBA from the high-ranked Kellogg business school, says his employer's understanding makes him want to be “part of Bain for some time”.
        </p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span>  Businesses have other good reasons for improving employees' work-life balance. Wegmans Food Markets, a grocery chain based in Rochester, New York, frequently appears near the top of lists of the best employers in America. It has a broad range of flexible-work programmes, which gives it one of the lowest rates of employment turnover in its industry—8% a year for full-time workers, compared with 19% across the industry.
        </p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span> Simple programmes can be surprisingly cost-effective. IBM, for instance, is spending $50m over five years on “dependant-care” facilities for its employees. Although that sounds generous, it is the equivalent of little more than $30 for each IBM employee every year. That is far cheaper than a pay rise and probably a better way to retain talented mothers and fathers. Ernst & Young, a global accounting firm, has a low-cost range of initiatives called “People First”. It provides breaks for people to provide care and has over 2,300 flexi-time employees in the United States. James Freer, a senior executive, says he is “absolutely convinced” the initiatives help produce better financial results.
        </p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>H</span> DeAnne Aguirre, a mother of four and a senior partner in San Francisco with Booz Allen Hamilton (BAH), says “it is easy to make the business case” for work-life balance programmes at the consultancy by looking at attrition rates. BAH calculated that it was investing more than $2m in turning a raw recruit into a partner, an investment it should be reluctant to write off. Corning, an American glass company, reckons that it costs 1.5 times a worker's salary and benefits to replace him. If it can retain just 20 workers a year who would otherwise have left, Corning reckons it would produce annual savings of $2.6m.
        </p>
      </div>
      <div className="mt-2 mb-3">
        <p className=''>
          <span className='text-xl font-bold mr-2'>I</span>Business schools are now climbing on the bandwagon, too. In October Tuck School at Dartmouth, New Hampshire, will start a course on returning to corporate life after an extended absence. Called “Back in Business”, the 16-day, $12,000 re-entry programme is open only to students with “work experience in a high-potential career”. The majority will inevitably be mothers wanting to rejoin the workforce. But fathers are also asking for sabbaticals. Work-life balance “is not just a women's issue” any more, says Ted Childs, who is in charge of workforce diversity at IBM. “Men, too, are very concerned about it.”
        </p>

        <p className=''>
          <span className='text-xl font-bold mr-2'>J</span>The demand is being stoked by the “Generation Y”, the under-28s. They look sceptically at the idea of lifetime employment within a single organisation and they are wary of the commitment they believe too often drove their parents to the divorce courts. Hay's Ms Murlis says that today's business-school graduates are “looking for a workstyle to go with their lifestyle”, not the other way round. They are happy to binge-work for a while, but in return want extended sabbaticals in which to chill out.
        </p>
      </div>

    </section>
  )
}

export default Panel1