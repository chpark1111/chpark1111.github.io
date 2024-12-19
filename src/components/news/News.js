import React from 'react';
import newsData from '../../data/news.json'; // Import the JSON data
import NewsItem from './NewsItem';
import './News.css';

function News() {
  return (
    <aside className="news-section">
      <h3>News</h3>
      {newsData.map((item, index) => (
        <NewsItem key={index} date={item.date} text={item.text} />
      ))}
    </aside>
  );
}

export default News;
