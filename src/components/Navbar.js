import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            Aashray Shrestha  <i className='fa fa-code' style={{ "margin-left": "0.0rem" }} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            < li className='nav-item'>
              <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                Professional Summary
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

            <a href ="https://drive.google.com/file/d/15P2V13s-dY3cKwZ7tZ51x94xqtGjlSdP/view?usp=sharing" className='nav-item nav-links' target="_blank" rel="noopener">Resume </a> 
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;