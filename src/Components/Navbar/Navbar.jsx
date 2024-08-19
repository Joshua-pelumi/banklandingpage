import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import menu_icon from '../../assets/icon-hamburger.svg'
import {Link} from 'react-scroll';


const Navbar = () => {

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false); 
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
  
    <nav className={"dark-nav"}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu? '' : 'hide-mobile-menu'}>

        <li> <Link to='hero' smooth ={true} offset ={0} duration = {500}> Home </Link></li>
        <li> <Link to='program' smooth ={true} offset ={-260} duration = {500}>About </Link> </li>
        <li> <Link to='about' smooth ={true} offset ={-150} duration = {500}>Programme </Link></li>
        <li> <Link to='campus' smooth ={true} offset ={-260} duration = {500}>Blog </Link></li>
        <li> <Link to='campus' smooth ={true} offset ={-260} duration = {500}>Careers </Link></li>
      </ul>
      <div>
        <li> <Link to='contact' smooth ={true} offset ={-260} duration = {500} className='btn'>Request invite</Link></li>
      </div>
      <img src={menu_icon} alt="" className='menu-icon'onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
