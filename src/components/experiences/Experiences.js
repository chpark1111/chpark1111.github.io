import React from 'react';
import ExperienceItem from './ExperienceItem';
import experiencesData from '../../data/experiences.json';

function Experiences() {
  return (
    <section className="experiences-section" id="experiences">
      <h2>💼 Experiences</h2>
      <div className="experiences-list">
        {experiencesData.map((exp, i) => (
          <ExperienceItem
            key={i}
            title={exp.title}
            organization={exp.organization}
            orgLink={exp.orgLink}
            role={exp.role}
            date={exp.date}
            logo={exp.logo}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
