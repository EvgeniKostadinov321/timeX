import React from 'react'
import './services.css'
import back from '/green_back_new.png'

import vr from '/servicesStore/VR.jpg'
import engrave from '/servicesStore/engrave.jpg'
import maintain from '/servicesStore/maintain.jpg'
import quality from '/servicesStore/quality.mp4'
import tool from '/servicesStore/tool.mp4'
import repair from '/servicesStore/repair.jpg'

import Video from '../../components/videoComponent/Video'

export default function Services() {
  return (
    <section className='services-section' style={{ backgroundImage: `url(${back})` }}>
      <div className='content-services'>

        <div className='service-wrapper'>
          <div className='service-box'>
              <h1 className='headline-services'>Virtual Try-On</h1>
              <p className='parag-services'>Leverage augmented reality (AR) technology to allow customers to virtually try on watches using their webcam or smartphone camera. This can help them visualize how the watch will look on their wrist and with their attire.</p>
          </div> 
          <div className='service-box'>
              <div style={{ backgroundImage: `url(${vr})` }} id='adjust-back' className='image-div-serice'>
                
              </div>
          </div>
        </div>

        <div className='service-wrapper'>
          
          
          <div className='service-box'>
              <h1 className='headline-services'>Engraving Service</h1>
              <p className='parag-services'>Offer an engraving service where customers can personalize their watches with initials, dates, or short messages.</p>
          </div>
          <div className='service-box'>
              <div style={{ backgroundImage: `url(${engrave})` }} className='image-div-serice'></div>
          </div> 
        </div>

        <div className='service-wrapper'>
          <div className='service-box'>
              <h1 className='headline-services'>Care and Maintenance Guides</h1>
              <p className='parag-services'>Provide comprehensive care and maintenance guides for different watch materials (e.g., how to clean a leather strap, how to demagnetize a watch).</p>
          </div> 
          <div className='service-box'>
              <div style={{ backgroundImage: `url(${maintain})` }} className='image-div-serice'></div>
          </div>
        </div>

        <div className='service-wrapper'>
          
          
          <div className='service-box'>
              <h1 className='headline-services'>Repair Service</h1>
              <p className='parag-services'>Partner with a watch repair service or offer in-house repairs for mechanical watches.</p>
          </div> 
          <div className='service-box'>
              <div style={{ backgroundImage: `url(${repair})` }} className='image-div-serice'></div>
          </div>
        </div>

        <div className='service-wrapper'>
          <div className='service-box'>
              <h1 className='headline-services'>Customization Tool</h1>
              <p className='parag-services'>Offer a customization tool where customers can design their own watch by selecting different case materials, straps, dials, and hands. This personalizes the watch and creates a special connection for the customer.</p>
          </div> 
          <div className='service-box'>
              <Video Url_Path={tool}></Video>
          </div>
        </div>

        <div className='service-wrapper'>
          
          
          <div className='service-box'>
              <h1 className='headline-services'>Engaging Product Pages</h1>
              <p className='parag-services'>Include high-quality product photos and videos showcasing the watches from different angles and in various lighting conditions. Offer 360-degree views for a more immersive experience.</p>
          </div> 
          <div className='service-box'>
              <Video Url_Path={quality}></Video>
          </div>
        </div>
      </div>
    </section>
  )
}
