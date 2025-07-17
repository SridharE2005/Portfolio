import React from 'react'
import '../cssFiles/Home.css'
import homepic from '../assets/Sridhar.jpg'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
const Home = () => {
    const [text]=useTypewriter({
        words:['Full Stack Developer','Web Developer','Software Engineer'],
        loop:true,
        
    })
  return (
    <div className="home-main">
        <div className="photo-main">
            <img src={homepic} alt="" />
        </div>
        <div className="home-content">
            <div className="home-content-main">
            <p ><span className='p1'>Hello,My name is</span> <br />
            <span className='p2'>Sridhar E</span><br />
            <span className='p3'>I am a <span>{text}</span><Cursor /></span>
            </p>
            
            <p ></p>
            </div>
            
        </div>
    </div>
  )
}

export default Home