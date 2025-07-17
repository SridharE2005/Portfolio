import React, { useState } from 'react'
import '../cssFiles/Certificates.css'
import JavaNPTEL from '../assets/Certificates/Java NPTEL.png'
import CloudNPTEL from '../assets/Certificates/Cloud NPTEL.png'
import IOTNPTEL from '../assets/Certificates/IOT NPTEL.png'
import Learnathon from '../assets/Certificates/Learnathon.png'
import Salesforce from '../assets/Certificates/Salesforce.png'
import ServiceNow from '../assets/Certificates/ServiceNow.png'
import WebDevelopment from '../assets/Certificates/Web Development.png'
import UiPath from '../assets/Certificates/UiPath.png'
import AWS from '../assets/Certificates/AWS.png'
import Popup from './Popup'

const certificates = [
  { img: JavaNPTEL, text: 'Java NPTEL' },
  { img: Salesforce, text: 'Salesforce' },
  { img: CloudNPTEL, text: 'Cloud NPTEL' },
  { img: IOTNPTEL, text: 'IoT NPTEL' },
  { img: AWS, text: 'AWS' },
  { img: UiPath, text: 'UiPath' },
  { img: ServiceNow, text: 'ServiceNow' },
  { img: WebDevelopment, text: 'Web Development' },
  { img: Learnathon, text: 'Learnathon' }
]

const Certificates = () => {
  const duplicatedCertificates = [...certificates, ...certificates]
  const [cert, setcert] = useState(false)
  const [selected, setselected] = useState({})

  const handleClick = (index, certificate) => {
    setselected({ index, certificate })
    setcert(true)
  }

  return (
    <div className="certificates-main">
      <div className="certificates-content">
        <div className="scrolling-wrapper">
          <ul className="certificate-list">
            {duplicatedCertificates.map((cert, index) => (
              <li key={index} onClick={() => handleClick(index, cert.img)}>
                <img src={cert.img} alt={cert.text} />
                <p>{cert.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {cert && <Popup selected={selected} setcert={setcert} />}
    </div>
  )
}

export default Certificates
