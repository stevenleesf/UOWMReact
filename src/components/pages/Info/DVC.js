import React from 'react';
import "../../Information.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function DVC() {


    return (

        <>
            <div className="container_details">
                <div className="row_details"
                    style={{ display: "flex" }}>
                    <div className="col-personal-logo">
                        <img src="./images/girl.png" alt="phua" ></img>
                        <h1>Professor Dr Hon Wei Min</h1>
                        <br></br>
                        <p class="title">Deputy Vice Chancellor – Academic</p>
                        <br></br>
                        <p>UOW KDU</p>
                        <br></br>
                    </div>
                    <div className="col-personal">
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Biography
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Professor Dr Hon Wei Min is the Deputy Vice Chancellor – Academic for UOW Malaysia KDU University College, a position she has held since April of 2013.

                                        As the Deputy Vice Chancellor, Dr Hon is responsible for overseeing the strategic development and enhancement of the UOW Malaysia KDU’s schools, academic programs and syllabuses.

                                        She led the development of various initiatives aimed at improving and enhancing academic delivery processes and she was also responsible for the development and improvement of academic programmes including designing and reviewing academic courses.

                                        Before joining the education industry, Dr Hon served as the Vice President for a fast-growing regional bio-technology company in Singapore where she spearheaded the Life Science business.

                                        Dr Hon began her career as a research scientist at a young age immediately after obtaining her PhD and has accumulated many years of research experience. She had also published many peered reviewed journals on the topics of biotechnology and molecular biology.

                                        To this day, Dr Hon continues to pursue her interest here and is still actively involved in various research projects. Her passion in this field is demonstrated through her continued nurturing of students’ research interest and assisting the many undergraduate and post graduate students to attain excellent academic credentials.

                                        Dr Hon graduated with a Bachelor of Science and a Bachelor of Science (Hons) from the National University of Singapore. She earned her doctorate (PhD) from the same university in 1997. She was a council member of the Singapore Society for Biochemistry and Molecular Biology (SSBMB) and member of the Malaysian Society for Biochemistry and Molecular Biology (MSBMB).
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Qualifications
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p><strong>PhD (National University of Singapore, 1993-1997)</strong></p>
                                    <p>Research project: Effect of adenosine on nitric oxide synthase expression during endotoxaemia.</p>
                                    <br></br>
                                    <p><strong>Bachelor of Science </strong></p>
                                    <p>(Honours in Biochemistry, Second Class, Upper Division) National University of Singapore, 1992-1993)
                                    Research project: Effect of Stonustoxin on platelet aggregatio. </p>
                                    <br></br>
                                    <p><strong>Bachelor of Science</strong></p>
                                    <p> (National University of Singapore, 1989-1992)</p>
                                    <br></br>
                                </AccordionItemPanel>
                            </AccordionItem>


                        </Accordion>
                    </div>


                </div>

            </div>


        </>


    )
}




export default DVC
