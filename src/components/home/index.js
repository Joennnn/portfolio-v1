import React from 'react'
import './index.scss'

const Home = () => {
  return (
    <div className='section'>
        <div className='home-container'>
          <div className='home-text'>
              <h1>Hi, my name is</h1>
              <h2 className='big-heading'>Joen Tai</h2>
              <h3 className='big-heading'>Cybersecurity student.</h3>
              <p>
                  I'm a cybersecurity student interested in building
                  websites. Currently, I'm focused on honing my skills
                  by building projects and learning along the way.
              </p>

              <a
                  className="email-link"
                  href="mailto:joentai27@gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  Contact Me!
              </a>
            </div>
        </div>
    </div>
  )
}

export default Home