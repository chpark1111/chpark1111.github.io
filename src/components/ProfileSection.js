import React from 'react';
import './components.css';

function ProfileSection() {
  return (
    <section className="profile-section" id="introduction">
      <h2>🐥 Introduction</h2>
      <div className="intro">
        <p>
          I am Chanhyeok Park, a graduate student in the integrated M.S.–Ph.D. program at KAIST AI Future Studies, where I work under the guidance of{' '}
          <a
            href="https://fs.kaist.ac.kr/ko/?c=184&s=&cidx1=41&gp=1&gbn=viewok&ix=1545"
            target="_blank"
            rel="noreferrer"
          >
            Prof. Woojung Jon
          </a>. I earned my bachelor’s degree from the KAIST School of Computing. Alongside my academic work, I am Co-Founder and CTO of <b>IP Intelligence</b>.
        </p>
        <p>
          My research centers on <b>AI safety</b>, which I approach through two complementary directions. In <b>legal research</b>, I study AI governance and regulation, including frameworks such as the EU AI Act. I examine how risk-based regulation, legal accountability, and institutional oversight should be designed to prevent harm and protect fundamental rights throughout AI development and deployment. In <b>technical research</b>, I explore how large language models (LLMs) and agentic AI can be trained, evaluated, and deployed safely. My interests include safety alignment, adversarial testing, and safeguards against harmful outputs and unintended agent actions.
        </p>
        <p>
          During my undergraduate studies, my work with the{' '}
          <a
            href="https://visualai.kaist.ac.kr/"
            target="_blank"
            rel="noreferrer"
          >
            KAIST Visual AI Group
          </a> under the mentorship of{' '}
          <a
            href="https://mhsung.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Prof. Minhyuk Sung
          </a> deepened my understanding of AI systems. Collaborating with{' '}
          <a
            href="https://fs.kaist.ac.kr/ko/?c=184&s=&cidx1=41&gp=1&gbn=viewok&ix=1545"
            target="_blank"
            rel="noreferrer"
          >
            Prof. Woojung Jon
          </a> also broadened my perspective on law, society, and interdisciplinary research. This background now informs my approach to AI safety, combining technical understanding with legal inquiry. I envision a future in which AI is safely integrated into everyday life, helping build a more efficient society.
        </p>
      </div>
    </section>
  );
}

export default ProfileSection;
