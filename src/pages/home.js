import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/homePage.css'
import webdev from '../assets/webdevone.jpg'

const Home = () => {
  return (
    <div>
      <div className='d-flex flex-column align-items-start justify-content-center hero px-5'>
        <div className='herocont py-4 px-5'>
          <p>
            <b>Find the Perfect Job and<br></br>
            Developer for you!</b>
          </p>
        
          <div className='text-center'>
            <Link className="btn herobutt cardButtonRight w-50" role="button" to='/signUp'>Join Today!</Link>
          </div>
        </div>
      </div>

      
        <div className='row fourthSec row-cols-1 row-cols-lg-2 py-4 py-lg-5 px-lg-5'>
          <div className='col px-5 d-flex flex-column justify-content-center text-center'>
            <h1>A Whole World of<br></br>Web Developers at your fingertips</h1>
            <br></br>

            <h2>The best for every budget</h2>
            <h5>Find high-quality services at every price point. No hourly rates, just project-based pricing.</h5>
            <br></br>

            <h2>Quality work done quickly</h2>
            <h5>Find the right freelancer to begin working on your project within minutes.</h5>
            <br></br>

            <h2>24/7 support</h2>
            <h5>Questions? Our round-the-clock support team is available to help anytime, anywhere.</h5>
            <br></br>

          </div>
          <div className='col text-center imgCont d-flex align-items-center'>
            <img src={webdev} alt='webdevpic'></img>
          </div>
        </div> 

    </div>
  )
}

export default Home
