import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[menu,setMenu] = useState("Shop")

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='nav-img' src={logo} alt=''/>
        <p>TREE</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Shop")}}><Link to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Trees")}}><Link to='/Trees'>Trees</Link>{menu==="Trees"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Shrubs")}}><Link to='/Shrubs'>Shrubs</Link>{menu==="Shrubs"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Perennials")}}><Link to='/Perennials'>Perennials</Link>{menu==="Perennials"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Indoorplants")}}><Link to='/Indoorplants'>Indoor plants</Link>{menu==="Indoorplants"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <link to='/Login'>
          <button>Login</button>
        </link>
        <link to='/Cart'>
          <img src={cart_icon}></img>
        </link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
