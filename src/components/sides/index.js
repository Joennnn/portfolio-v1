import React from 'react'
import { IconLinkedin, IconGithub } from '../../assets/icons'
import './index.scss'

const Sides = () => {
  return (
    <div className='social-container'>
        <div className='social-links-container'>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/joentai/" aria-label="linkedin" target="_blank" rel="noreferrer">
                        <IconLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Joennnn" aria-label="github" target="_blank" rel="noreferrer">
                        <IconGithub />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sides
