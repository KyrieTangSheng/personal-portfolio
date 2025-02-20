import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.classList.add(styles.visible);
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 ref={titleRef}>
          <span className={styles.greeting}>Hello, I'm</span>
          <span className={styles.name}>Tang Sheng</span>
          <span className={styles.title}>Software Engineer</span>
        </h1>
        <div className={styles.cta}>
          <a href="#experience" className="cyber-button">Work Experience</a>
          <a href="#projects" className="cyber-button">Projects</a>
          <a href="#contact" className={`cyber-button ${styles.secondary}`}>Get In Touch</a>
        </div>
      </div>
      <div className={styles.gridOverlay}></div>
    </section>
  );
};

export default Hero; 