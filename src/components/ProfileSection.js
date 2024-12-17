import React from 'react';
import './components.css';

function ProfileSection() {
  return (
    <section className="profile-section">
      <h2>I am an undergraduate and researcher at <span role="img" aria-label="KAIST">?KAIST School of Computing</span>, advised by Prof. Alice Oh.</h2>
      <div className="intro">
        <p>My research interests broadly lie at the intersection of human-computer interaction (HCI), social computing, and natural language processing (NLP). Ultimately, I aim to harness the potential of social and language technologies to empower individuals and communities to expand their worldviews, fostering personal growth and societal harmony.</p>
        <p>It has been my honor to be advised by Prof. Munmun De Choudhury while I was at <span role="img" aria-label="Georgia Tech">?Georgia Tech</span> as an exchange student. At <span role="img" aria-label="Naver">?NAVER AI Lab</span>, I was fortunate to be advised by Dr. Young-Ho Kim. I was also incredibly lucky to be advised by Prof. Hwajung Hong, Prof. Janghee Cho, and Prof. Juho Kim, who all inspired my love and devotion to research.</p>
      </div>
    </section>
  );
}

export default ProfileSection;
