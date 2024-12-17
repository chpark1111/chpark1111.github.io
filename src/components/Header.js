import React from 'react';
import './components.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Chanhyeok Park</h1>
      </div>
      <div className="header-nav">
        <a href="#projects">Projects</a>
        <a href="#publications">Publications</a>
        <a href="#cv">CV</a>
      </div>
    </header>
  );
}

export default Header;
