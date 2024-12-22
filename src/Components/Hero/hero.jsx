import React from 'react'
import "./hero.css";
import heroImg from "/shoe4.png"
import flip from "/flipkart.png";
import ama from "/amazon.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className='buttons'>
        <button className='shop'>Shop Now</button>
        <button className='category'>Category</button>
        </div>
        <div className="Available">
          <p>Also Available On</p>
          <img src={ama} alt="" />
          <img src={flip} alt="" />
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero;
