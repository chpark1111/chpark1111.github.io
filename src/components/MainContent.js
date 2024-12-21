import React from 'react';
import './components.css';
import ProfileSection from './ProfileSection';
import PublicationSection from './publications/PublicationSection';
import ProjectsSection from './ProjectsSection';
import InterestsEducation from './InterestsEducation/InterestsEducation';

function MainContent() {
  return (
    <div className="main-content">
      <ProfileSection />
      <InterestsEducation />
      <PublicationSection />
      {/* <ProjectsSection /> */}
    </div>
  );
}

export default MainContent;
