import Link from 'next/link';
import styles from '@/styles/header.module.css';
import { Navbar } from './NavBar';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div className={styles.socialIcons}>
        <Link href="https://linkedin.com/in/claudiavas">
          <img alt="Linkedin" src="./linkedin-icon.png"/>
        </Link>
        <Link href="https://github.com/claudiavas">
          <img alt="Github" src="./github-icon.png"/>
        </Link>
      </div>
    </header>
  );
}