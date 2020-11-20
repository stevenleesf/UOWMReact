import React, { useState, useEffect } from 'react'
import "./Information.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AuthService from "../services/TutorialService.js";
import AuthService2 from "../services/auth-service";
import { Link } from 'react-router-dom';
import { Button } from './Button';

const PhuaInfo = props => {
    const initialTutorialState = {
        id: null,
        title: "",
        description: "",
        published: false
    };
    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [currentUser, setCurrentUser] = useState(undefined);
    const getTutorial = id => {
        AuthService.getInfo(id)
            .then(response => {
                setCurrentTutorial(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        getTutorial(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(() => {
        const user = AuthService2.getCurrentUser();

        if (user) {
            if (user.roles.includes("ROLE_MODERATOR") ) {
                console.log(user.roles.includes("ROLE_MODERATOR") )
                setCurrentUser(user);
            }


        }
    }, []);


    return (


        <>

            <div className="container_details">
                <div className="row_details"
                    style={{ display: "flex" }}>
                    {currentUser ? (
                        <div className="col-personal-logo">
                            <img src={currentTutorial.img} alt={currentTutorial.alt} className="personal-image" />
                            <h2>{currentTutorial.name}</h2>
                            <p>Age:{currentTutorial.age}</p>
                            <p>Gender:{currentTutorial.gender}</p>
                            <p></p>
                            <Link to= {`/updateStaff/${currentTutorial.id}`} className='btn-link'>
                                <Button buttonStyle='btn--outline' buttonColor='blue' >Edit</Button>
                            </Link>
                        </div>
                        ) : (
                            <div className="col-personal-logo">
                                <img src={currentTutorial.img} alt={currentTutorial.alt} className="personal-image" />
                                <h2>{currentTutorial.name}</h2>
                                <p>Age:{currentTutorial.age}</p>
                                <p>Gender:{currentTutorial.gender}</p>
                                <p></p>
                            </div>
                        )}
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

                                        {currentTutorial.bio}
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
                                    <p>{currentTutorial.qualification_acedemic}</p>
                                    <p><strong>Institution "PhD": </strong></p>
                                    <p>  {currentTutorial.institution_acedemic}</p>
                                    <p><strong>Qualification "Master": </strong> </p>
                                    <p>{currentTutorial.qualification_acedemic2}</p>
                                    <p><strong>Institution "Master": </strong></p>
                                    <p>  {currentTutorial.institution_acedemic2}</p>
                                    <p><strong>Qualification "Degree": </strong> </p>
                                    <p>{currentTutorial.qualification_acedemic3}</p>
                                    <p><strong>Institution "Degree": </strong></p>
                                    <p>  {currentTutorial.institution_acedemic3}</p>

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
                                    <p> {currentTutorial.organisation}</p>
                                    <p><strong>Role:</strong> </p>
                                    <p> {currentTutorial.role}</p>
                                    <p><strong>Year: </strong></p>
                                    <p> {currentTutorial.year}</p>
                                    <p><strong>Level: </strong></p>
                                    <p> {currentTutorial.level}</p>

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
                                    <p> {currentTutorial.role_admin}</p>
                                    <p><strong>Level: </strong></p>
                                    <p> {currentTutorial.level_admin}</p>
                                    <p><strong>Start: </strong> </p>
                                    <p>{currentTutorial.start_admin}</p>
                                    <p><strong>End: </strong></p>
                                    <p> {currentTutorial.end_admin}</p>

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
                                    <p>{currentTutorial.area_expertise}</p>
                                    <p>{currentTutorial.area_expertise2}</p>
                                    <p>{currentTutorial.area_expertise3}</p>
                                    <p>{currentTutorial.area_expertise4}</p>
                                    <p>{currentTutorial.area_expertise5}</p>


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
                                    <p>{currentTutorial.book_pub}</p>
                                    <p><strong>Book Chapter:</strong>  </p>
                                    <p>{currentTutorial.chp_book_pub}</p>

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
                                    <p>{currentTutorial.title_Areas}</p>
                                    <p><strong>Role: </strong></p>
                                    <p>{currentTutorial.role_Areas}</p>

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
                                    <p>{currentTutorial.title_consult}</p>
                                    <p><strong>Role:</strong> </p>
                                    <p>{currentTutorial.role_consult}</p>
                                    <p><strong>From To Until:</strong> </p>
                                    <p>{currentTutorial.fromTo_consult}</p>
                                    <p><strong>Organisation:</strong> </p>
                                    <p>{currentTutorial.organisation_consult}</p>

                                    <p><strong>Project title: </strong></p>
                                    <p>{currentTutorial.title_consult2}</p>
                                    <p><strong>Role:</strong> </p>
                                    <p>{currentTutorial.role_consult2}</p>
                                    <p><strong>From To Until:</strong> </p>
                                    <p>{currentTutorial.fromTo_consult2}</p>
                                    <p><strong>Organisation:</strong> </p>
                                    <p>{currentTutorial.organisation_consult2}</p>

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
                                    <p>{currentTutorial.award}</p>
                                    <p><strong>Awarding Institution:</strong></p>
                                    <p> {currentTutorial.institution_award}</p>
                                    <p><strong>Year: </strong></p>
                                    <p>{currentTutorial.year_award}</p>

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
                                    <p> {currentTutorial.activity_contribute}</p>
                                    <p><strong>Role: </strong></p>
                                    <p>{currentTutorial.role_contribute}</p>
                                    <p><strong>Timeline:</strong> </p>
                                    <p>{currentTutorial.fromTo_contribute}</p>

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
                                    <p> {currentTutorial.name_degree}</p>
                                    <p><strong>Name of Candidates: </strong></p>
                                    <p>{currentTutorial.name_candidates}</p>
                                    <p><strong>Title of Thesis:</strong></p>
                                    <p> {currentTutorial.title_thesis}</p>
                                    <p><strong>Academic level:</strong></p>
                                    <p>{currentTutorial.academic_level}</p>

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
                                    <p>{currentTutorial.course_teach}</p>
                                    <p><strong>Academic Session: </strong></p>
                                    <p>{currentTutorial.academic_teach}</p>
                                    <p><strong>Number of Student: </strong></p>
                                    <p>{currentTutorial.number_student_teach}</p>
                                    <p><strong>Number of Contact Hour:</strong> </p>
                                    <p>{currentTutorial.hourContact_teach}</p>

                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>




                </div>

            </div>


        </>


    )
}




export default PhuaInfo
