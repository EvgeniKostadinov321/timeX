import React from 'react'
import './WatchesCard.css'
import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import { NavLink } from 'react-router-dom'


export default function WatchesCard(props) {
  const { uid } = useContext(AuthContext)
    
  function handleBuy(e) {
    // 1. Check for existing cart data in localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // 2. Create a new cart item object
    const newItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      availability: props.availability,
      description:  props.description,
      quantity: 1, // Initial quantity of 1
      imageURL: props.imageURL, // Include image for better representation
    };
  
    // 3. Check if the product already exists in the cart
    const productInCart = existingCart.find(item => item.id === newItem.id);
  
    // 4. Update quantity if product exists, otherwise append new item
    if (productInCart) {
      productInCart.quantity++; // Increase quantity for existing product
    } else {
      existingCart.push(newItem);
    }
  
    // 5. Update cart data in localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
  
    // 6. Optional confirmation message (improve user experience)
    console.log('Product added to cart!');
  }
  

  return (
    <div key={props.id} className='Watches-card-main'>
        <div className='product-image-holder' style={{ backgroundImage: `url(${props.imageURL})` }}>
            
        </div>
        <div className='heading-card'>
            <h1 className='heiding-main-product'>{props.name}</h1>
        </div>
        <div className='desc-card'>
            <p className='secondary-text'>{props.description}</p>
            <p className='secondary-text'>{props.availability}</p>
        </div>
        <div className='controls-card-watches'>
            <span id='price-el'>{props.price} <span className='secondary-text' id='dolarSGN'>$</span></span>
            
            {uid ? <button onClick={handleBuy} id='Add_To_CardBtn'>Buy</button> : <button  id='Add_To_CardBtn'><NavLink id='dissable-link-style' to='/profile'>Buy</NavLink></button>}
        </div>
    </div>
  )
}
