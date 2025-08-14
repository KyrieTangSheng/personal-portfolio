import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            {/* Add your image here */}
            <div className={styles.glowOverlay}></div>
          </div>
          <div className={styles.decorativeBorder}></div>
        </div>
        <div className={styles.textContent}>
          <p>
          Hi, I'm Tang Sheng, a software engineer passionate about AI, backend systems, and full-stack development. 
          </p>
          <p>
          I’m pursuing my Master’s in Computer Science at UC San Diego, with a mixed background in scalable infra&system and AI.
          </p>
          <p>
          Recently, I've been interning at TikTok, where I worked on engineering strategies for the Ads Targeting team. I am working on various projects such as high-value audience retargeting and LLM-powered tag expansion.
          </p>
          <p>
          I'm a problem solver and a quick learner. I'm always eager to take on new challenges. I'm obsessed with building innovative solutions. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 