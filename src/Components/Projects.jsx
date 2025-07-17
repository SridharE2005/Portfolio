import React, { useState } from 'react'
import '../cssFiles/Projects.css'
import Password from '../assets/Projects/Password.png'
import Expense from '../assets/Projects/Expense.png'
import CRUDApplication from '../assets/Projects/CRUDApplication.png'
import Currency from '../assets/Projects/Currency.png'
import FootCart from '../assets/Projects/FootCart.png'
import Weather from '../assets/Projects/Weather.png'
import AiInterview from '../assets/Projects/AI Interview.png'
import PGAccomodation from '../assets/Projects/PG Accomodation.jpg'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    { img: Password, text: 'Password Generator',link:"https://github.com/SridharE2005/Password-Strength.git"},
    { img: Expense, text: 'Expense Tracker',link:"https://github.com/SridharE2005/Weather-App.git" },
    { img: CRUDApplication, text: 'CRUD Application',link:"https://github.com/SridharE2005/CRUD-Application.git" },
    { img: Currency, text: 'Currency Convertor',link:"https://github.com/SridharE2005/Currency-Convertor.git" },
    { img: FootCart, text: 'FootCart App',link:"https://github.com/SridharE2005/FoodCart-App.git" },
    { img: Weather, text: 'Weather App',link:"https://github.com/SridharE2005/Weather-App.git" },
    { img: AiInterview, text: 'Ai Based Interview app',link:"https://github.com/SridharE2005/AI-Based-Interview-Preparation-Platform.git" },
    { img: PGAccomodation, text: 'PG Accomodation',link:"https://github.com/SridharE2005/Paying-Guest-Accomodation.git" }
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <div className="project-main">
      <div className="list-div">
        <ul className="project-list">
        {visibleProjects.map((project, index) => (
          <li key={index}>
            <img src={project.img} alt={project.text} />
            <div></div>
            <p>{project.text}</p>
            <button><a href={project.link}>Visit</a></button>
          </li>
        ))}
      </ul>
      </div>
      
      {
  !showAll ? (
    <div className="show-more-container">
      <button className="show-more-btn" onClick={() => setShowAll(true)}>Show More</button>
    </div>
  ) : (
    <div className="show-more-container">
      <button className="show-more-btn" onClick={() => setShowAll(false)}>Show Less</button>
    </div>
  )
}

    </div>
  )
}

export default Projects
