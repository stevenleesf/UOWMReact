import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>
      

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                <img src="./images/Logo-WHITE.png" alt="UOWKDU Logo" width="35%" height="75%"  className='navbar-icon' />
                <br></br>
                
            </Link>
            
          </div>
         
          
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href=
                "https://www.facebook.com/UOWMKDU"
              
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href=
                "https://instagram.com/uowmkdu/"
              
             
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href=
                "https:youtube.com/channel/UC-mGzsCOKB4vLWd6bbKxYuQ"
              
             
            >
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href=
                "https:linkedin.com/company/kdu-university-college/"
              
           
            >
              <FaLinkedin />
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;