import './Navigation.css'
import './Burger.css'
import React, { useEffect } from 'react'
import ProfileIcon from '../../assets/profile-pic-nav.png'
import BagIcon from '../../assets/bag-nav.png'
import MainLogo from '../../assets/MainLogo.png'
import burgerIcon from '../../assets/menu.png'
import Xicon from '../../assets/close.png'

import { useNavigate } from 'react-router-dom'
import { auth } from '../../util/firebase'
import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "+100%" },
    
  }

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  let classes = ''
  let dimNav = ''
  const navigate = useNavigate();

  const { uid } = useContext(AuthContext)
 
  const handleLogout = () => {               
    signOut(auth).then(() => {
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
      
    });
  }

  function handleBurgerOpen(e) {
    
    if (isOpen) {
        setIsOpen(false)
        classes = 'none-active-burger'
    } else {
        setIsOpen(true)
        classes = 'active-burger'
        
    } 
  };

  isOpen ? disableBodyScroll(document) : enableBodyScroll(document) 

  return (
    <header >
        <nav >
            <div>
                <NavLink id='logo-link' to='/'><img src={MainLogo} alt="main logo" /></NavLink>
            </div>
            
            <div id='navigation-right-div'>
                <NavLink  to='/watches'>Watches</NavLink>
                <NavLink  to='/magazine'>Magazine</NavLink>
                <NavLink  to='/maison'>The Maison</NavLink>
                <NavLink  to='/services'>Services</NavLink>
                {uid ? <NavLink  to='/cart'><img className='icon-nav' src={BagIcon} alt="card picture" /></NavLink> : <NavLink  to='/profile'><img className='icon-nav' src={BagIcon} alt="profile picture" /></NavLink>}
                {uid ? <NavLink to='/profileExpanded'><img className='icon-nav' src={ProfileIcon} alt="profile picture" /></NavLink> : <NavLink to='/profile'><img className='icon-nav' src={ProfileIcon} alt="profile picture" /></NavLink>}
            </div>
            <div id='burger-menu-holder'>
              <img  onClick={handleBurgerOpen} id='burger-icon-menu-img' src={isOpen ? Xicon : burgerIcon} alt="burger menu icon" />
              <motion.div className={isOpen ? 'active-burger' : 'none-active-burger'} 
                  animate={isOpen ? "open" : "closed"}
                  variants={variants}
                  transition={{ duration: 0.6 }}
              >
                  <NavLink onClick={handleBurgerOpen} to='/'>Home</NavLink>    
                  <NavLink onClick={handleBurgerOpen} to='/watches'>Watches</NavLink>
                  <NavLink onClick={handleBurgerOpen} to='/magazine'>Magazine</NavLink>
                  <NavLink onClick={handleBurgerOpen} to='/maison'>The Maison</NavLink>
                  <NavLink onClick={handleBurgerOpen} to='/services'>Services</NavLink>
                  <NavLink onClick={handleBurgerOpen} to='/cart'><img className='icon-nav' src={BagIcon} alt="card picture" /></NavLink>
                  {uid ? <NavLink onClick={handleBurgerOpen} to='/profileExpanded'><img className='icon-nav' src={ProfileIcon} alt="profile picture" /></NavLink> : <NavLink onClick={handleBurgerOpen} to='/profile'><img className='icon-nav' src={ProfileIcon} alt="profile picture" /></NavLink>}
              </motion.div>
          </div>
        </nav>
    </header>
  )
}
