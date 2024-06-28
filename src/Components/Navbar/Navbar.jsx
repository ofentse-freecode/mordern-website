import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

import './navbar.css'
import logo from '../../assets/resources/logo.jpeg'

import menu from '../../assets/resources/menu.svg'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
       <img className='logo' src={logo} alt ="logo" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={-260} duration={500}>Home</Link></li>

            <li><Link to='venues' smooth={true} offset={-260} duration={500}>Venues</Link></li>

            <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>

            <li><Link to='specials' smooth={true} offset={-260} duration={500}>Specials</Link></li>

            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li className='btn'>
              <Link to='contact' smooth={true} offset={-260} duration={500}   >Contact</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar