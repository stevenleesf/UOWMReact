import React from 'react'
import './studys.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function useng() {

    const displayPost = (
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
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
                        3 years
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
                            <li>Computing Mathematics</li>
                            <li>Fundamentals of Programming</li>
                            <li>Database Systems</li>
                            <li>Discrete Mathematics</li>
                            <li>Data Communication &amp; Networking</li>
                            <li>Academic English 1</li>
                            <li>Object Oriented System Analysis &amp; Design</li>
                            <li>Data Structures &amp; Algorithms</li>
                            <li>Principles of Software Engineering</li>
                            <li>Computer Architecture</li>
                            <li>Introduction to Security</li>
                            <li>Java Programming</li>
                        </ul>
                    </div>
                </div>

                <div className="panel-row">
                    <div className="panel-col">
                        Core: Year 2
                    </div>
                    <div className="panel-col-2">
                        <ul>

                            <li>Elective Subjects (1 Subject)</li>
                            <li>Designing for Usability and User Experience</li>
                            <li>Operating Systems</li>
                            <li>Computer Ethics &amp; Law</li>
                            <li>Software Design</li>
                            <li>Formal Methods</li>
                            <li>Software Requirements Engineering</li>
                            <li>Research Methodology</li>
                            <li>Integrative Consultancy Project</li>
                        </ul>
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Core: Year 3
                    </div>
                    <div className="panel-col-2">
                        <ul>
                            <li>Elective Subjects (2 Subjects)</li>
                            <li>Final Year Project</li>
                            <li>Software Project Management</li>
                            <li>Intelligent Systems</li>
                            <li>Software Testing &amp; Quality Assurance</li>
                            <li>Internship</li>
                        </ul>
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Elective:
                    </div>
                    <div className="panel-col-2">
                        <ul>
                            <li>Internet &amp; Web Development</li>
                            <li>Mobile Programming and Screen Design 1</li>
                            <li>Mobile Programming and Screen Design 2</li>
                            <li>Wireless &amp; Mobile Security</li>
                            <li>Wireless and Mobile Technology</li>
                            <li>Distributed Systems</li>
                            <li>Software Architecture</li>
                            <li>Software Reuse</li>
                            <li>Introduction to Data Science</li>
                            <li>Knowledge Discovery &amp; Data Mining</li>
                            <li>Data Science Programming</li>
                        </ul>
                    </div>
                </div>

                <div className="panel-row">
                    <div className="panel-col">
                        MPU:
                    </div>
                    <div className="panel-col-2">
                        <ul>
                            <li>Bahasa Kebangsaan A*</li>
                            <li>Entrepreneurship</li>
                            <li>Corporate Social Responsibility</li>
                            <li>Life in Malaysia</li>
                            <li>Bahasa Melayu Komunikasi 2 (International Students)</li>
                            <li>Pengajian Malaysia 3 (International Students)</li>
                            <li>Hubungan Etnik (Malaysian Students)</li>
                            <li>Tamadun Islam &amp; Tamadun Asia (Malaysian Students)</li>
                            <br></br>
                            <tr>Bahasa Kebangsaan A is compulsory for all Malaysian students</tr>
                            <li>without a credit in SPM Bahasa Malaysia.</li>
                            <p>(applicable to students from UEC, O Level, or other equivalent programs)</p>
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
                        <li>RM70,005</li>
                        <br></br>
                        <tr>International students</tr>
                        <li>RM83,705</li>
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

                        <tr>GCE A Levels::</tr>
                        <br></br>
                        <li>2 Principal Passes (2Ds)</li>
                        <br></br>
                        <tr>STPM (Science Stream or equivalent)::</tr>
                        <br></br>
                        <li>2Cs or CGPA 2.00 with a Credit in a Mathematic subject and a Credit in a Science or ICT subject.</li>
                        <br></br>
                        <tr>Diploma:</tr>
                        <br></br>
                        <li>Diploma in Computer Science or Software Engineering or Information Technology or Information System</li>
                        <tr>OR</tr>
                        <li>Related Diploma in Science and Technology Pass with Min. CGPA 2.50</li>
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

                        <h2>  Bachelor of Software Engineering (Hons)	</h2>
                        <p> UOW Malaysia KDU University College	 </p>

                    </div>
                </div>
            </div>

            <div className="res-info-tab">
                <div className="container-header">
                    <h3>Building solutions for the future   </h3>
                    <h3>and enabling the age of the digital revolution </h3>
                </div>
                <div className="container-header-info">
                    <p>The expanding integration of internet technologies coupled with the growth in e-commerce has resulted in a rising demand for software engineers. As computer systems become increasingly sophisticated, software engineers are expected to design, implement, safeguard and update systems. Software Engineers focuses on large-scale software systems and employs certain ideas from the world of engineering to build reliable software systems. Software engineers are concerned with the development and maintenance of software systems according to all the requirements that end-users or clients have defined for them. The nomenclature for the word engineering in software engineering reflects the practice of designing, analysing, building, and testing machines, systems, structures and materials. It is also more disciplined than Computer Science, applying more systematic practices to help ensure that products are reliable and safe. </p>
                    <br></br>
                    <p>Through UOW Malaysia KDU’s Bachelor of Software Engineering (Hons), students are exposed to valuable insights in utilising systematic and disciplined approaches to creating quality software products. They also gain core software development knowledge, which includes skills and techniques in modelling and analysis, software design, development, verification and validation, maintenance and management systems.</p>
                    <br></br>
                    <p>Students will also be involved in a variety of projects ranging from business applications, high-precision and safety-critical scientific and engineering systems in this ever-expanding digital world.</p>
                    <br></br>
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

export default useng
