import React from 'react'
import WatchesCard from './WatchesCard'
import back from '/green_back_new.png'
import './Watches.css'
import EXAMPLE_PRODUCTS from '../../DUMMY_PRODUCTS'

import { useState, useEffect } from 'react';

export default function Watches() {

  const [finalData, setfinalData] = useState([]);

  useEffect(() => {
      setfinalData(EXAMPLE_PRODUCTS)
  }, []);
  
  
  return (
    <section className='catalogue-section' style={{ backgroundImage: `url(${back})` }}>
      <div className='catalog-wrapper'>
        
      {finalData.length > 0 && finalData.map((el) => (
        <WatchesCard key={el.id} id={el.id} name={el.name} price={el.price} availability={el.aval} description={el.description} imageURL={el.imageURL}/>
      ))}
        
      </div>
    </section>
  )
}
