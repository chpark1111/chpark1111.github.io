import React from 'react';
import './components.css';
import ProfileSection from './ProfileSection';
import Skills from './skills/Skills';
import PublicationSection from './publications/PublicationSection';
import InterestsEducation from './InterestsEducation/InterestsEducation';
import Experiences from './experiences/Experiences';

function MainContent() {
  return (
    <div className="main-content">
      <ProfileSection />
      <InterestsEducation />
      <PublicationSection />
      <Experiences />
      <Skills />
    </div>
  );
}

export default MainContent;
