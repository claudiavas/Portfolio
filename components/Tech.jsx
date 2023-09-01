import styles from '@/styles/techstack.module.css';

export const Tech = () => {
  return (
    <>
      <div className={styles.tech}>
        <p className={styles.title}>My Tech Stack</p>
        <p className={styles.subtitle}>Technologies I’ve been working with recently</p>
      </div>
      <div class={styles.gridContainer}>
        <div class={styles.grid}>
          <div className={styles.logo}>
            <img alt="HTML" src="./tech_logos/html-logo.png"/>
            <span className={styles.logoName}>HTML</span>
          </div>
          <div className={styles.logo}>
            <img alt="CSS" src="./tech_logos/css-logo.png"/>
            <span className={styles.logoName}>CSS</span>
          </div>
          <div className={styles.logo}>
            <img alt="Javascript" src="./tech_logos/javascript-logo.png"/>
            <span className={styles.logoName}>Javascript</span>
          </div>
          <div className={styles.logo}>
            <img alt="React" src="./tech_logos/react-logo.png"/>
            <span className={styles.logoName}>React</span>
          </div>
          <div className={styles.logo}>
            <img alt="Next JS" src="./tech_logos/nextjs-logo.png"/>
            <span className={styles.logoName}>Next JS</span>
          </div>
          <div className={styles.logo}>
            <img alt="Git" src="./tech_logos/git-logo.png"/>
            <span className={styles.logoName}>Git</span>
          </div>
          <div className={styles.logo}>
            <img alt="Github" src="./tech_logos/github-logo.png"/>
            <span className={styles.logoName}>Github</span>
          </div>
          <div className={styles.logo}>
            <img alt="Visual Studio Code" src="./tech_logos/visualstudiocode-logo.png"/>
            <span className={styles.logoName}>VS Code</span>
          </div>
        </div>
      </div>
    </>

  );
};

// Fundamentales en el Stack

// JavaScript and TypeScript
// HTML and CSS
// React
// Node.js and Express.js
// MongoDB

// Other tools and resorces I´ve worked with
// Visual Studio Code
// Component Library (Material UI)
// Testing (Jest)
// Git and Github
// Figma
// Postman
// Mongoose
// Api Rest
// Web tokens (JWT)
// Deployment in Cloud Services (RailWay)
// Image and file management (Cloudinary)
// Email Sending (Brevo-SendInBlue)