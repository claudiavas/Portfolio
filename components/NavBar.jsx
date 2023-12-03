import Link from 'next/link';
import styles from '@/styles/navBar.module.css';

export const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link className="styles.menu__link" href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link className="styles.menu__link" href="/about">About Me</Link>
          </li>
          <li className={styles.navItem}>
            <Link className="styles.menu__link" href="/techstack">Tech Stack</Link>
          </li>
          <li className={styles.navItem}>
            <Link className="styles.menu__link" href="/projects">Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link className="styles.menu__link" href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};