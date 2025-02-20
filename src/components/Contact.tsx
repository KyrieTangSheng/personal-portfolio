import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact Me</h2>
      
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Let's Connect</h3>
          <p>I'd love to hear from you! You can reach me through any of these platforms:</p>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/KyrieTangSheng" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.socialLink} ${styles.github}`}
            >
              <span className={styles.linkText}>GitHub</span>
              <span className={styles.linkDescription}>https://github.com/KyrieTangSheng</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/tang-sheng-3b5ab4319/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.socialLink} ${styles.linkedin}`}
            >
              <span className={styles.linkText}>LinkedIn</span>
              <span className={styles.linkDescription}>https://www.linkedin.com/in/tang-sheng-3b5ab4319/</span>
            </a>
            
            <a 
              href="mailto:tangsheng001018@gmail.com" 
              className={`${styles.socialLink} ${styles.email}`}
            >
              <span className={styles.linkText}>Email</span>
              <span className={styles.linkDescription}>tangsheng001018@gmail.com</span>
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact; 