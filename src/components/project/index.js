import React, { useState } from 'react'
import './index.scss'
import Overlay from '../overlay'
import 'font-awesome/css/font-awesome.min.css';
import { Img01, A1_307, A2_307, A1_262, A3_262, A1_301, A2_301, A_369, fyp } from '../../assets/images'

const imgArr = [
  {
    title: "Rock Paper Scissors Website",
    secTitle: "School Assignment",
    image: Img01,
    desc: "Rock Paper Scissors created using HTML/CSS, and JavaScript",
    moreDesc: "This website was created when I tried to practice my HTML/CSS and JavaScript.",
  }, 
  { 
    title: "PHP Quiz Website",
    secTitle: "School Assignment",
    image: A1_307, 
    desc: "Created using PHP for my web server programming assignment",
    moreDesc: "This website was created for my school assignment where we tried to create a website that allowed users to take quizzes.",
  }, 
  { 
    title: "Enrolment System Website",
    secTitle: "School Assignment",
    image: A2_307, 
    desc: "Created using PHP and SQL for my web server programming assignment",
    moreDesc: "This website was created for my school assignment where we tried to create a website that allowed users to enrol into the system.",
  }, 
  { 
    title: "Python Rainbow Table Assigment",
    secTitle: "School Assignment",
    image: A1_262, 
    desc: "Created a rainbow table checker using Python for assignment",
    moreDesc: "This program was created for my school assignment where we tried to create a rainbow table checker.",
  }, 
  { 
    title: "Python IDS Assignment",
    secTitle: "School Assignment",
    image: A3_262, 
    desc: "Designed and implemented an intrusion detection system in accordance to the assignment",
    moreDesc: "This program was created for my school assignment where we tried to create an intrusion detection system.",
  }, 
  { 
    title: "Ransomeware Assignment",
    secTitle: "School Assignment",
    image: A1_301, 
    desc: "Created a ransomware using Python for assignment",
    moreDesc: "This program was created for my school assignment where we tried to create a ransomware.",
  }, 
  { 
    title: "P2MS Python Assignment",
    secTitle: "School Assignment",
    image: A2_301, 
    desc: "Created a Pay-to-Multi-Signature (P2MS) using Python for assignment.",
    moreDesc: "This program was created for my school assignment where we tried to re-create how Pay-to-Multi-Signature (P2MS) work.",
  }, 
  { 
    title: "Ransomeware Assignment",
    secTitle: "School Assignment",
    image: A_369, 
    desc: "Created a ransomware using Python for assignment",
    moreDesc: "This program was created for my school assignment where we tried to create a ransomware.",
  }, 
  { 
    title: "FileLock Website",
    secTitle: "Final Year Project",
    image: fyp,
    desc: "Created using ReactJS for my FYP website",
    moreDesc: "This site was created for the 'marketing' part of our project and I took it upon myself to create this site while learning more about react.",
  }
];

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className='project-section'>
      <div className='project-container'>
        <div className='project-text'>
          <h1>Some projects that I have done</h1>
          <h3>More coming soon...</h3>
        </div>
      </div>
    </div>
    <div className="flex-container">
      {imgArr.map((item, index) => (
        <div className="flex-item" key={index}>
          <img src={item.image} alt="" />

          <div className="overlay-hover">
            <button onClick={toggleOverlay}><i className="fa fa-search"></i></button>
            <Overlay isOpen={isOpen} onClose={toggleOverlay}>
              <div className='overlay-heading'>
                <h1>{item.title}</h1>
                <h3>{item.secTitle}</h3>
              </div>
              <div className='overlay-description'>
                <img src={item.image} alt="" />
                <p>{item.moreDesc}</p>
                <button onclick="location.href='https://github.com/Joennnn'" type="button">View Code</button>
              </div>
            </Overlay>
            <p className="text">{item.desc}</p>
          </div>
        </div>
      ))} 
    </div>
    </>
  )
}

export default Project