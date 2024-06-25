import './Cart.css';
import './ProductCard.css'
import './elementProduct.css'
import React from 'react';
import back from '/green_back_new.png';
import visa from '/cards/visa.png'
import aExpress from '/cards/american-express.png'
import payPal from '/cards/money.png'
import applePay from '/cards/apple.png'
import binPng from '/bin.png'

import app from '../../util/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function Cart() {
  const auth = getAuth();
  const database = getDatabase(app);
  const navigate = useNavigate();
  let currentTotalPrice = 0
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  let [totalPrice,setTotalPrice] = useState(0)
  let [currentUser, setCurrentUser] = useState()
  

  const [expirationDate, setExpirationDate] = useState('');

  useEffect(() => {
    const expirationInput = document.getElementById('expiration');

    expirationInput.addEventListener('change', function () {
      const selectedDate = new Date(this.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

      if (selectedDate < today) {
        alert('Please enter a date after today for expiration.');
        this.value = ''; // Clear the input value
      } else {
        setExpirationDate(this.value); // Update state only for valid dates
      }
    });
  }, []);


  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      currentUser = user;
      setCurrentUser(user)
      console.log(currentUser)
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newOrderRef = push(ref(database, 'orders'));

      const orderData = {
        cartData,
        user: {
          uid: currentUser?.uid,
          email: currentUser?.email,
        },
      };

      console.log(orderData)

      await set(newOrderRef, orderData);

      console.log('Order data added successfully!');
      localStorage.removeItem('cart');
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error adding order data:', error);
      // Handle error here, e.g., display an error message to the user
    }
  };

  const deleteCartElement = (id) => {
    const productIndex = cartData.findIndex((item) => item.id === id);
    cartData.splice(productIndex, 1);
    setCartData([...cartData]); // trigger re-render with updated data
    localStorage.setItem('cart', JSON.stringify(cartData));
    
  };


  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    cartData.forEach((element) => {
      currentTotalPrice = currentTotalPrice + element.price
    })
    setTotalPrice(currentTotalPrice)
  }, [totalPrice,currentTotalPrice,cartData])

  
  

  return (
    
    <section  style={{ backgroundImage: `url(${back})` }}  className='cart-section-full'>
       <section className='cart-section'>

          <div className='shoping-card-wrapper'>
            <div className='information'>
                <p className='card-info'>Shopping cart</p>
                <p className='card-info'>You have {cartData.length} items in your cart</p>
            </div>
            <div className='products-wrapper-cart'>

              {cartData.map((data) => (
                <div key={data.id} id={data.id} className='product-element-wrapper'>

                  <div style={{ backgroundImage: `url(${data.imageURL})` }}  className='product-img'>
                
                  </div>
                  <div className='product-info'>
                    <h2 className='product-name'>{data.name}</h2>
                    <h4 className='product-desc'>{data.description}</h4>
                    
                  </div>
                  <div className='actions-product'>
                    <h2 className='price-element'>{data.price} $</h2>
                    <img onClick={() => deleteCartElement(data.id)} id='bin-icon' src={binPng} alt="bin icon" />
                  </div>
                </div>
              ))}

              </div>
          </div>

          <form onSubmit={handleSubmit} className='card-details-holder'>
            <h1 id='card-detail-text'>Card details</h1>
            <p id='card-type-text'>Card type</p>
            <div className='card-types-wrapper'>
                <div className='card-icon'><img className='image-banks' src={visa} alt="visa" /></div>
                <div className='card-icon'><img className='image-banks' src={aExpress} alt="american express" /></div>
                <div className='card-icon'><img className='image-banks' src={payPal} alt="payPal" /></div>
                <div className='card-icon'><img className='image-banks' src={applePay} alt="apple pay" /></div>
            </div>

            <div className='input-groups-card'>
              <div className='form-group'>
                  <label className='label-form-card' htmlFor='cardholder'>Cardholder's Name</label>
                  <input
                      className='input-card'
                      type="text"
                      name="cardholder"
                      id="cardholder"
                      required
                      />
                </div>
              <div className='form-group'>
                <label className='label-form-card' htmlFor='number'>Card Number</label>
                <input
                    className='input-card'
                    type="text"
                    name="number"
                    id="number"
                    pattern="[0-9]{13,16}"
                    maxLength='16'
                    min='16'
                    max='16'
                    placeholder='1234 5678 9012 3457'
                    required
                    />
              </div>
              <div id='form-group-last'>
                <div className="form-group">
                  <label  className='label-form-card' htmlFor='expiration'>Expiration date</label>
                  <input
                      
                      className='input-card'
                      type="date"
                      name="expiration"
                      id="expiration"
                      value={expirationDate} // Set the initial value from state
                      onChange={(e) => setExpirationDate(e.target.value)} // Update state on change
                      required
                      style={{ color: 'black' }}
                    
                    />
                </div>

                <div className="form-group">
                  <label className='label-form-card' htmlFor='cvv'>C v v</label>
                  <input
                    className='input-card'
                    type="password"
                    name="cvv"
                    id="cvv"
                    min='3'
                    max='3'
                    maxLength='3'
                    required
                  />
                </div>
                
              </div>
            </div>

            <div className='total-box'>
                <div className='total-div'>
                  <p>Subtotal</p>
                  <p>{totalPrice} $</p>
                </div>
                <div className='total-div'>
                  <p>Shipping</p>
                  <p>20 $</p>
                </div>
                <div className='total-div'>
                  <p>Total (incl. taxes)</p>
                  <p>{totalPrice === 0 ?  totalPrice :  totalPrice + 20 } $</p>
                </div>

                <button  id='checkout-btn'><p>CHECKOUT</p></button>
            </div>
          </form>

      </section> 
      

    </section>
  )
}

