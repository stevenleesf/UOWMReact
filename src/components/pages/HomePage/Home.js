import React from 'react'
import HeroSection from '../../HeroSection'
import './Home.css'
import Courses from '../../Courses'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home() {
    
  
    var settings = {
        className: "slides",
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
        
        
    };



    return (
        <>
       
            <Slider {...settings}>
                <div >
                    <p ><HeroSection {...homeObjOne}/></p>
                </div>
                <div >
                    <p ><HeroSection {...homeObjTwo}/></p>
                </div>
                <div >
                    <p ><HeroSection {...homeObjThree}/></p>
                </div>
              
               
            </Slider>
          
            <Courses />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />



        </>
    )
}

export default Home
