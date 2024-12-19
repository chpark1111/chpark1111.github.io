import React from 'react';
import PublicationItem from './PublicationItem';
import publicationsData from '../../data/publications.json';
import './PublicationItem';

function Publications() {
  return (
    <section className="publications-section" id="publications">
      <div className="publications-header">
        <h2>Publications</h2>
      </div>
      <div className="publications-list">
        {publicationsData.map((pub, i) => (
          <PublicationItem
            key={i}
            showTeaserImage={pub.showTeaserImage}
            teaserImage={pub.teaserImage}
            awardText={pub.awardText}
            title={pub.title}
            authors={pub.authors}
            venue={pub.venue}
            tags={pub.tags}
            bibtex={pub.bibtex}
          />
        ))}
      </div>
    </section>
  );
}

export default Publications;