import styles from '@/styles/contact.module.css';
// import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'; // Importar los íconos de Font Awesome

export const ContactComp = () => {
  return (
    <>
      <div className={styles.tech}>
        <p className={styles.title}>Contact Me</p>
        <p className={styles.subtitle}>XXX</p>
      </div>
      <div class={styles.gridContainer}>
      
    <div>
      <ul>
        <li>
          {/* <FaEnvelope /> claudia.vasquez.as@gmail.com */}
        </li>
        <li>
          {/* <FaPhone /> +34 644-469-610 */}
        </li>
        <li>
          {/* <FaLinkedin /> <a href="https://linkedin.com/in/claudiavas/">linkedin.com/in/claudiavas/</a> */}
        </li>
      </ul>
    </div>

      </div>
    </>

  );
};
