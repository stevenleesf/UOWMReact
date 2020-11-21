import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import "./Service.css"

function Service() {

    return (
        <>
            <div className= "home__staff-section">
                <div className="personal__container" padding-bottom = "35px">
                    <h2 className="h2S">Academic Staff</h2>
                    <div className="personal__row">
                        <div className="personal__col">
                            <img src="./UOWMReact/images/boy.png" alt="phua" ></img>
                            <h1>Phua Yeong Tsann</h1>
                            <br></br>
                            <p className="title">Senior Lecturer</p>
                            <br></br>
                            <p>UOW KDU</p>
                            <br></br>
                            <Link to="/Staff/1">
                                <Button  buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                            </Link>
                        </div>
                        <div className="personal__col">
                            <img src="./UOWMReact/images/girl.png" alt="foong" ></img>
                            <h1>Law Foong-Li</h1>
                            <br></br>
                            <p class="title">Senior Lecturer</p>
                            <br></br>
                            <p>UOW KDU</p>
                            <br></br>
                            <Link to="/Staff/2">
                                <Button  buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                            </Link>
                    </div>
                    </div>
                </div>
                <div className="personal__container" padding-bottom = "35px">
                    <h2 className="h2S">Non-academic Staff</h2>
                    <div className="personal__row">
                        <div className="personal__col">
                            <img src="./UOWMReact/images/girl.png" alt="phua" ></img>
                            <h1>Professor Dr Hon Wei Min</h1>
                            <br></br>
                            <p class="title">Deputy Vice Chancellor – Academic</p>
                            <br></br>
                            <p>UOW KDU</p>
                            <br></br>
                            <Link to="/dvc">
                                <Button  buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                            </Link>
                        </div>
                        <div className="personal__col">
                            <img src="./UOWMReact/images/boy.png" alt="foong" ></img>
                            <h1>Associate Professor Ts. Tan Chin Ike</h1>
                            <br></br>
                            <p class="title">Head of School – Computing & Creative Media</p>
                            <br></br>
                            <p>UOW KDU</p>
                            <br></br>
                            <Link to="/ike">
                                <Button  buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                            </Link>
                    </div>
                
                    <div className="personal__row">
                        <div className="personal__col-2">
                            <img src="./UOWMReact/images/boy.png" alt="phua" ></img>
                            <h1>Phua Yeong Tsann</h1>
                            <br></br>
                            <p class="title">Head of Academic Department – Computing & Creative Media</p>
                            <br></br>
                            <p>UOW KDU</p>
                            <br></br>
                            <Link to="/Staff/1">
                                <Button  buttonSize='btn--wide' buttonColor='blue'>View Detail</Button>
                            </Link>
                        </div>
                       
                    </div>
                  
                    
                    
                 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
