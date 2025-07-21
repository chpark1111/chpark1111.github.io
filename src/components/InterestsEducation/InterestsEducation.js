import React from 'react';
import { FaBook, FaGraduationCap } from 'react-icons/fa';
import './InterestsEducation.css';

function InterestsEducation({ className = '' }) {
  return (
    <section className={`interests-education-section ${className}`}>
      <div className="interests-col">
        <h3 className="section-title">Interests</h3>
        <ul className="interests-list">
          <li>
            <FaBook className="interest-icon" />
            <strong> Deep Learning / LLMs</strong>
          </li>
          <li>
            <FaBook className="interest-icon" />
            <strong> Intellectual Property (IP) Law</strong>
          </li>
          <li>
            <FaBook className="interest-icon" />
            <strong> Legal Technology</strong>
          </li>
        </ul>
      </div>

      <div className="education-section">
        <h3 className="education-title">Education</h3>

        <div className="education-item">
          <FaGraduationCap className="edu-icon" />
          <div className="edu-content">
            <strong className="edu-degree">
              B.S. in Computer Science (CS) and Intellectual Property (IP)
            </strong>
            <p className="edu-details">
              Korea Advanced Institute of Science & Technology (KAIST), South Korea <br />
              <span className="edu-date">Mar. 2020 - Feb. 2025</span> <br />
              GPA: 4.03/4.3 <em>(Summa Cum Laude)</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterestsEducation;
