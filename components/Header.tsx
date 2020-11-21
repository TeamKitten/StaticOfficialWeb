import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/Header.module.css';
import TK from '../assets/tinykitten.svg';

const LogoWithRef = React.forwardRef(() => <TK width={32} />);

LogoWithRef.displayName = 'Logo';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Link href="/">
      <LogoWithRef />
    </Link>
  </header>
);

export default Header;
