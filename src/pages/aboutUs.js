import React from 'react'
import male from '../assets/m.png'
import '../assets/aboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutMaindiv bgMain d-flex flex-column justify-content-center py-3 py-lg-5'>
      <h1 className='text-center text-white display-4'><b>About Us</b></h1>
      <div>
        <div className='row row-cols-1 row-cols-lg-2 mx-1 mx-md-5 gy-4'>

          <div className='col aboutShit'>
            <div className="card text-center card-style">
                <div className="card-body">
                <img src={male} alt="" className='image'></img>
                  <div className='aboutContainer'>
                    <h1>Alex Pacaldo</h1>
                    <h5>Full Stack Developer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore incidunt laborum
                      corporis quam harum accusantium minima velit similique. Molestiae commodi, pariatur
                      alias accusantium et nam adipisci illum ut exercitationem vitae?
                    </p>
                    <div>
                      <a href="https://www.facebook.com/alex.pacaldo.14/" class="text-dark"><i class="bi bi-facebook me-3"></i></a>
                      <a href="https://www.instagram.com/alex_pacaldo/" class="text-dark"><i class="bi bi-instagram me-3"></i></a>
                      <a href="https://github.com/AlexPacaldo" class="text-dark"><i class="bi bi-github"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href='https://alexpacaldo.github.io/Portfolio/' className='btn cardButtonLeft mx-2'>Portfolio</a>
                  <a href='mailto:alexpacaldo1105@gmail.com?subject = Feedback&body = Message' className='btn cardButtonRight'>Message</a>
                </div>
            </div>
          </div>

          <div className='col aboutShit'>
            <div className="card text-center cardStyle">
                <div className="card-body">
                <img src={male} alt="" className='image'></img>
                  <div className='aboutContainer'>
                    <h1>Bernard Bryan Blanco</h1>
                    <h5>Full Stack Developer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore incidunt laborum
                      corporis quam harum accusantium minima velit similique. Molestiae commodi, pariatur
                      alias accusantium et nam adipisci illum ut exercitationem vitae?
                    </p>
                    <div>
                      <a href="#" class="text-dark"><i class="bi bi-facebook me-3"></i></a>
                      <a href="#" class="text-dark"><i class="bi bi-instagram me-3"></i></a>
                      <a href="#" class="text-dark"><i class="bi bi-github"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href='#' className='btn cardButtonLeft mx-2'>Portfolio</a>
                  <a href='#' className='btn cardButtonRight'>Message</a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs
