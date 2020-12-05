import React from 'react';
import styles from '../styles/components/Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p>Copyright &copy; 2018-{new Date().getFullYear()} TeamKitten</p>
  </footer>
);

export default Footer;
