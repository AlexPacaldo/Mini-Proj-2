import React from 'react'
const Footer = () => {
  return (
    <footer className='py-1'>
      <div className='row  row-cols-1 row-cols-md-2 mx-4 g-3 py-3'>
        <div className='col text-center text-md-start social'>
            <h4>Contact Us</h4>
            <br></br>
            <p><i class="bi bi-facebook"></i> <a href='https://www.facebook.com/'>Araña</a></p>
            <p><i class="bi bi-instagram"></i> <a href='https://www.instagram.com/'>Araña_Web</a></p>
            <p><i class="bi bi-envelope-fill"></i> <a href='mailto:alexpacaldo1105@gmail.com?subject = Feedback&body = Message'>arana@gmail.com</a></p>
        </div>
        <div className='col text-center text-md-start'>
            <h3>Araña.com</h3>
            <br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi consequatur ab dicta .</p>
        </div>
      </div>
      <p className='text-center'>Copyright @2022. All rights reserved.</p>
    </footer>
  )
}

export default Footer
