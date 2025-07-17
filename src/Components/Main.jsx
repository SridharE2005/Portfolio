import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Certificates from './Certificates'
import Projects from './Projects'
import Footer from './Footer'
import '../cssFiles/Main.css'
import Education from './Education'

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="portfolio-main">
        <div className="effect">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <header>
          <nav>
            <div className="nav-left">
              <p>Portfo<span>lio</span></p>
            </div>
            <div className="nav-right">
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <ul className={menuOpen ? 'nav-active' : ''}>
                <li><a href="#home" onClick={handleNavClick}>Home</a></li>
                <li><a href="#aboutus" onClick={handleNavClick}>AboutUs</a></li>
                <li><a href="#education" onClick={handleNavClick}>Education</a></li>
                <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
                <li><a href="#certificates" onClick={handleNavClick}>Certificates</a></li>
                <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="empty"></div>
        <section id="home">
          <Home />
        </section>
        <section id="aboutus">
          <h1><span>A</span>bout me <hr /></h1>
          <About />
        </section>
        <section id="education">
          <h1><span>E</span>ducation <hr /></h1>
          <Education/>
        </section>
        <section id="skills">
          <h1><span>S</span>kills <hr /></h1>
          <Skills />
        </section>
        <section id="certificates">
          <h1><span>C</span>ertificates <hr /></h1>
          <Certificates />
        </section>
        <section id="projects">
          <h1><span>P</span>rojects <hr /></h1>
          <Projects />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Main
