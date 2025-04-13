import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>WildHoney</p>
      </div>
      <ul className='nav-manu'>
        <li>Shop</li>
        <li>Man</li>
        <li>Woman</li>
        <li>Kids</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt=''/>
      </div>
    </div>
  )
}

export default Navbar
