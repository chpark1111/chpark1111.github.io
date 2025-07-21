import React from 'react';
import './components.css';

import Sidebar             from './Sidebar';     
import ProfileSection      from './ProfileSection';
import InterestsEducation  from './InterestsEducation/InterestsEducation';
import Skills              from './skills/Skills';
import PublicationSection  from './publications/PublicationSection';
import Experiences         from './experiences/Experiences';

function MainContent() {
  return (
    <div className="main-content">
      <Sidebar />
      <div className="content-grid">
        <ProfileSection className="intro-section" />
        <InterestsEducation  className="info-section" />
        <PublicationSection  className="pubs-section"   />
        <Experiences         className="exp-section" />
        <Skills              className="skills-section" />
      </div>
    </div>
  );
}

export default MainContent;