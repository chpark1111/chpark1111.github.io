import React from 'react';
import './components.css';
import ProfileSection from './ProfileSection';
import ProjectsSection from './ProjectsSection';

function MainContent() {
  return (
    <div className="main-content">
      <ProfileSection />
      <ProjectsSection />
    </div>
  );
}

export default MainContent;
