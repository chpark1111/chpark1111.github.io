import React from 'react';
import './components.css';
import ProfileSection from './ProfileSection';
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
    </div>
  );
}

export default MainContent;
