import React, { useState, useRef } from 'react';
import './PublicationItem.css';
import BibTexModal from './BibTex/BibTexModal';

/* eslint-disable jsx-a11y/anchor-is-valid  */

function PublicationItem({ 
  showTeaserImage,
  teaserImage,
  awardText,
  title,
  authors,
  venue,
  tags = [],
  bibtex
}) {
  const [showBibtexModal, setShowBibtexModal] = useState(false);
  const [bibPos, setBibPos] = useState({ top: 0, left: 0 });
  
  const tagsContainerRef = useRef(null);

  const handleTagClick = (e, tag) => {
    if (tag.label === "BibTeX" && !tag.href) {
      const containerRect = tagsContainerRef.current.getBoundingClientRect();
      const buttonRect = e.target.getBoundingClientRect();

      const top = buttonRect.bottom - containerRect.top + 5;
      const left = buttonRect.left - containerRect.left;

      setBibPos({ top, left });
      setShowBibtexModal(true);
    }
  };

  return (
    <div className="publication-item">
      {showTeaserImage && teaserImage ? (
        <div className="teaser-image-wrap">
          <img src={teaserImage} alt="Teaser" className="teaser-image" />
        </div>
      ) : showTeaserImage ? (
        <div className="teaser-image-wrap placeholder" />
      ) : null }

      <div className="publication-details">
        {awardText && (
          <div className="award-text">
            {awardText}
          </div>
        )}
        <h3 className="publication-title">{title}</h3>
        <div className="publication-authors">{authors}</div>
        <div className="publication-venue">{venue}</div>
        <div className="tags-container" ref={tagsContainerRef}>
          {tags.map((tag, idx) => (
            <span key={idx} className={`tag tag-${tag.style}`}>
              {tag.href ? (
                <a 
                  href={tag.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tag-link"
                >
                  {tag.icon && <img src={tag.icon} alt="" className="tag-icon" />} 
                  {tag.label}
                </a>
              ) : (
                <a
                  onClick={(e) => handleTagClick(e, tag)} 
                  className="tag-link"
                  style={{cursor: tag.label === "BibTeX" ? 'pointer' : 'default'}}
                >
                  {tag.icon && <img src={tag.icon} alt="" className="tag-icon" />} 
                  {tag.label}
                </a>
              )}
            </span>
          ))}
          <BibTexModal 
            show={showBibtexModal}
            onClose={() => setShowBibtexModal(false)}
            bibtex={bibtex}
            pos={bibPos}
          />
        </div>
      </div>
    </div>
  );
}

export default PublicationItem;
