import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 85 },
      { name: "C#", level: 80 },
      { name: "Haskell", level: 75 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 80 },
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "PyTorch", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "React", level: 85 },
      { name: "React Native", level: 80 },
      { name: "Spring Boot", level: 80 },
      { name: ".NET", level: 80 },
      { name: "Django", level: 75 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", level: 85 },
      { name: "NoSQL Databases", level: 80 },
      { name: "Relational Databases", level: 85 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 75 }
    ]
  }
];

const Skills = () => {
  // Calculate total number of skills across all categories
  const totalSkills = skills.reduce((sum, category) => sum + category.items.length, 0);
  // Initialize refs array with correct size
  const skillRefs = useRef<(HTMLDivElement | null)[]>(Array(totalSkills).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.container}>
        {skills.map((skillCategory, categoryIndex) => {
          // Calculate starting index for current category
          const startIndex = skills
            .slice(0, categoryIndex)
            .reduce((sum, cat) => sum + cat.items.length, 0);
            
          return (
            <div key={skillCategory.category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{skillCategory.category}</h3>
              <div className={styles.skillsList}>
                {skillCategory.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={styles.skillItem}
                    ref={el => {
                      skillRefs.current[startIndex + index] = el;
                    }}
                  >
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills; 