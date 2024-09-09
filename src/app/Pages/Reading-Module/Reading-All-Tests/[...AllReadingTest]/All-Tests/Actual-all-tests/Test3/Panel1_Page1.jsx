import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";


function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["E"], ["F"], ["H"], ["I"], ["G"], ["J"], ["A"], ["TRUE"], ["NOT GIVEN"], ["TRUE"], ["FALSE"], ["NOT GIVEN"], ["FALSE"],
    ["tickets to fabric", "/", "Tickets to Fabric", "/", "TICKETS TO FABRIC", "/", "Tickets to fabric"],
    ['brand names', '/', 'Brand Names', "/", 'Brand names', "/", "BRAND NAMES"],
    ["the gem", "/", "The gem", "/", "THE GEM"],
    ["1900", "/", "Nine Hundred"],
    ["right wire", "/", "Right wire", "/", "Right Wire", "/", "RIGHT WIRE"],
    ["cheaper than", "/", "Cheaper than", "/", "Cheaper Than", "/", "CHEAPER THAN"],
    ["patents", "/", "Patents", "/", "PATENTS"],
    ["securely", "/", "Securely", "/", "SECURELY"],
    ["B"], ["C"], ["A"], ["C"], ["C"], ["A"], ["E"], ["B"], ["D"], ["A"], ["C"], ["B"], ["F"], ["C"], ["E"], ["A"],
    ["flexi-time", "/", "Flexi-time", "/", "Flexi-Time"],
    ["raw recruit", "/", "Raw recruit", "/", "RAW RECRUIT"],
    ["binge-work", "/", "Binge-work", "/", "BINGE-WORK"]
  ]
  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>READING PASSAGE 1</div>  <br />
          <h5>Read the text and answer Questions 1-7</h5>
          <div>Reduce Stress at Work</div> <br />
          <div>Here's how:</div> <br />
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>A</span>
          Improve your time management and organization skills.<br /> <br />
          Of the many things you can to in this area the best ones include getting a to do list that works, learning to say "no", asking for help when you need it, and stop setting unrealistic goals for yourself.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>B</span>
          Relax and breathe deeply.<br /> <br />
          Whether you are feeling overwhelmed by the amount or work you have to do or if someone is "in your face", a good thing to do is to "breathe through your nose". You can't get as worked up if you force yourself to breathe through your nose. Your body simply can't maintain the same level of energy without that extra oxygen you get when breathing through your mouth.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>C</span>
          Take more breaks from your work.
          Even a five-minute break will help. Get away from your desk. Go for a walk - outside is better, but up two flights of stairs and back down is good too. Getting more exercise in general will help you reduce your overall stress levels and that will make it easier to reduce your stress level at work.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>D</span>
          Lighten up.<br /> <br />
          Smile more. We all know laughter reduces stress. You will be amazed at how much more pleasant the people around you are when you make an effort to be pleasant yourself.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>E</span>
          Learn to listen better.<br /> <br />
          Rather than getting upset when others disagree with you, listen actively and find the areas of agreement. Be assertive and stand up for yourself, but don't be rigid.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>F</span>
          Fix your environment.<br /> <br />

          Make whatever adjustments you need to the lighting, temperature, noise level, and other controllable factors in your office.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>G</span>
          Don't sweat the small stuff.<br /> <br />

          Realize that there are some things that just aren't worth worrying about and there are some things you just can't change. Don't waste time stressing over the things in either category.
        </p>


        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>H</span>
          Get more sleep.<br /> <br />

          This is another of the things you can do to reduce your overall stress that will have benefits at the office as well. In addition to reducing your stress, it will increase your energy level and your ability to concentrate
        </p>

        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>I</span>
          Find a mentor.<br /> <br />

          If not a mentor, a friend will do. Having someone to talk to can take a lot of stress off you.
        </p>

        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>J</span>
          Spend more time with optimistic people. <br /> <br />

          Negative people will pull you down to their level. Choose to work with people who have a positive attitude instead.
        </p>
      </div> <br />

      <div>
        <div className="Titles text-inherit  mb-2 text-justify">
          <div className='font-bold'>Read the text and answer Questions 8-13</div> <br />

        </div>
        <p className='pl-3'>Part time Job  <br />
          Legal Assistant - Litigation <br />
          Job Reference: <br />
          JSVC-6012 <br />
          Employer Agency Name: <br />
          Charterhouse Group <br />
          Location: <br />
          Perth <br />
          Category: <br />
          Legal <br />
          Date Posted: <br />
          12/01/2011 <br />
          Job Description:</p> <br />
      </div>


      <p className='text-justify mb-3'>
        CBD Location, top tier firm. This renowned well respected legal firm who is a market leader has a requirement for an experienced Legal Assistant with a background in litigation. As the Legal Assistant your duties will include but not be limited to: <br /> <br />

        -- Preparation, editing and formatting of legal documents and correspondence --- Liaising with clients and internal departments
        <br /> <br />-- Diary and file management  Monthly billing<br /> <br />

        » Typing of documentation (dictaphone and copy)

        » Providing general administrative support to legal team<br /> <br />

        To be considered for this Legal Assistant role you will have experience in a similar role, with a background in litigation, a certificate in legal secretarial studies, excellent communication skills written and verbal, the ability to problem solve, a positive a "can do" attitude and be able to work in a professional and flexible manner. This together with your professional, proactive outlook will see you secure this rare opportunity. In return, your experience will be rewarded with a great team working environment and a salary to match your experience.<br /> <br />

        If you meet the above criteria and are an experienced Legal Assistant that enjoys a challenge and want to work with a busy, dynamic team, then this is the role that you have been waiting for. Apply by sending your Resume.
      </p>
      <br /> <br />

      <div>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div>Read the text and answer Questions 14-21</div> <br />
          <div>The Paper Clip</div>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>A</span>
          When were bent-wire paper clips introduced? The first bent-wire paper clip was patented by Samuel B. Fay in 1867. This clip was originally intended primarily for attaching tickets to fabric, although the patent recognized that it could be used to attach papers together. We have found no advertisement or other mention for the Fay paper clip before 1899, and it therefore appears unlikely that it had significant, if any, sales prior to the late 1890s. However, beginning in 1899 and for decades thereafter, the Fay design was widely advertised under many brand names for use in fastening papers.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>B</span>
          The Gem paper clip, which was never patented, but which eventually became by far the best selling paper clip in the U.S., has been advertised since 1894, and may have been introduced in 1892
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>C</span>
          A patent application filed at the end of 1896 indicated that a number of different paper clips were in use. A flood of paper clip patents were issued beginning in 1897. This evidence indicates that bent-wire paper clips came into widespread use in offices in the late 1890s. A 1900 trade publication stated that "The wire clip for holding office papers together has entirely superseded the use of the pin in all up-to-date offices."
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>D</span>
          Why weren't bent-wire paper clips marketed earlier? According to Petroski, "Steel wire was still new in the second half of the nineteenth century. The widespread manufacture and use of the paper clip had to await not only the availability of the right wire but also the existence of machinery capable of tirelessly and reliably bending it in a flash into things that could be bought for pennies a box." (Henry Petroski, "From Pins to Paper Clips," The Evolution of Useful Things, Vintage, New York, 1992, p. 60)
        </p>
        <p className='text-justify mb-3'>
          <span className='text-xl font-bold mr-2'>E</span>
          With what products did paper clips compete most closely? The two earliest patents indicate that bent-wire paper clips could be used in lieu of pins, sewing, "pointed bent-over paper fasteners," and eyelets. In 1904, Clinch Clips were advertised as "Cheaper than Pins." Around 1910 advertisements compare paper clips to straight pins for temporary attachment of papers. By contrast, early paper clip advertisements do not refer to staples.
        </p>
        <p className='text-justify mb-3'>
          <span className='text-inherit font-bold mr-2'>F</span>
          Why were bent-wire paper clips sold in so many different designs? Many designs were initially protected by patents. As a result, other manufacturers had to come up with different designs. Also, no single paper clip design is optimal for all purposes. In marketing paper clips, suppliers emphasized the superiority of their designs on one or two of the following characteristics:
        </p> <br />
        <p className='text-justify mb-3 ml-3'>
          1.Does not catch, mutilate, or tear papers <br /> <br />
          2.Does not get tangled with other clips in the box<br /> <br />
          3.Holds a thick set of papers<br /> <br />
          4.Holds papers securely<br /> <br />
          5.Is thinner and takes less space in files<br /> <br />
          6.Is easily inserted<br /> <br />
          7.Is light weight and requires less postage<br /> <br />
          8.Is cheap (e.g., because it uses less wire)<br /> <br />
        </p>
      </div>










    </section>
  )
}

export default Panel1