import React from 'react';
import './components.css';

function ProfileSection() {
  return (
    <section className="profile-section" id="introduction">
      <h2>🐥 Introduction</h2>
      <div className="intro">
        <p> I am Chanhyeok Park, an ambitious and self-driven student who graduated with a bachelor’s degree from the KAIST School of Computing. My academic interests lie at the intersection of <b>finance, deep learning, computer vision, and large language models</b>. I am particularly interested in how advanced deep learning methods, especially <b>large language models (LLMs)</b>, can be applied across diverse domains to generate meaningful innovation.</p>        
        <p> As a research intern at{' '}
        <a
          href="https://visualai.kaist.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          KAIST Visual AI Group
        </a>, I was fortunate to be mentored by{' '} 
        <a
          href="https://mhsung.github.io/"
          target="_blank"
          rel="noreferrer"
        >
        Prof. Minhyuk Sung
        </a>, whose expertise and guidance greatly deepened my understanding of 3D computer vision research. I was also honored to collaborate with{' '} 
        <a
          href="https://fs.kaist.ac.kr/ko/?c=184&s=&cidx1=41&gp=1&gbn=viewok&ix=1545"
          target="_blank"
          rel="noreferrer"
        >
        Prof. Woojung Jon
        </a>, a distinguished legal scholar, through whom I gained a broader perspective on society, law, and interdisciplinary inquiry. These experiences have strengthened my belief that the thoughtful integration of deep learning across disciplines can drive transformative innovation in the future.</p>
      </div>
    </section>
  );
}

export default ProfileSection;
