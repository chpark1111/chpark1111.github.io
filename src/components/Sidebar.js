import React from 'react';
import './components.css';
import resume from '../assets/resume.pdf';
import { FaEnvelope, FaXTwitter, FaGraduationCap, FaGithub, FaLinkedin } from 'react-icons/fa6'; 
// Note: Using the v6 imports for react-icons if needed. Adjust import as per your chosen icon set.
// If using react-icons/fa, just use `import { FaEnvelope, FaTwitter, FaGraduationCap, FaGithub, FaLinkedin } from 'react-icons/fa';`
import profileImg from '../assets/profile.jpeg';
import News from "./news/News";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <h2 className="name">Chanhyeok Park</h2>
      <div className="subtitle">Undergraduate Student at KAIST</div>
      <div className="affiliation">KAIST CS & IP</div>
      <div className="sidebar-icons">
        <a href="mailto:chpark11111023@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://x.com/chpark11111023" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
          <FaXTwitter />
        </a>
        <a href="https://scholar.google.com/citations?user=XrShcqcAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar">
          <FaGraduationCap />
        </a>
        <a href="https://github.com/chpark1111" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/%EC%B0%AC%ED%98%81-%EB%B0%95-0549a3340/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={resume} target="_blank" rel="noreferrer" aria-label="CV" className="cv-link">
          cv
        </a>
      </div>

      <News />
    </aside>
  );
}

export default Sidebar;
