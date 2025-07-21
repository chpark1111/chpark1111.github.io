import React from 'react';
import './Experience.css';

function emphasizePresent(text) {
  return text.replace(/Present/i, '<span class="present">Present</span>');
}

function ExperienceItem({ 
  title, 
  organization, 
  orgLink, 
  role, 
  date, 
  logo, 
  description 
}) {
  return (
    <div className="experience-item">
      {logo && (
        <div className="experience-logo-wrap">
          <img src={logo} alt={`${organization} logo`} className="experience-logo" />
        </div>
      )}

      <div className="experience-content">
        <h4 className="experience-title">{title}</h4>

        {orgLink ? (
          <p className="experience-organization">
            <a 
              href={orgLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {organization}
            </a>
          </p>
        ) : (
          <p className="experience-organization">{organization}</p>
        )}

        <div className="experience-meta">
          <span className="experience-role">{role}</span>
          {' | '}
          <span className="experience-date">{date}</span>
        </div>

        {description && (
          <p className="experience-description">{description}</p>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
