import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.svg"
import facebook from "../../assets/icon-facebook.svg"
import youtube from "../../assets/icon-youtube.svg"
import twitter from "../../assets/icon-twitter.svg"
import pinterest from "../../assets/icon-pinterest.svg"
import instagram from "../../assets/icon-instagram.svg"
import article_2 from '../../assets/image-restaurant.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='row1'>
          <img src={logo} alt="" />
          <ul>
            <li><img src={facebook} alt="" /></li>
            <li><img src={youtube} alt="" /></li>
            <li><img src={twitter} alt="" /></li>
            <li><img src={pinterest} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
          </ul>
        </div>

        <div className="row2">
          <div className="rowA">
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>

          <div className="rowB">
            <ul>
              <li><a href="">Career</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="row3">
          <button className='btn'>Request Invite</button>
          <p>Easybank. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
