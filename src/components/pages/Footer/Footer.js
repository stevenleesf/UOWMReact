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
                <img src="/images/Logo-WHITE.png" alt="UOWKDU Logo" width="35%" height="75%"  className='navbar-icon' />
                <br></br>
                
            </Link>
            
          </div>
         
          
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//facebook.com/UOWMKDU'
              }
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//instagram.com/uowmkdu/'
              }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//youtube.com/channel/UC-mGzsCOKB4vLWd6bbKxYuQ'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//linkedin.com/company/kdu-university-college/'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;