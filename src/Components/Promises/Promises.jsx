import React from 'react'
import ex_image from '../Assets/ex.png'


import './Promises.css'
const Promises = () => {
  return (
    <div className='promises'>
        <img src={ex_image} alt="" />
        <div className="promises-text">
            <header class="section-header">
                <small>OUR PROMISE</small>
                <h2>Arrive &amp; Thrive<sup>™</sup></h2>
            </header>
            <p>What good is getting your landscape in the mail if your plants show up dead? We've got to admit, sending a tree in a box across the country is pretty unorthodox. Thankfully, we've become experts at it. Because of our Arrive & Thrive ™ Guarantee, you can rest assured that your trees will get to you happy and in perfect health.</p>
            <p><a href="/" className="button">More Infomation</a></p>
        </div>
    </div>
  )
}

export default Promises
