import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './index.scss';
import { IconLogo } from "../../assets/icons";

const Navbar = () => {
    const ResumeLink = (
        <a className="resume-button" href="https://drive.google.com/file/d/1Yw3laRhcLf7uO-4HvtMI3J9V7uOfUYWl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      );
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link className="logo" to="/">
                    <IconLogo />
                </Link>

                    <nav>
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
            </div>
  )
}

export default Navbar
