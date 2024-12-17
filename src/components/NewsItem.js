import React from 'react';
import './components.css';

function NewsItem({ date, text }) {
  return (
    <div className="news-item">
      <strong>{date}</strong> {text}
    </div>
  );
}

export default NewsItem;
