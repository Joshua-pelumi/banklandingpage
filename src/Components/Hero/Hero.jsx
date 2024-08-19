import React from 'react'
import './Hero.css'
import phone_icon from '../../assets/image-mockups.png'
import bg_desktop from '../../assets/bg-intro-desktop.svg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-left'>
        <h1>Next Generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a 
          one-stop-shop for spending, saving, bugeting, investing, and much more.
        </p>
            <button className='btn'>Request Invite </button>
      </div>

      <div className='hero-right'>
        <div className='img1'>
        <img src={bg_desktop} alt="" />
        </div>
        <div className='img2'>
        <img src={phone_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
