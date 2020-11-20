import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'


function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headLine, description, buttonLabel1, img, alt, imgStart, show, description2
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >

                <div className="container">
                    <div className="row home__hero-row"
                        style={{display: "flex", flexDirection: imgStart === 'start' ? "row-reverse" : "row" }}> 
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                            
                                <h1 className= {lightText ? 'heading':'heading dark'}>{headLine}</h1>
                                <p className= {lightTextDesc ? 'hero__hero-subtitle' : 'hero__hero-subtitle dark'}>{description}</p>
                                <p className= {lightTextDesc ? 'hero__hero-subtitle' : 'hero__hero-subtitle dark'}>{description2}</p>
                                <br></br>
                                <Link to="/service" className={show ? "showButton" : "showButton False" }>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel1}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper ">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>   
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
