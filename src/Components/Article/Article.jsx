import React from 'react'
import './Article.css'
import {Link} from 'react-scroll';
import article_1 from '../../assets/image-currency.jpg'
import article_2 from '../../assets/image-restaurant.jpg'
import article_3 from '../../assets/image-plane.jpg'
import article_4 from '../../assets/image-confetti.jpg'


const Program = () => {
  return ( 
    <div className='articles'>
        <div className='article-text'>
            <h3>Latest Articles?</h3>
        </div>

        <div className='article-images'>
        <div className="article">
            <img src={article_1} alt="" />
            <h5><Link>Receive money in any currency with no fees</Link></h5>
            <p>Our modern web and mobile appplications allow you to keep track of your 
                finances wherever you are in the world.
            </p>
        </div>

        <div className="article">
            <img src={article_2} alt="" />
            <h5><Link>Treat yourself without worrying about money</Link></h5>
            <p>See exactly where your money goes each month. Receive
                notifications when you're close to hitting your limits.
            </p>
        </div>

        <div className="article">
            <img src={article_3} alt="" />
            <h5><Link>Take your Easybank Card wherver you go</Link></h5>
            <p>We don't do branches. Open your account in minutes online and start taking 
                control of your finances right away.
            </p>
        </div>

        <div className="article">
            <img src={article_4} alt="" />
            <h5><Link>Our invite-only Beta accounts are now live!</Link></h5>
            <p>Manage your savings, investments, pension, and much more from one account.
                Tracking your money has never been easier.
            </p>
        </div>

        </div>
      
    </div>
  )
}

export default Program
