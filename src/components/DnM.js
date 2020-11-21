import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './DnM.css'

function DnM() {
    return (
        <div>
            <div class="banner-page" >
	            <div class="container text-white">
		                
			              <h2>  Department and Management	</h2>
                          <p> UOW Malaysia KDU University College	 </p>
		                   
                        </div>
                    </div>
            <div className="container-aboutus">
                <div className="container-header">
                    <h3>Department</h3>
                    </div>
                    <div className="container-header-info">   
                    <h3>Computing & Creative Media </h3>
                    <br></br>
                    <p>This flexible program ensures students are grounded with a strong grasp of core subjects according to their choice of programs at degree level, as well as a variety of other subjects to give them a broad-based education platform. It also helps them to explore new methods and ideas, as well as skills and concepts, to encourage independent and critical thinking. Upon completion, students will be able to articulate seamlessly into various degree programs, offered at UOW Malaysia KDU.</p>
                    <br></br>
                    <ul>
                        <p>Computing Studies</p>
                        <p>Game Development</p>
                        <p>Pre-University Studies</p>
                    </ul>
                    </div>
                

            </div>

            <div className="personal__container" style={{ marginTop:"-105px"}}>
                <h2 className="h2S">Management</h2>
                <div className="personal__row">
                    <div className="personal__col">
                        <img src="./images/girl.png" alt="phua" ></img>
                        <h1>Professor Dr Hon Wei Min</h1>
                        <br></br>
                        <p class="title">Deputy Vice Chancellor – Academic</p>
                        <br></br>
                        <p>UOW KDU</p>
                        <br></br>
                        <Link to="/dvc">
                            <Button buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                        </Link>
                    </div>
                    <div className="personal__col">
                        <img src="./images/boy.png" alt="foong" ></img>
                        <h1>Associate Professor Ts. Tan Chin Ike</h1>
                        <br></br>
                        <p class="title">Head of School – Computing & Creative Media</p>
                        <br></br>
                        <p>UOW KDU</p>
                        <br></br>
                        <Link to="/ike">
                            <Button buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                        </Link>
                    </div>

                    <div className="personal__row">
                        <div className="personal__col-2">
                            <img src="./images/boy.png" alt="phua" ></img>
                            <h1>Phua Yeong Tsann</h1>
                            <br></br>
                            <p class="title">Head of Academic Department – Computing & Creative Media</p>
                            <br></br>
                            <p>UOW KDU</p>
                            <br></br>
                            <Link to="/phua">
                                <Button buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DnM
