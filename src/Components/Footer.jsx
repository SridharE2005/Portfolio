import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import '../cssFiles/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="contact-main">
      <div className="logos">
        <p><a href="https://www.facebook.com/share/16zD5KGTy7/"><FaFacebookSquare /></a></p>
        <p><a href="https://www.linkedin.com/in/sridhare2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a></p>
        <p><a href="https://www.facebook.com/share/16zD5KGTy7/"><FaSquareXTwitter /></a></p>
        <p><a href="https://www.instagram.com/sridhar.e007?igsh=MXBzeDh5ZW5jemgydA=="><FaInstagramSquare /></a></p>
      </div>
      <p>PhoneNo : +91 8807136797</p>
      <p>Email : sridhare2005@gmail.com</p>
      
    </div>
    </>
  )
}

export default Footer