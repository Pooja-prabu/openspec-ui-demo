import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; {currentYear} React UI Application. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
