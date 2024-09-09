import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";





function Panel1_Page1({ AnswersData }) {
    //  submitted answers for showing at submit popup---------->>             
    let AllAnswersData = [
        ["FALSE"], ["TRUE"], ["NOT GIVEN"], ["FALSE"], ["FALSE"], ["TRUE"], ["TRUE"],
        ["storage"],
        ["extensive renovations"],
        ["more warrenlike"],
        ["aerial"],
        ["help"],
        ["aluminium cylinders"],
        ["TRUE"], ["FALSE"], ["FALSE"], ["TRUE"], ["TRUE"], ["A"], ["D"], ["B"],
        ["waterways"],
        ["emotions"],
        ["humble"],
        ["first"],
        ["expectations"],
        ["F"], ["B"], ["H"], ["G"], ["J"], ["A"], ["D"], ["C"], ["E"], ["I"], ["B"], ["B"], ["C"], ["B"]
    ]

    AnswersData(AllAnswersData)





    return (
        <section className='mainSection p-4 mb-[50px]'
        onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
            <div className='text-inherit Titles'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
                    <div className=''>SECTION 1<br />Reading Passage-1 , Questions 14-26</div> 
                    <div className="mt-2 mb-2">Flower power</div> <br />
                </div>
            </div>
            <div className="mt-2 mb-2">
                <div className="mt-2 mb-2">
                    <p className=''>
                        <span className='text-xl font-bold mr-2'>A</span>Alexandria in Virginia, USA, and particularly its well-tended Old Town section, is the sort of upscale suburb that rings most major American cities. From the array of pubs, sushi-restaurant chains and pasta joints that line its streets, you would never guess that within 20 minutes you can find some of the best Korean, Vietnamese, Chinese, Pakistani or Bolivian food in America. Its 18th-century homes have been carefully maintained; now that the nasty, dirty business of living in them is done, they are at last free to house upscale boutiques selling ornate pepper-shakers, local wine, birthday cakes for dogs and other essentials. Yet this suburb was a city before cars existed, making it especially dense, walkable and charming. It has also turned an instrument of war into an instrument of art.
                    </p>
                </div>
                <div className="mt-2 mb-2">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>B</span>The day after the armistice that ended the first world war in 1918, the United States Navy began building the US Naval Torpedo station on the waterfront across the Potomac and just downriver from the Naval Research Laboratory in south-west Washington, DC. After a brief period of production, it stored munitions between the wars. When the second world war broke out, it built torpedoes for submarines and aircraft; when that war ended, the building was again used for storage. In 1969, the local Alexandria government bought the site, which had grown to comprise 11 buildings, from the federal government..</p>
                </div>
                <div className="mt-2 mb-2">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>C</span> Five years later, after all the debris was removed and walls erected, the main building was refitted to house artists' studios. A quarter-century, and several extensive renovations, later the artists are still there: over 160 of them sharing 82 studios, six galleries and two workshops. The Art League School and the Alexandria Archaeology Museum also share the space, bringing in thousands more aspirants and students. All of this makes the Torpedo Factory, as it is now called, a low-key, family-friendly and craft-centred alternative to the many worthy galleries across the river
                    </p>
                </div>
                <div className="mt-2 mb-2">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>D</span>The building is three-storeys tall; on the first floor the studios and galleries are laid out along a single long hall. The arrangement grows more warrenlike, and the sense of discovery concomitantly more pleasant, as you ascend. Artists work in a variety of media, including painting, fibre, printmaking, ceramics, jewellery, stained glass and photography.
                    </p>
                </div>
                <div className="mt-2 mb-2">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>E</span> Don't anticipate anything game-changing or jaw-dropping here. Expect plenty of cats and cows in different media, as well as watercolours of beach houses, ersatz Abstract Expressionist paintings, stained glass made for the walls of large suburban houses, baubles and knick-knacks and thingummies galore. All of it is skilfully done; most of it is pleasant.
                    </p>
                </div>
                <div className="mt-2 mb-2">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>F</span>  The photography is an exception: the Multiple Exposures Gallery is first-rate, displaying not merely beautiful pictures but inventive techniques as well. On a recent visit the gallery showcased landscapes, including an especially arresting wide-angle aerial shot of a field in Fujian after a storm. Crops glinted in the rising sun like rows of wet sapphires, the scalloped grey clouds echoing the terraced farming beneath.
                    </p>
                </div>
                <div className="mt-2 mb-2">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>G</span> The Torpedo Factory's biggest draw, however, particularly for visitors with children, is not on what is sold but in the demystifying access visitors have to artists. While the galleries function traditionally, the artists work and sell out of the same studio; their raw materials and works in progress, the artistry behind the art, are all on display. Many of them are happy and eager to talk; one was soliciting the help of passers-by to complete a work, she wished to know how to say and write a certain phrase in Hebrew vernacular, a quest that might take time to complete in a yachty southern suburb. A metal sculptor sat on a stool patiently working a piece of metal back and forth in his hands. The centre of his studio was filled with a huge hollow sphere made from hundreds of cylinders of perhaps anodised aluminium. It seemed we were witnessing the first step in a thousand-mile march.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Panel1_Page1