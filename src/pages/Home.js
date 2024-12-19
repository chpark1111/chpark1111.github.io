import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

function App() {
  return (
    <div className="main-layout">
        <Sidebar />
        <MainContent />
    </div>
  );
}

export default App;
