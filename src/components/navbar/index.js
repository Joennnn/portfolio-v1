import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './index.scss';
import { IconLogo } from "../../assets/icons";
import { Menu } from '../index';

const Navbar = () => {
    const ResumeLink = (
        <a className="resume-button" href="https://drive.google.com/file/d/1-r0w4zj0xEaZVpX8sYpporBKjTWVwrgd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      );
    return (
        <>
        <div className='navbar-container'>
            <div className='navbar'>
                <Link className="logo" to="/">
                    <IconLogo />
                </Link>

                <nav className='navbar-links'>
                    <ol>
                        <li>
                            <NavLink exact="true" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" className="about-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" className="project-link" to="/project">
                                Projects
                            </NavLink>
                        </li>
                    </ol>
                    <div>{ ResumeLink }</div>
                </nav>
            </div>
            <Menu />
        </div>
        </>
  )
}

export default Navbar
