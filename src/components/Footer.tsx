import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Kyrie Tang Sheng. All rights reserved.
        </p>
        <p className={styles.built}>
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer; 