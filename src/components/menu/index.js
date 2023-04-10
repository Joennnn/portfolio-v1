import { NavLink } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: 20px;
    padding: 20px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--blue);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--blue);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
    menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
    margin-bottom: 180px;
  }

  ol {
    flex-direction: column;
    padding: 0;
    margin-right: 35px;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      font-size: clamp(var(--fs-sm), 4vw, var(--fs-lg));
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
      &:before {
        display: block;
        margin-bottom: 5px;
        color: var(--blue);
        font-size: var(--fs-sm);
      }
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);
        &:hover,
        &:active,
        &:focus {
            color: var(--blue);
            outline: 0;
        }
        width: 100%;
        padding: 3px 20px 20px;
    }
  }

  .resume-link {
    color: var(--blue);
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fs-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--blue-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navRef = useRef(null);
  
    const ResumeLink = (
        <a className="resume-button" href="https://drive.google.com/file/d/1NI_z6h2Ntsh6SN6kppB5x1qox56w8HGC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
    );
    return (
        <StyledMenu>
            <Helmet>
                <body className={menuOpen ? 'blur' : ''} />
            </Helmet>

            <div>
                <StyledHamburgerButton
                onClick={toggleMenu}
                menuOpen={menuOpen}
                aria-label="Menu">
                    <div className="ham-box">
                        <div className="ham-box-inner" />
                    </div>
                </StyledHamburgerButton>

                <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
                <nav ref={navRef}>
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
                </StyledSidebar>
            </div>
        </StyledMenu>
  )
}

export default Menu
