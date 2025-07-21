import React from 'react';
import * as Si from 'react-icons/si';
import './Skills.css';
import skillsData from '../../data/skills.json';

function getSimpleIcon(nameKey) {
  const componentName = 'Si' + nameKey
    .replace(/(^|\s|-)([a-z])/g, (_, p1, p2) => p2.toUpperCase())
    .replace(/[^A-Za-z0-9]/g, '');
  return Si[componentName] || null;
}

// const skillsByCategory = [
//   {
//     header: 'Machine Learning',
//     items: [
//       { name: 'PyTorch',    icon: <SiPytorch     color="#EE4C2C" /> },
//       { name: 'TensorFlow', icon: <SiTensorflow  color="#FF6F00" /> },
//       { name: 'Keras',      icon: <SiKeras       color="#D00000" /> },
//     ]
//   },

//   {
//     header: 'Programming Languages',
//     items: [
//       { name: 'Python',      icon: <SiPython      color="#3776AB" /> },
//       { name: 'R',           icon: <SiR           color="#276DC3" /> },
//       { name: 'C',           icon: <SiC           color="#A8B9CC" /> },
//       { name: 'C++',         icon: <SiCplusplus   color="#00599C" /> },
//       { name: 'Rust',        icon: <SiRust        color="#DEA584" /> },
//       { name: 'Scala',       icon: <SiScala       color="#DC322F" /> },
//       { name: 'Swift',       icon: <SiSwift       color="#FA7343" /> },
//       { name: 'JavaScript',  icon: <SiJavascript  color="#F7DF1E" /> }
//     ]
//   },

//   {
//     header: 'Frameworks',
//     items: [
//       { name: 'React',     icon: <SiReact     color="#61DAFB" /> },
//       { name: 'Markdown',    icon: <SiMarkdown    color="#2F3338" /> },
//       { name: 'LaTeX',     icon: <SiLatex     color="#008080" /> },
//       { name: 'LangChain', icon: <SiLangchain color="#3DFF88" /> },
//       { name: 'Docker',    icon: <SiDocker    color="#2496ED" /> },
//       { name: 'Git',       icon: <SiGit       color="#F05032" /> },
//       { name: 'SQL',       icon: <SiMysql       color="#4479A1" /> },
//     ]
//   }
// ];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>📐 Skills</h2>

      <div className="skills-columns">
        {skillsData.map(cat => (
          <div key={cat.category} className="skill-column">
            <div className="skill-card">
              <h4 className="skill-header">{cat.category}</h4>
                {cat.skills.map(skill => {
                // choose icon element
                let iconElement = null;

                if (skill.img) {
                  iconElement = (
                    <img
                      src={skill.img}
                      alt={skill.name + ' logo'}
                      className="skill-icon-img"
                    />
                  );
                }

                else if (skill.icon) {
                  const IconComp = getSimpleIcon(skill.icon);
                  if (IconComp) {
                    iconElement = <IconComp color={skill.color || undefined} />;
                  }
                }

                return (
                  <div
                    key={skill.name}
                    className="skill-pill"
                    style={{ borderLeftColor: skill.color || '#999' }}
                  >
                    {iconElement && <span className="skill-icon">{iconElement}</span>}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
