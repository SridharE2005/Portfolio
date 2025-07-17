import React from 'react'
import '../cssFiles/Popup.css' 

const Popup = ({ selected, setcert }) => {
  return (
    <div className="certificate-popup" onClick={() => setcert(false)}>
      <div className="popup-content">
        <img src={selected.certificate} alt="Selected Certificate" />
      </div>
    </div>
  )
}

export default Popup
