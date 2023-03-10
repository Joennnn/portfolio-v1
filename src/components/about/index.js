import React from 'react'
import './index.scss'

const About = () => {
  return (
    <div className='section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>About Me</h1>
          <p>
            Hello! My name Joen and I enjoy learning and creating things that interest me. 
            My interest in IT started back in secondary schoole when I decided to try hosting servers
            on minecraft to play with my friends — turns out searching for ways to host a Minecraft server 
            has spark a deep curiosity in all things web-related.
          </p>
          <p>
            Since then, I've had the privilege of working as
            <span className='animateHover'>
              <a href="https://themeetinglab.eventsair.com/atcsa-website/"> a freelance for ATCSA </a>
            </span> 
            and 
            <span className='animateHover'>
              <a href="https://www.group-ib.com/"> a Data Analyst for Group-IB</a>
            </span>. 
            Working at these places has only 
            made me more passionate in improving myself and using what I learnt to create new things.
          </p>
          <div className="skills-list">
            <p>
              These are some of the recent technologies I have been working with:
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
