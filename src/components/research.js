import React from 'react';
import './research.css';



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
function research() {
    return (
        <>
            <div className="main-about">

                <div class="banner-page" >
                    <div class="container text-white">

                        <h2>  Research Center	</h2>
                        <p> UOW Malaysia KDU University College	 </p>

                    </div>
                </div>

                <div className="res-info">
                    <div className="container-header">
                        <h3>About Us</h3>
                    </div>
                    <div className="container-header-info">
                        <p>At UOW Malaysia KDU, we perceive the process of discovery as a creative and rigorous endeavour. We encourage such exploration by supporting the research and development of ideas, solutions and applications that will benefit our community.</p>
                        <br></br>
                        <p>UOW Malaysia KDU strives to inspire students and academic staff to share and serve in the academic field. The Research Centre at UOW Malaysia KDU aims to promote the enjoyment of learning and publishing research.</p>
                        <br></br>
                        <p>The UOW Malaysia KDU community is one that values learning and research at all levels. A dynamic range of workshops and programmes related to research and entrepreneurship exists to supplement the ongoing development of students and staff. In addition, UOW Malaysia KDU staff are supported in their quest to further deepen their expertise and network through research grants and conference support.</p>
                    </div>
                </div>
                <div className="accordion-research">
                    <div class="container-header-2">
                        <h2>  Research Center	</h2>
                    </div>
                    <div className="col-personal-2">
                        <Accordion allowZeroExpanded >

                            <AccordionItem >
                                <AccordionItemHeading >
                                    <AccordionItemButton >
                                        Internal Research Grant 2019
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel >

                                    <table id="table" >
                                        <tr>
                                            <th>Principal Investigator</th>
                                            <th>Project Title</th>
                                            <th>Commencement Date</th>
                                            <th>Department</th>
                                            <th>Grant Amount</th>
                                        </tr>

                                        <tr>
                                            <td>Dr How Heoy Geok</td>
                                            <td>Experimental investigation of multi-stage fuel injection strategy on engine-out responses of diesel engine fueled with biodiesel-diesel fuel blends</td>
                                            <td>15th Jan 2019</td>
                                            <td>Engineering</td>
                                            <td>RM 16500.00</td>
                                        </tr>

                                        <tr>
                                            <td>Dr J Joshua Thomas</td>
                                            <td>An adaptive learning analytics (ALA) data intensive framework to predict student academic grades, attrition and retention strategies at a University</td>
                                            <td>15th Jan 2019</td>
                                            <td>Computing</td>
                                            <td>RM 4149.55</td>
                                        </tr>

                                        <tr>
                                            <td>Sarata Balaya</td>
                                            <td>An adaptive learning analytics (ALA) data intensive framework to predict student academic grades, attrition and retention strategies at a University</td>
                                            <td>15th Jan 2019</td>
                                            <td>Mass Communication</td>
                                            <td>RM 6346.00</td>
                                        </tr>
                                    </table>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        External Research Grant 2019
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <table id="table">
                                        <tr>
                                            <th>Principal Investigator</th>
                                            <th>Project Title</th>
                                            <th>Commencement Date</th>
                                            <th>Department</th>
                                            <th>Grant Amount</th>
                                        </tr>

                                        <tr>
                                            <td>Dr. Chuah Hun Guan</td>
                                            <td>Modeling of the effect of surface roughness in plastic strain gradient theory of indentation size effect for micro-indentation</td>
                                            <td>1st Jan 2019</td>
                                            <td>Engineering</td>
                                            <td>RM 61,000</td>
                                        </tr>
                                        <tr>
                                            <td>Dr J Joshua Thomas</td>
                                            <td>An adaptive learning analytics (ALA) data intensive framework to predict student academic grades, attrition and retention strategies at a University</td>
                                            <td>15th Jan 2019</td>
                                            <td>Computing</td>
                                            <td>RM 4149.55</td>
                                        </tr>

                                        <tr>
                                            <td>Sarata Balaya</td>
                                            <td>An adaptive learning analytics (ALA) data intensive framework to predict student academic grades, attrition and retention strategies at a University</td>
                                            <td>15th Jan 2019</td>
                                            <td>Mass Communication</td>
                                            <td>RM 6346.00</td>
                                        </tr>


                                    </table>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>
                <div className="accordion-research">
                    <div class="container-header-2">
                        <h2>  Our Research Area	</h2>
                    </div>
                    <div className="col-personal-3">
                        <Accordion allowZeroExpanded>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Publication 2019
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>

                                    <table id="table" style={{ borderRadius: '5px' }}>
                                        <tr>
                                            <th>Type of publication</th>
                                            <th>Title</th>

                                        </tr>

                                        <tr>
                                            <td></td>
                                            <td>Engineering</td>

                                        </tr>

                                        <tr>
                                            <td>Journal Article</td>
                                            <td>Ahmad, A., Cheng, X. S., Paul, M. C., Dhar, A., Das, S., Ahmad, H., Harun, S. W. (2019). Investigation of the Brillouin effect in highly nonlinear hafnium bismuth erbium doped fiber. Microwave and Optical Technology Letters, 61(1), 173-177</td>

                                        </tr>
                                        <tr>
                                            <td>Journal Article</td>
                                            <td>Ahmad, A., Cheng, X. S., Paul, M. C., Dhar, A., Das, S., Ahmad, H.,  Harun, S. W. (2019). Self‐generating Brillouin fiber laser using highly nonlinear hafnium bismuth erbium‐doped fiber. Microwave and Optical Technology Letters, 61(6), 1651-1655</td>

                                        </tr>
                                        <tr>
                                            <td>Journal Article</td>
                                            <td>Nagentrau, M., Tobi, A. M., Sambu, M.,  Jamian, S. (2019). The influence of welding condition on the microstructure of WC hardfacing coating on carbon steel substrate. International Journal of Refractory Metals and Hard Materials, 82, 43-57</td>

                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>Business</td>

                                        </tr>

                                        <tr>
                                            <td>Journal Article</td>
                                            <td>Karunanayaka, D. P., Arokiasamy, L., Masri, R. (2019). The Effect of Perceived Value-In-Use in Student Advocacy Behavior of Private Higher Education Institution in Malaysia: A Conceptual Framework. Global Business and Management Research, 11(1)</td>

                                        </tr>
                                        <tr>
                                            <td>Journal Article</td>
                                            <td>Wong, B. K. M., Renganathan, T. S. (2019). Wearable Technologies in Organizations: Privacy, Efficiency and Autonomy in Work, A. Przegalinska (Ed.). Palgrave Pivot (2019). xiii+ 86 pp.,(eBk.),€ 44.02, ISBN: 978-3-030-00907-6. [Book Review</td>

                                        </tr>
                                        <tr>
                                            <td>Journal Article</td>
                                            <td>Wong, B. K. M. (2019). Tourism Marketing for Small Businesses, S. Pike (Ed.), Goodfellow Publishers Ltd, Oxford (2018), vi+ 242pp.,(Hbk.),£ 85, ISBN: 9781911396352,(Pbk.),£ 34.99 ISBN: 9781911396345. [Book Review]</td>

                                        </tr>


                                    </table>
                                </AccordionItemPanel>
                            </AccordionItem>

                        </Accordion>
                    </div>

                </div>


            </div>
        </>
    )
}

export default research
