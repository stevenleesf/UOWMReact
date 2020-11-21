import React from 'react';
import "../../Information.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function ike() {


    return (

        <>
            <div className="container_details">
                <div className="row_details"
                    style={{ display: "flex" }}>
                    <div className="col-personal-logo" for="ike">
                        <img src="./images/boy.png" alt="phua" ></img>
                        <h1>Associate Professor Ts. Tan Chin Ike</h1>
                        <br></br>
                        <p class="title">Head of School – Computing & Creative Media</p>
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
                                        A Design graduate, Associate Professor Ts. Tan Chin Ike was involved in digital effects for many years before venturing into the academic world. In 2003, he embarked on a career changing move by taking his Masters and delving at the same time into Game Design at a renowned Game Development University in the UK.

                                        In 2011, he joined UOW Malaysia KDU University College and subsequently establish the Bachelor of Game Development program there. A year later, he was given the privilege to establish MYGAMEDEV(EPP14), an Entry Point Project under the Economic Transformation Programme (ETP) and the National Key Economic Area (NKEA) for Education. MYGAMEDEV is a strategic collaboration between educational institutions and the Malaysian Game Development Industry to build awareness and talents for the local Industry.

                                        He has also contributed in other academic aspects of Game Development such as being appointed a panellist for the Multimedia Development Corporation (MDeC) Industry-Academia Panel, an appointed panel of expert for the Malaysian Qualifications Agency (MQA) Program Standards for Creative Multimedia and curriculum advisory panel member for the Polytechnic Education Programme under the Ministry of Higher Education Malaysia. He has recently also received his Professional Technologist credentials from the Malaysian Board of Technologist (MBOT) and been appointed as a Professional Evaluation Panel Member for MBOT.
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
                                    <p><strong>PhD </strong></p>
                                    <p>(Game-based Learning) University Pendidikan Sultan Idris (UPSI) (Present)</p>
                                    <br></br>
                                    <p><strong>MSc. in Computing </strong></p>
                                    <p>(University of Teesside, Middlesbrough, UK (2005) </p>
                                    <br></br>
                                    <p><strong>Diploma in Graphic Design Technology</strong></p>
                                    <p> Limkokwing Institute of Creative Technology (1995)</p>
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




export default ike
