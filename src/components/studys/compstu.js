import React from 'react'
import './studys.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function compstu() {

    const displayPost = (
        <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
            <TabList>
                <Tab>Highlights</Tab>
                <Tab>Program Structure</Tab>
                <Tab>Study Route</Tab>
                <Tab>Fee Intakes</Tab>
                <Tab>Entry Requirement</Tab>

            </TabList>
            <TabPanel >
                <div className="res-info">
                    <div className="container-header-tab">
                        <h3>IDEAL SCHOOL FOR COMPUTER STUDIES – TAKE IT IN UOW MALAYSIA KDU</h3>
                        <br></br>
                    </div>
                    <div className="container-header-panel">
                        <p>“An all-inclusive syllabus that produces computing wizards & games maestros” </p>
                        <br></br>
                    </div>
                    <div className="container-header-tab">
                        <h3>THE BEST STREAMLINED SYLLABUS</h3>
                        <br></br>
                    </div>
                    <div className="container-header-panel">
                        <p>Our syllabus is a direct result of in-depth analysis and collaborations with industry partners to ensure our graduates are not only employable but desirable talents that can integrate seamlessly into the industry. It evolves to stay relevant to current industry needs and practices.</p>
                        <br></br>
                    </div>
                    <div className="container-header-tab">
                        <h3>Computing</h3>
                        <br></br>
                    </div>
                    <div className="container-header-panel">
                        <p>UOW Malaysia KDU recognises the need to integrate and diminish the gap between industry requirements, practice and technology and academic delivery. Irrespective of the computing stream students choose to study, our syllabus ensure they have a strong grasp in the fundamentals on computing, from programming, to using complex algorithms, and designing, building and testing of applications or systems –
                            all of which are critical in cultivating a graduate who is an analytical thinker and creative problem-solver. </p>
                        <br></br>
                        <p>UOW Malaysia KDU offers programmes in 3 out of the 4 major facets of computing (as stated by The Association for Computing Machinery, the world’s largest scientific and educational society for computing).</p>
                        <br></br>
                        <ul>
                            <li>Computer Science</li>
                            <li>Software Engineering</li>
                            <li>Information Systems</li>
                        </ul>
                        <br></br>
                        <p>“Our strong industry collaborations means students actively collaborate with potential future employers – before even graduating!”</p>
                        <br></br>
                    </div>
                    <div className="container-header-tab">
                        <h3>Strategic Partnerships</h3>
                        <br></br>
                    </div>
                    <div className="container-header-panel">
                        <p>We work with selected corporate industry and relevant organisations to obtain practical training materials and tools for knowledge transfer as well as the opportunity for events and networking. Students get a taste of real world experience in consultation with top technological companies such as IEEE Computer Society, and RapidMiner Master Reseller, Ouandatics (M) Sdn Bhd keeping updated with latest trends through projects and industry involvement. </p>
                        <br></br>
                        <img src="https://uowmkdu.edu.my/wp-content/uploads/2019/09/abc.png" alt="" width="392" height="131"></img>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="panel-row">
                    <div className="panel-col">
                        Duration:
                    </div>
                    <div className="panel-col-2">
                        2 years
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Programme Location:
                    </div>
                    <div className="panel-col-2">
                        UOW Malaysia KDU University College, Utropolis Glenmarie
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Core: Year 1
                    </div>
                    <div className="panel-col-2">
                        <ul>
                            <li>Computer Fundamentals</li>
                            <li>Computer Security</li>
                            <li>Computing Mathematics</li>
                            <li>Database Systems</li>
                            <li>Fundamentals of Object Oriented Programming</li>
                            <li>Fundamentals of Programming</li>
                            <li>Internet and Web Technologies</li>
                            <li>Multimedia Authoring</li>
                            <li>Object Oriented Systems Analysis and Design</li>
                            <li>User Interface Design</li>
                            <li>VB.Net Programming</li>
                            <li>Tertiary English 1</li>
                            <li>Tertiary English 2</li>
                        </ul>
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Core: Year 2
                    </div>
                    <div className="panel-col-2">
                        <ul>

                            <li>Creative Computing</li>
                            <li>Cloud Computing</li>
                            <li>Java Programming</li>
                            <li>Mobile Technology</li>
                            <li>Networking and Operating Systems</li>
                            <li>Professional Placement</li>
                            <li>Systems Administration and Management</li>
                            <li>Technopreneurship</li>
                        </ul>
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        MPU:
                    </div>
                    <div className="panel-col-2">
                        <ul>
                            <tr>Bahasa Kebangsaan A is compulsory for all Malaysian students</tr>
                            <li>without a credit in SPM Bahasa Malaysia.</li>
                            <li>without SPM Bahasa Malaysia (applicable to students from UEC, O Level, or other equivalent programs)</li>
                        </ul>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <img src="https://www.uowmkdu.edu.my/wp-content/uploads/2019/09/Studyroute-UOWMKDU-UG-Computing.png" alt="" width="1166" height="923"></img>
            </TabPanel>
            <TabPanel>
                <div className="panel-row">
                    <div className="panel-col">
                        Intake dates "2020" :
                    </div>
                    <div className="panel-col-2">

                        <li>13 January</li>
                        <li>26 March</li>
                        <li> 1 June</li>
                        <li>10 September</li>
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Estimated fees "2020" :
                    </div>
                    <div className="panel-col-2">

                        <tr>Local students</tr>
                        <li>RM42,340</li>
                        <br></br>
                        <tr>International students</tr>
                        <li>RM53,040</li>
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Notes "2020" :
                    </div>
                    <div className="panel-col-2">


                        <li>Terms and Conditions Apply</li>

                        <li>Instalment Payment Plan Available</li>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
            <div className="panel-row">
                    <div className="panel-col">
                    Academic Qualification:
                    </div>
                    <div className="panel-col-2">

                        <tr>SPM:</tr>
                        <br></br>
                        <li>Min. 3 Credits (3Cs) (inclusive of Mathematics)</li>
                        <li>Pass (SPM / 1119 / UEC / O Levels examination); MUET Band 2</li>
                        <br></br>
                        <tr>UEC:</tr>
                        <br></br>
                        <li>Min. 3 Credits (3Bs) inclusive of Mathematics</li>
                        <li>Band 4 in IELTS; or a min score of 30 (IBT) or 397 (PBT) in TOEFL ; or score 30 and above for Pearson English Test</li>
                        <br></br>
                        <tr>Any other qualifications deemed equivalent by the Ministry of Education, Malaysia (or as stated in the Document Senarai Nilai Taraf Kelayakan Akademik, Malaysian Qualifications Agency):</tr>
                        <br></br>
                        <li>Pass (Subject to review and approval of certified transcripts)</li>
                        <li>If English language requirements are not fulfilled, additional English module(s) may be taken at UOW Malaysia KDU.</li>
                        <br></br>

                    </div>
                </div>
                
            </TabPanel>
        </Tabs>

    );
    return (
        <div>
            <div className="main-computing">

                <div class="banner-page" >
                    <div class="container text-white">

                        <h2>  Diploma in Computer Studies	</h2>
                        <p> UOW Malaysia KDU University College	 </p>

                    </div>
                </div>
            </div>

            <div className="res-info-tab">
                <div className="container-header">
                    <h3>Get your foothold in the billion-dollar  </h3>
                    <h3>world of Computing Technology </h3>
                </div>
                <div className="container-header-info">
                    <p>Computer Studies emphasizes on the study on Information Technology (IT) which is the study, design, development, implementation, support or management of computer-based information systems—particularly software applications and computer hardware. The world of IT is a rapidly evolving field that focuses on the practical, daily operational needs for an organization that is dependent on information technology. Nearly every company in this modern age from the smallest start-ups to the biggest manufacturers require needs IT practitioners to keep their businesses running smoothly. These organisations have IT infrastructures and systems in place to ensure the functional day to day operations of the business and these systems must function properly, be secure, and upgraded, maintained, and replaced as and when needed. </p>
                    <br></br>
                    <p>With UOW Malaysia KDU’s Diploma in Computer Studies, students will learn the application of IT knowledge to solve practical problems in industry or commerce. The program covers information technology concepts, the practical operation of hardware and software, and the awareness of how computers affect work, home and play.</p>
                    <br></br>
                    <p>Students are given a solid, well-rounded foundation in the theory and application of general computing plus the basics of programming. Based on real-world industry requirements, they also gain the relevant skills and experience sought by today’s top technology employers. Not only that, this diploma program also offers students the flexibility of combining their interests in computing with other areas of study and application.</p>
                    <br></br>
                    <p>Upon completion, students can decide to join the workforce or progress to the computing degree programs at UOW Malaysia KDU, as well as other institutions locally or internationally.</p>
                </div>
            </div>

            <div className='tab-info'>
                <h2>Program information</h2>
                <br></br>
                {displayPost}
            </div>

        </div>
    )
}

export default compstu
