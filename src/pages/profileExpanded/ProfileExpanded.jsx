import './ProfileExpanded.css'
import React from 'react'
import back from '/green_back_new.png'
import app from '../../util/firebase';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';





export default function ProfileExpanded() {
    const navigate = useNavigate();
    let filedToComplete 

    const [userName,setUserName] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [city,setCity] = useState('');
    const [address,setAddress] = useState('');
    const [error,setError] = useState('')
    const storedUserData = localStorage.getItem('profileInformation');
    

    const handleLogout = () => {               
        signOut(auth).then(() => {
            setError(null)
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        
        });
    } 

    const handleSubmit = (e) => {
        

        const profileData = {
            firstName: firstName,
            lastName: lastName,
            city: city,
            address: address,
          };
        
          

        if (firstName.length < 2 || lastName.length < 2 || city.length < 2 || address.length < 2 ) {
            setError('All input boxes are required!')
            console.log(error)
            return;
        };

        localStorage.setItem('profileInformation', JSON.stringify(profileData));
        navigate("/");
        console.log('Success')
    };
    
    
   

    const auth = getAuth(app);
    
    onAuthStateChanged(auth, (user) => {
        setUserName(user.email)  
    })
    
    

    if (storedUserData) {
        const userData = JSON.parse(storedUserData)
        filedToComplete = (<div id='profile-info'>
        <h2 id='header-profile'>Profile Information</h2>
        <h3 id='header-profile'>{userName}</h3>
        <div className='form-group-profile'>
            <label className='label-profile' htmlFor="firstName">First Name:</label>
            <h2 className='profile-info-style'>{userData.firstName}</h2>
        </div>
        <div className='form-group-profile'>
            <label className='label-profile' htmlFor="lastName">Last Name:</label>
            <h2 className='profile-info-style'>{userData.lastName}</h2>
        </div>
        <div className='form-group-profile'>
            <label className='label-profile' htmlFor="city">City:</label>
            <h2 className='profile-info-style'>{userData.city}</h2>
        </div>
        <div className='form-group-profile'>
            <label className='label-profile' htmlFor="address">Address:</label>
            <h2 className='profile-info-style'>{userData.address}</h2>
        </div>
        <div id='button-holder' className='updatedLgoutBtn'>
            
            <button id='lgout-btn'  onClick={handleLogout}>Log Out</button>
        </div>
        
    </div>
    )
    } else {
        filedToComplete = (
            <div id='profile-info'>
                {error && <div className='errorProfile'>
                    {error}
                </div> }
                <h2 id='header-profile'>Profile Information</h2>
                <h3 id='header-profile'>{userName}</h3>
                <div className='form-group-profile'>
                    <label className='label-profile' htmlFor="firstName">First Name:</label>
                    <input 
                        type="text" 
                        required 
                        className='text-input-profile' 
                        placeholder='First Name'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='form-group-profile'>
                    <label className='label-profile' htmlFor="lastName">Last Name:</label>
                    <input 
                        type="text" 
                        required 
                        className='text-input-profile'
                        placeholder='Last Name' 
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='form-group-profile'>
                    <label className='label-profile' htmlFor="city">City:</label>
                    <input 
                        type="text" 
                        required 
                        className='text-input-profile'
                        placeholder='City' 
                        name='city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='form-group-profile'>
                    <label className='label-profile' htmlFor="address">Address:</label>
                    <input 
                        type="text"
                        required 
                        className='text-input-profile'
                        placeholder='Address' 
                        name='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div id='button-holder'>
                    <button id='lgout-btn-2' onClick={handleSubmit}>Confirm Information</button>
                    <button id='lgout-btn' onClick={handleLogout}>Log Out</button>
                </div>
                
                
            </div>
           ) 
    }
    
    

    
   
    
   

  return (
    <section id='profile-section' style={{ backgroundImage: `url(${back})` }}>
        <div id='wrapper-profile-expanded'>
            {filedToComplete}
        </div>
        
        
    </section>
  )
}
