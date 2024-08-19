import React from 'react'
import './Program.css'
import services_1 from '../../assets/icon-online.svg'
import services_2 from '../../assets/icon-budgeting.svg'
import services_3 from '../../assets/icon-onboarding.svg'
import services_4 from '../../assets/icon-api.svg'

const Program = () => {
  return ( 
    <div className='services'>
        <div className='service-text'>
            <h3>Why choose EasyBank?</h3>
            <p>We leverage Open Banking to turn you bank account into your financial hub.
                 Control your finances like never before</p>
        </div>

        <div className='service-images'>
        <div className="service">
            <img src={services_1} alt="" />
            <h5>Online Banking</h5>
            <p>Our modern web and mobile appplications allow you to keep track of your 
                finances wherever you are in the world.
            </p>
        </div>

        <div className="service">
            <img src={services_2} alt="" />
            <h5>Simple Budgeting</h5>
            <p>See exactly where your money goes each month. Receive
                notifications when you're close to hitting your limits.
            </p>
        </div>

        <div className="service">
            <img src={services_3} alt="" />
            <h5>Fast Onboarding</h5>
            <p>We don't do branches. Open your account in minutes online and start taking 
                control of your finances right away.
            </p>
        </div>

        <div className="service">
            <img src={services_4} alt="" />
            <h5>Open API</h5>
            <p>Manage your savings, investments, pension, and much more from one account.
                Tracking your money has never been easier.
            </p>
        </div>

        </div>
      
    </div>
  )
}

export default Program
