import React from 'react'
import './CardModel.css'
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';



export default function CardModel() {

  
  return (
    //<primitive object={fbx} />
    <div className='Objects_holder' >
        <div className='card-style'>
          <h1>Rolex Sky-Dweller</h1>
          <p>The Oyster Perpetual Sky‑Dweller was designed for those continually travelling the globe.</p>
          
          <div className='Object_Holder'>
            <Card1></Card1>
          </div>
          
        </div>
        <div className='card-style'>
          <h1>Timex Expedition North® </h1>
          <p>Field Chrono 43mm Recycled Mixed Materials Strap Watch</p>
          
          <div className='Object_Holder'>
          <Card2></Card2>
          </div>
          
        </div>
        <div className='card-style'>
          <h1>Seiko coutura</h1>
          <p>Practical and special Gents watch. Material of the case is Stainless Steel.</p>
          
          <div className='Object_Holder'>
          <Card3></Card3>
          </div>
          
        </div>
    </div>
  );
 
}
