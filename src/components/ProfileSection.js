import React from 'react';
import './components.css';

function ProfileSection() {
  return (
    <section className="profile-section" id="introduction">
      <h2>🐥 Introduction</h2>
      <div className="intro">
        <p> I am Chanhyeok Park, an ambitious and self-driven undergraduate student at the KAIST School of Computing. My academic interests lie at the intersection of <b>Intellectual Property (IP) Law, Deep Learning, 3D Computer Vision, and Large Language Models (LLMs)</b>. Currently, my primary focus is exploring how advanced deep learning methodologies, particularly <b>LLMs</b>, can be effectively applied to Legal Technology, aiming to drive meaningful innovation in the <b> legal domain </b>. </p>
        <p> During my time as a research intern at{' '}
        <a
          href="https://visualai.kaist.ac.kr/"
          target="_blank"
          rel="noreferrer"
        >
          KAIST Visual AI Group
        </a>, I had the privilege of being mentored by{' '} 
        <a
          href="https://mhsung.github.io/"
          target="_blank"
          rel="noreferrer"
        >
        Prof. Minhyuk Sung
        </a>, whose expertise and guidance greatly enriched my experience. Furthermore, it was an exceptional honor to collaborate with{' '} 
        <a
          href="https://fs.kaist.ac.kr/ko/?c=184&s=&cidx1=41&gp=1&gbn=viewok&ix=1545"
          target="_blank"
          rel="noreferrer"
        >
        Prof. Woojung Jon
        </a>, a distinguished legal scholar. I am deeply convinced that the thoughtful integration of deep learning technologies across diverse disciplines holds the potential to drive transformative innovation in our future.</p>
      </div>
    </section>
  );
}

export default ProfileSection;
