import React, { useState } from 'react';
import './BibTexModal.css';

function BibTexModal({ show, onClose, bibtex, pos }) {
  const [copied, setCopied] = useState(false);

  if (!show) return null;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div 
      className="bibtex-modal" 
      style={{ top: pos.top, left: pos.left }}
    >
      <div className="bibtex-modal-header">
        <button className="copy-btn" onClick={handleCopyBibtex}>📋 Copy</button>
        {copied && <span className="copied-text">Copied to clipboard.</span>}
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="bibtex-modal-body">
        <div className="bibtex-box">
          <pre>{bibtex}</pre>
        </div>
      </div>
    </div>
  );
}

export default BibTexModal;
