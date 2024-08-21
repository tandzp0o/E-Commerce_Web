import React from 'react'
import Hero from '../Components/Hero/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popular from '../Components/Popular/Popular';
import Promises from '../Components/Promises/Promises';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Promises/>
    </div>
  )
}

export default Shop
