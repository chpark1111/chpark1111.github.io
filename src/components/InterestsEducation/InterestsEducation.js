import React from 'react';
import { FaBook, FaBuilding, FaGraduationCap } from 'react-icons/fa';
import './InterestsEducation.css';

function InterestsEducation({ className = '' }) {
  return (
    <section className={`interests-education-section ${className}`}>
      <div className="interests-col">
        <h3 className="section-title">Interests</h3>
        <ul className="interests-list">
          <li>
            <FaBook className="interest-icon" />
            <strong> AI Safety / AI Governance</strong>
          </li>
          <li>
            <FaBook className="interest-icon" />
            <strong> IP Law &amp; Legal Technology</strong>
          </li>
          <li>
            <FaBook className="interest-icon" />
            <strong> Finance</strong>
          </li>
        </ul>

        <section className="affiliations-section" aria-labelledby="affiliations-title">
          <h3 className="section-title" id="affiliations-title">Affiliations</h3>
          <div className="affiliation-item">
            <FaBuilding className="affiliation-icon" aria-hidden="true" />
            <div>
              <strong className="affiliation-name">IP Intelligence</strong>
              <p className="affiliation-role">Co-Founder and CTO</p>
            </div>
          </div>
        </section>
      </div>

      <div className="education-section">
        <h3 className="education-title">Education</h3>

        <div className="education-item">
          <FaGraduationCap className="edu-icon" />
          <div className="edu-content">
            <strong className="edu-degree">
              Integrated M.S.–Ph.D. Program in AI Future Studies
            </strong>
            <p className="edu-details">
              Korea Advanced Institute of Science &amp; Technology (KAIST), South Korea <br />
              Advisor: Prof. Woojung Jon <br />
              <span className="edu-date">Sep. 2026 – Present</span> <br />
              GPA: 4.18/4.3
            </p>
          </div>
        </div>

        <div className="education-item">
          <FaGraduationCap className="edu-icon" />
          <div className="edu-content">
            <strong className="edu-degree">
              B.S. in Computer Science (CS) and Intellectual Property (IP)
            </strong>
            <p className="edu-details">
              Korea Advanced Institute of Science & Technology (KAIST), South Korea <br />
              <span className="edu-date">Mar. 2020 - Feb. 2025</span> <br />
              GPA: 4.02/4.3 <em>(Summa Cum Laude)</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterestsEducation;
