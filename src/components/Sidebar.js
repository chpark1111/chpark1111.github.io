import React from 'react';
import './components.css';
import { FaEnvelope, FaXTwitter, FaGraduationCap, FaGithub, FaLinkedin } from 'react-icons/fa6'; 
// Note: Using the v6 imports for react-icons if needed. Adjust import as per your chosen icon set.
// If using react-icons/fa, just use `import { FaEnvelope, FaTwitter, FaGraduationCap, FaGithub, FaLinkedin } from 'react-icons/fa';`
import profileImg from '../assets/profile.jpeg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <h2 className="name">Sohyun An</h2>
      <div className="subtitle">PhD student at UCLA</div>
      <div className="affiliation">UCLA CS</div>
      <div className="sidebar-icons">
        <a href="mailto:example@ucla.edu" target="_blank" rel="noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
          <FaXTwitter />
        </a>
        <a href="https://scholar.google.com/" target="_blank" rel="noreferrer" aria-label="Google Scholar">
          <FaGraduationCap />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="/cv" target="_blank" rel="noreferrer" aria-label="CV" className="cv-link">
          cv
        </a>
      </div>

      <div className="news-section">
        <h3>News</h3>
        <div className="news-item">
          <strong>2024.05</strong> ? Attending CHI'24 in-person! Let's chat :D
        </div>
        <div className="news-item">
          <strong>2024.03</strong> ???? Excited to start my Internship @Naver AI Lab!
        </div>
        <div className="news-item">
          <strong>2023.10</strong> ???? Serving as Student Volunteer for CSCW'23!
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
