import React from 'react'
import CardModel from '../cards/CardModel'
import heroWatchImg from '../../assets/hero-watch-img.jpg'
import back from '/green_back_new.png'
import './Home.css'
import './Home-Mobile.css'
import { NavLink } from 'react-router-dom'



export default function Home() {
  

  return (
    <>
      <section id='hero-section-home' style={{ backgroundImage: `url(${heroWatchImg})` }}>
        <div className='col-flex-div'>
            <h2>Traditional Watchmaker</h2>
            <h1>Incomparable Timepieces</h1>
            <p id='pc-text' className='hero-par'>TimeEX watches exceed the standard. They are not mediocre, common, or antiquated. But instead, are testament to exceptional craftmanship that are instant classics which transfix everyone. Be a part of geatness.</p>
            <p id='mobile-text' className='hero-par'>TimeEX watches exceed the standard. They are not mediocre, common, or antiquated. But instead, are testament to exceptional craftmanship.</p>
            <div id='hero-home-btn-section'>
                <div className='horiz-line'></div>
                  <NavLink  to='/watches'><button>Discover Models</button></NavLink>
                <div className='horiz-line'></div>
            </div>
        </div>
      </section>
      <section id='examples-watches' style={{ backgroundImage: `url(${back})` }}>
          <div className='colletion-holder' >
            <CardModel></CardModel>
          </div>
      </section>
    </>
    
    
  )
}
