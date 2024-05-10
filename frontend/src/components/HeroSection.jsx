import React from 'react'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <section className='hero'>
      <img src="/restaurant.jpg" alt="restaurant" />  
      <div className='item'>
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>We believe that its all about BIG DREAMS and small details</p>
          <Link to='contact' spy={true} smooth={true} duration={500}>Book Now</Link>
        </div>
      </div>    
    </section>
  )
}

export default HeroSection
