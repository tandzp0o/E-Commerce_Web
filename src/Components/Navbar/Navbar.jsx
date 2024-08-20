import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='nav-img' src={logo} alt=''/>
        <p>TREE</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("trees")}}><Link style={{textDecoration: 'none'}} to='/trees'>Trees</Link>{menu==="trees"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shrubs")}}><Link style={{textDecoration: 'none'}} to='/shrubs'>Shrubs</Link>{menu==="shrubs"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("perennials")}}><Link style={{textDecoration: 'none'}} to='/perennials'>Perennials</Link>{menu==="perennials"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("indoorplants")}}><Link style={{textDecoration: 'none'}} to='/indoorplants'>Indoor plants</Link>{menu==="indoorplants"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt=''></img>
        </Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
