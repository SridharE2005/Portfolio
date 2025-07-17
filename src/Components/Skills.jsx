import React from 'react'
import '../cssFiles/Skills.css'
import HTML from '../assets/HTML.png'
import java from '../assets/java.png'
import CSS from '../assets/CSS.png'
import javascript from '../assets/javascript.png'
import Reacticon from '../assets/react.png'
import Node from '../assets/node.png'
import express from '../assets/express.png'
import mysql from '../assets/mysql.png'

const Skills = () => {
  return (
    <>
    <div className="skills-main">
        <div className="skills-content">
            <ul>
               <li><img src={HTML} alt="" /></li>
               <li><img src={CSS} alt="" /></li>
               <li><img src={javascript} alt="" /></li>
               <li><img src={Reacticon} alt="" /></li>
               <li><img src={Node} alt="" /></li>
               <li><img src={express} alt="" /></li>
               <li><img src={java} alt="" /></li>
               <li><img src={mysql} alt="" /></li>
               
               
            </ul>
        </div>
    </div>
    </>
  )
}

export default Skills