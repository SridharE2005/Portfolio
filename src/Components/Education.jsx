import React from 'react';
import '../cssFiles/Education.css';

const Education = () => {
  return (
    <div className="education-main">
      
      <div className="education-timeline">
        <div className="education-item">
          <div className="edu-year">2022 - Present</div>
          <div className="edu-details">
            <h3>Bachelor of Engineering in Computer Science</h3>
            <p>Mahendra Engineering College,Namakkal,Tamil Nadu</p>
          </div>
        </div>

        <div className="education-item">
          <div className="edu-year">2021 - 2022</div>
          <div className="edu-details">
            <h3>Higher Secondary Education (HSC)</h3>
            <p>Gonernment Higher Secondary School, Tamil Nadu</p>
          </div>
        </div>

        <div className="education-item">
          <div className="edu-year">2019 - 2020</div>
          <div className="edu-details">
            <h3>Secondary School Education (SSLC)</h3>
            <p>Gonernment Higher Secondary School, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
