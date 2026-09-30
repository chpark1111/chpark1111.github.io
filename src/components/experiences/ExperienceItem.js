import React from 'react';
import './Experience.css';

function ExperienceItem({ 
  title, 
  organization, 
  orgLink, 
  role, 
  date, 
  logo, 
  description,
  supervisor
}) {
  return (
    <div className="experience-item">
      <div className={`experience-logo-wrap${logo ? '' : ' experience-logo-empty'}`} aria-hidden="true">
        {logo && (
          <img src={logo} alt={`${organization} logo`} className="experience-logo" />
        )}
      </div>

      <div className="experience-content">
        <div className="experience-heading">
          <h3 className="experience-role">{role}</h3>
          <span className="experience-date">{date}</span>
        </div>

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

        {title && <p className="experience-title">{title}</p>}

        {description && (
          <p className="experience-description">{description}</p>
        )}
        {supervisor && (
          <p className="experience-supervisor">
            Supervisor: <a href={supervisor.url} target="_blank" rel="noopener noreferrer">{supervisor.name}</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
