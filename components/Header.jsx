import Link from 'next/link';
import styles from '@/styles/header.module.css';
import { Navbar } from './NavBar';
import { LinkedinIcon } from './Icons/LinkedinIcon';
import { GithubIcon } from './Icons/GithubIcon';
// import GithubIcon from '@/public/github-icon.svg';
// import LinkedinIcon from '@/public/linkedin-icon.svg';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div className={styles.socialIcons}>
        <Link href="https://linkedin.com/in/claudiavas"><LinkedinIcon/></Link>
        <Link href="https://github.com/claudiavas"><GithubIcon/></Link>
      </div>
    </header>
  );
}