import React from 'react'
import './studys.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function master() {

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
                        <h3>GLOBAL SUPERVISION TEAM</h3>
                        <br></br>
                    </div>
                    <div className="container-header-panel">
                        <p>You will not only be supervised by active and experienced supervisors in UOW Malaysia KDU but also gain access to and guidance from potential co-supervision by researchers from our UK partner university. Interaction with supervisors from different disciplines will enhance your learning opportunities, andallow you to progress in diverse and interdisciplinary research.</p>
                        <br></br>
                    </div>
                    <div className="container-header-tab">
                        <h3>EXCELLENCE RESEARCH CULTURE</h3>
                        <br></br>
                    </div>
                    <div className="container-header-panel">
                        <p>We are committed to providing extensive training and support to all postgraduate students. You will learn Research Methodology and Algorithm Design & Analysis as core modules. Students will also receive training sessions including inventive problem solvingapproach, project management, scholarship and research funding application, English writing skills, communication skills, and information research and retrieval techniques. Series of research seminars, workshops and talks will be available to enhance and stimulate research culture in UOW Malaysia KDU Penang University College.</p>
                        <br></br>
                    </div>
                    <div className="container-header-tab">
                        <h3>WORLD CLASS EDUCATION</h3>
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
                        2-4 years (Full-time), 3-6 years (Part-time)
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Programme Location:
                    </div>
                    <div className="panel-col-2">
                        UOW Malaysia KDU Penang University College, George Town
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Program Structure (Full time / Part time)
                    </div>
                    <div className="panel-col-2">
                        <table className="table-master" >
                            <tbody>
                                <tr>
                                    <td ><strong>Modules</strong></td>
                                    <td ><strong>Classification</strong></td>
                                    <td ><strong>Credits</strong></td>
                                </tr>
                                <tr>
                                    <td >Research Methods</td>
                                    <td >Core</td>
                                    <td >4</td>
                                </tr>
                                <tr>
                                    <td >Algorithm Design &amp; Analysis</td>
                                    <td >Core</td>
                                    <td >4</td>
                                </tr>
                                <tr>
                                    <td >Dissertation/Thesis</td>
                                    <td >Project</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                
                
            </TabPanel>
            <TabPanel>
                <img src="https://www.uowmkdu.edu.my/wp-content/uploads/2019/09/Studyroute-UOWMKDU-PG-Computing.png" alt="" width="1166" height="923"></img>
            </TabPanel>
            <TabPanel>
                <div className="panel-row">
                    <div className="panel-col">
                        Intake dates "2020" :
                    </div>
                    <div className="panel-col-2">

                        <li>13 January</li>
                        <li> 1 June</li>
                        <li>14 September</li>
                    </div>
                </div>
                <div className="panel-row">
                    <div className="panel-col">
                        Estimated fees "2020" :
                    </div>
                    <div className="panel-col-2">

                        <tr>Local students</tr>
                        <li>RM19,780 (Full Time)</li>
                        <li>RM27,220 (Part Time)</li>
                        <br></br>
                        <tr>International students</tr>
                        <li>RM26,230 (Full Time)</li>
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

                        <tr>Bachelor Degree:</tr>
                        <br></br>
                        <li>A Bachelor’s Degree of Computing or in the area of Science and Technology or related to computing, with a minimum CGPA of 3.00; or</li>
                        <br></br>
                        <li>A Bachelor’s Degree of Computing or in the area of Science and Technology or related to computing, with CGPA below 3.00 but above 2.50, can be accepted subject to rigorous internal assessment process; or</li>
                        <br></br>
                        <li>A Bachelor’s Degree of Computing or in the area of Science and Technology or related to Computing, with CGPA less than 2.50, with a minimum of 5 years working experience in a relevant field may be accepted.</li>
                        <br></br>
                        <li>For candidates without Computing Degree, prerequisite modules in computing will be offered to adequately prepare them.</li>
                        <br></br>

                        <tr>Local Student:</tr>
                        <br></br>
                        <li>MUET Band 2; or Band 5 in IELTS; or a min score of 57 (IBT) or 180 (CBT) in TOEFL; or Recognised Degree (conducted in English); or UOW Malaysia KDU English Entrance Test (67)</li>
                        <br></br>
                        <tr>International Student:</tr>
                        <br></br>
                        <li>MUET Band 3; or Band 5 in IELTS; or a min score of 34 (IBT) or 410 (PBT) in TOEFL; or Cambridge English CAE (160) & CPE (180); or PTE Academic (36)</li>
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

                        <h2>  Master in Computer Science	</h2>
                        <p> UOW Malaysia KDU University College	 </p>

                    </div>
                </div>
            </div>

            <div className="res-info-tab">
                <div className="container-header">
                    <h3>Course Overview   </h3>
                </div>
                <div className="container-header-info">
                    <p>This program provides you opportunity to enhance your existing knowledge of computer programming and mathematical frameworks through independent research. </p>
                    <br></br>
                    <p>You will develop your research skills through two taught modules, i.e. Research Methodology and Algorithm Design & Analysis.</p>
                    <br></br>
                    <p>This flexible program provides you the chance to work closely with your supervisors, academic experts, industrial practitioners, and government agencies locally and internationally in the following areas:</p>
                    <br></br>
                    <ul>
                        <li>Artificial Intelligence</li>
                        <li>Data Visualisation</li>
                        <li>Big Data</li>
                        <li>Machine Learning</li>
                        <li>Image Processing</li>
                        <li>IOT / Industry 4.0</li>
                        <li>Deep Learning</li>
                    </ul>
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

export default master
