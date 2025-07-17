import React from 'react'
import '../cssFiles/About.css'
import aboutpic from '../assets/Sridhar.jpg'

const About = () => {
  return (
    <div className="about-main">
      <div className="about-content">
        <div className="about-profile">
          <img src={aboutpic} alt="Profile" />
        </div>
        <div className="about-description">
          <p>
            I am Sridhar, a passionate and goal-oriented full stack developer with a strong interest in building dynamic and responsive web applications. I specialize in technologies like React, Node.js, Express, and MongoDB, and I enjoy turning creative ideas into functional, real-world projects. With a focus on clean code and user-friendly design, I continuously strive to improve my skills and stay updated with the latest trends in web development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
