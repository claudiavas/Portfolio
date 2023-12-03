import styles from '@/styles/header.module.css';
import { Navbar } from './NavBar';
import { SocialIcons } from './SocialIcons';

export const Header = () => {
  return (
    <header className={styles.header}>
        <Navbar/>
        <SocialIcons/>
    </header>
  );
}