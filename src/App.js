import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
