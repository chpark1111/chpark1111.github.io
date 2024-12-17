import React from 'react';
import './components.css';

function ProfileSection() {
  return (
    <section className="profile-section">
      <h2>Introduction</h2>
      <div className="intro">
        <p> I am Chanhyeok Park, a highly self-motivated undergraduate student at KAIST, School of Computing. I am interested in combining <b>deep learning</b> approaches with <b>3D computer vision, reinforcement learning, finance, and law.</b> For now, my focus is to seek how deep learning techniques can be employed in <b>the legal domain</b>, especially utilizing Large Language Models. </p>
        <p> Previously, as a research intern at{' '}
        <a
          href="https://visualai.kaist.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          KAIST Visual AI Group
        </a>, I worked on decomposing 3D shapes with tight bounding boxes without any human supervision with{' '} 
        <a
          href="https://mhsung.github.io/"
          target="_blank"
          rel="noreferrer"
        >
        Prof. Minhyuk Sung
        </a>
        . I believe that the power of deep learning technologies, integrated appropriately into various fields, will innovate our future. </p>
      </div>
    </section>
  );
}

export default ProfileSection;
