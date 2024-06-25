import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <section id='footer-section'>
        <div id='footer-wrapper'>
            <div className='footer-content-div'>
            <h2  className='footer-h2'>Can we help?</h2>
                <ul className='list-footer'>
                    <li className='footer-element'> 
                        <a href='/'>Social media</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>Timex app</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>Job search</a>
                    </li>
                </ul>
            </div>
            <div className='footer-content-div'>
                
                <h2  className='footer-h2'>More about Timex</h2>
                <ul className='list-footer'>
                    <li className='footer-element'> 
                        <a href='/'>Who we are</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>What we do</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>Our values</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>The Timex brand</a>
                    </li>
                </ul>
            </div>
            <div className='footer-content-div'>
                <h2 className='footer-h2'>Site Information</h2>
                <ul className='list-footer'>
                    <li className='footer-element'> 
                        <a href='/'>Accessibility</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>Terms and conditions</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>Privacy policy</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>Cookie policy</a>
                    </li>
                    <li className='footer-element'> 
                        <a href='/'>Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
        <h6 id='copy-mark'>&copy; Copyright 2024, E.K</h6>
    </section>
  )
}
