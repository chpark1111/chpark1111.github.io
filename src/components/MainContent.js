import React from 'react';
import './components.css';
import ProfileSection from './ProfileSection';
import PublicationSection from './publications/PublicationSection';
import ProjectsSection from './ProjectsSection';

function MainContent() {
  return (
    <div className="main-content">
      <ProfileSection />
      <PublicationSection />
      <ProjectsSection />
    </div>
  );
}

export default MainContent;
