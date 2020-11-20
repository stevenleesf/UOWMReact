import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import AuthService from "../services/auth-service";
import Dropdown from './Dropdown';
import {
  BsFillCaretDownFill,
} from 'react-icons/bs';


export const img1 = require('./images/kdu.png');



function Navbar() {


  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);

    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);


  };




  const [click, setClick] = useState(false);
 
  const [dropdown, setDropdown] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)




  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  


  return (
    


    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src="/images/Logo-WHITE.png"
                alt="UOWKDU Logo" width="35%" height="85%" className='navbar-icon' />


            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/computing' className='nav-links' onClick={closeMobileMenu}>
                  Study
                </Link>
              </li>
              <li className='nav-item'  >
                <Link
                  to='/service'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Staff
              </Link>

              </li>

              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

                <Link
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Us <BsFillCaretDownFill />
                </Link>
                {dropdown && <Dropdown />}
              </li>


              {currentUser ? (

                <li className='nav-btn'>
                  <Link to='/login' className='btn-link' onClick={logOut}>
                    <Button buttonStyle='btn--outline' >LogOut</Button>
                  </Link>
                </li>

              ) : (

                  <li className="nav-btn">
                    <Link to='/login' className='btn-link' >
                      <Button buttonStyle='btn--outline' >Login</Button>
                    </Link>
                  </li>

                )}
              {currentUser ? (

                <li className="nav-btn">
                  <Link to={`/profile/${currentUser.id}` } className='btn-link' >
                    <Button buttonStyle='btn--outline' >{currentUser.username}</Button>
                  </Link>
                </li>
              ) : (
                  <li className="nav-btn">
                    <Link to='/register' className='btn-link'>
                      <Button buttonStyle='btn--outline' >Register</Button>
                    </Link>
                  </li>

                )}

              <Link
                className='social-icon-link'
                to={
                  '//www.uowmkdu.edu.my/ug-virtual-tour/'
                }
                target='_blank'
                aria-label='GoogleMapKDU'
              ><Button buttonStyle='btn--outline'>Tour</Button></Link>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}



export default Navbar

