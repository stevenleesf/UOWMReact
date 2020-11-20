import React from 'react';
import "./Information.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



function Information({ imgStart, img, alt, name, age, gender, bio, qualification_acedemic, institution_acedemic, organisation, role, year, level, role_admin, level_admin, start_admin, end_admin
    , area_expertise, book_pub, chp_book_pub, title_Areas, role_Areas, title_consult, role_consult, organisation_consult, fromTo_consult
    , award, institution_award, year_award, activity_contribute, fromTo_contribute, role_contribute, name_degree, name_candidates, title_thesis, academic_level, academic_teach, course_teach, hourContact_teach, number_student_teach
    , title_consult2, role_consult2, fromTo_consult2, organisation_consult2, area_expertise2, area_expertise3, area_expertise4, area_expertise5, qualification_acedemic2, institution_acedemic2, qualification_acedemic3, institution_acedemic3 }) {

        


    return (


        <>
            <div className="container_details">
                <div className="row_details"
                    style={{ display: "flex", flexDirection: imgStart === 'start' ? "row-reverse" : "row" }}>
                    <div className="col-personal-logo">
                        <img src={img} alt={alt} className="personal-image" />
                        <h2>{name}</h2>
                        <p>Age:{age}</p>
                        <p>Gender:{gender}</p>
                        <p></p>
                    </div>
                    <div className="col-personal">
                        <Accordion allowMultipleExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Biography
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                       
                                        {bio}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Academic Qualification
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Qualification "PhD": </strong> </p>
                                    <p>{qualification_acedemic}</p>
                                    <p><strong>Institution "PhD": </strong></p>
                                    <p>  {institution_acedemic}</p>
                                    <p><strong>Qualification "Master": </strong> </p>
                                    <p>{qualification_acedemic2}</p>
                                    <p><strong>Institution "Master": </strong></p>
                                    <p>  {institution_acedemic2}</p>
                                    <p><strong>Qualification "Degree": </strong> </p>
                                    <p>{qualification_acedemic3}</p>
                                    <p><strong>Institution "Degree": </strong></p>
                                    <p>  {institution_acedemic3}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Professional
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Organisation:</strong> </p>
                                    <p> {organisation}</p>
                                    <p><strong>Role:</strong> </p>
                                    <p> {role}</p>
                                    <p><strong>Year: </strong></p>
                                    <p> {year}</p>
                                    <p><strong>Level: </strong></p>
                                    <p> {level}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Administrative Duties
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Role: </strong></p>
                                    <p> {role_admin}</p>
                                    <p><strong>Level: </strong></p>
                                    <p> {level_admin}</p>
                                    <p><strong>Start: </strong> </p>
                                    <p>{start_admin}</p>
                                    <p><strong>End: </strong></p>
                                    <p> {end_admin}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Areas of Expertise
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Areas of Expertise: </strong> </p>
                                    <p>{area_expertise}</p>
                                    <p>{area_expertise2}</p>
                                    <p>{area_expertise3}</p>
                                    <p>{area_expertise4}</p>
                                    <p>{area_expertise5}</p>


                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Publication
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Article in  Academic Journals: </strong> </p>
                                    <p>{book_pub}</p>
                                    <p><strong>Book Chapter:</strong>  </p>
                                    <p>{chp_book_pub}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Areas of Researh
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Project title:</strong> </p>
                                    <p>{title_Areas}</p>
                                    <p><strong>Role: </strong></p>
                                    <p>{role_Areas}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Consultation Project/Consultancy
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Project title: </strong></p>
                                    <p>{title_consult}</p>
                                    <p><strong>Role:</strong> </p>
                                    <p>{role_consult}</p>
                                    <p><strong>From To Until:</strong> </p>
                                    <p>{fromTo_consult}</p>
                                    <p><strong>Organisation:</strong> </p>
                                    <p>{organisation_consult}</p>

                                    <p><strong>Project title: </strong></p>
                                    <p>{title_consult2}</p>
                                    <p><strong>Role:</strong> </p>
                                    <p>{role_consult2}</p>
                                    <p><strong>From To Until:</strong> </p>
                                    <p>{fromTo_consult2}</p>
                                    <p><strong>Organisation:</strong> </p>
                                    <p>{organisation_consult2}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Awards and Recognitions
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Name of Award:</strong> </p>
                                    <p>{award}</p>
                                    <p><strong>Awarding Institution:</strong></p>
                                    <p> {institution_award}</p>
                                    <p><strong>Year: </strong></p>
                                    <p>{year_award}</p>

                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Expert/ Technical Contributions
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Activity:</strong> </p>
                                    <p> {activity_contribute}</p>
                                    <p><strong>Role: </strong></p>
                                    <p>{role_contribute}</p>
                                    <p><strong>Timeline:</strong> </p>
                                    <p>{fromTo_contribute}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Supervision
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p><strong>Name of Degree:</strong> </p>
                                    <p> {name_degree}</p>
                                    <p><strong>Name of Candidates: </strong></p>
                                    <p>{name_candidates}</p>
                                    <p><strong>Title of Thesis:</strong></p>
                                    <p> {title_thesis}</p>
                                    <p><strong>Academic level:</strong></p>
                                    <p>{academic_level}</p>

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Teaching
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <p><strong>Course Title:</strong></p>
                                    <p>{course_teach}</p>
                                    <p><strong>Academic Session: </strong></p>
                                    <p>{academic_teach}</p>
                                    <p><strong>Number of Student: </strong></p>
                                    <p>{number_student_teach}</p>
                                    <p><strong>Number of Contact Hour:</strong> </p>
                                    <p>{hourContact_teach}</p>

                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>


                </div>

            </div>


        </>


    )
}




export default Information
