import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Quick 2 Learn</h1>
            <p className='hero-description'>
                Empower your future with seamless access to education. Our student enrollment system simplifies the process, ensuring you focus on learning, not logistics. Join us and take the first step towards your academic success!
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home