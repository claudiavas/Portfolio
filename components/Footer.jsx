import Link from 'next/link';
import styles from '@/styles/footer.module.css';
import { Navbar } from './Navbar';
// import { GithubIcon } from './github-icon';
// import { LinkedinIcon } from './linkedin-icon';


export const Footer = () => {
  return (
    
      <footer className="styles.footer">
  <hr className="styles.footer-line" />
  <div className="styles.footer-content">
    <div className="styles.contact-info">
      <h4>Contacto:</h4>
      <p>claudia.vasquez@example.com</p>
      <p>+34 644-469-610</p>
    </div>
    <div className="styles.copyright">
      <p>&copy; 2023 Tu Nombre</p>
    </div>
  </div>
</footer>
  );
}