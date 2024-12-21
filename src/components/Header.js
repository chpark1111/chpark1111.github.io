import React from 'react';
import './components.css';
import resume from '../assets/resume.pdf';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const smoothScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-left" 
      onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: 'smooth' });        
        }}>
        <h1>Chanhyeok Park</h1>
      </div>
      <div className="header-nav">
        <span onClick={() => smoothScrollTo('#introduction')}>Introduction</span>
        <span onClick={() => smoothScrollTo('#publications')}>Publications</span>
        {/* <span onClick={() => smoothScrollTo('#experiences')}>Experiences</span>
        <span onClick={() => smoothScrollTo('#awards')}>Awards & Honors</span> */}
        <span onClick={() => window.open(resume, '_blank')}>CV</span>
      </div>
    </header>
  );
}

export default Header;
