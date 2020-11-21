import React from 'react'
import './computing.css'


function computing() {
    return (
        <div>
            <div className="main-computing">

                <div class="banner-page" >
                    <div class="container text-white">
                            
                            <h2>  Computing and Creative Media	</h2>
                            <p> UOW Malaysia KDU University College	 </p>
                            
                        </div>
                </div>
                <div className="container-aboutus">
                <div className="container-header">
                    <h3>Digital literacy, Creativity and
                        Technological Knowledge </h3>
                    </div>
                    <div className="container-header-info">   
                        <p>With technological development, the world has changed rapidly
                            and at an unimaginable rate. We now carry far more advanced
                            technology in our mobile devices than that which took Neil
                            Armstrong and Buzz Aldrin to reach the Moon; and thirty years
                            ago, only specialists knew how to use the Internet. Now, billions
                            of people use the Internet for information, to trade, communicate
                            and update their statuses every second of everyday</p>
                        <br></br>
                        <p>Understanding the interplay between computing and the highly
                            immersive world of digital entertainment, KDU embodies the
                            concept of “Technological Artistry”, an approach to merge
                            creativity into technology, producing graduates who can bridge
                            these two distinct disciplines that are in the forefront of innovation</p>
                        <br></br>
                        <p>Utilising a combination of strategic industry collaborations and academic partnerships, KDU produce young computing and creative
                            media talents that not only fulfil the needs of the industry, but help
                            shape what it becomes in the future. </p>
                        
                            <p>We work with selected corporate industry and relevant
                        organisations to obtain practical training materials and tools
                        for knowledge transfer as well as the opportunity for events
                        and networking. Students get a taste of real world experience
                        in consultation with top technological companies such as
                        IEEE Computer Society, and RapidMiner Master Reseller,
                        Quandatics (M) Sdn Bhd keeping updated with latest trends
                        through projects and industry involvement.
                        </p>
                        <br></br>
                        <p>Students are exposed to and prepared for external
                            certification exams and professional certification processes
                            through our partnerships</p>
                        <br></br>
                        <p>In 2012, the Ministry of Higher Education awarded KDU with a
                            PEMANDU Entry Point Project initiative under the Economic
                            Transformation Plan and the National Key Results Area (Education) to
                            spearhead the Game Development industry in Malaysia, focusing on
                            awareness and talent building activities. This Game Development
                            Cluster represents the start of a strategic collaboration between
                            educational institutions and the Game Development industry to
                            create a High-Income, Sustainable Creative Economy in the area of
                            Game Development.  </p>
                            <br></br>
                        <p>The primary measure of success in a digital game region is a critical
                            mass of talent. Without critical mass, it is difficult to find support, retain
                            talent, and attract international visibility and credibility. In an effort to
                            maintain a constant flow of talents into the Game Development
                            Industry, MyGameDev’s role is to ensure that not only are the relevant
                            institutions generating graduates which are industry ready but to also
                            prepare a ready pool of raw post-secondary student talents to feed
                            into this pipeline.</p>

                    </div>
 
                    <div className="comp-head">

                          <h2>Find your Program</h2>
                            <br></br>
                            <h2>Computing and Creative Media</h2>
                            <br></br>

                            </div>

                    <div className="container-row-comp">
                           
                        <div className="container-col-comp">
                           
                        <ul>Undergraduate
                            <Link to='/compstu'><a style={{ textDecoration: 'none' }}><li>Diploma in Computer Studies</li></a></Link>
                            <Link to='/useng'><a style={{ textDecoration: 'none' }}><li>Diploma in Computer Studies</li></a></Link>
                           
                           
                           
                            </ul>
                        </div>

                        <div className="container-col-comp-2">
                        <ul>Postgraduate
                            <a href="/master" style={{ textDecoration: 'none' }}><li>Master in Computer Science</li></a>
                            <p></p>
                           
                        </ul>
                        </div>


                    </div>


                

            </div>
            </div>
        </div>
    )
}

export default computing
