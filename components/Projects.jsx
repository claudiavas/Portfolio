import styles from '@/styles/projects.module.css';
import { ProjectCard } from './ProjectCard';

export const ProjectsComp = () => {
  return (
    <>
      <div className={styles.tech}>
        <p className={styles.title}>Projects</p>
        <p className={styles.subtitle}>Things I’ve built so far</p>
      </div>
      <div class={styles.gridContainer}>
        <div class={styles.grid}>
          <ProjectCard />
          <div className={styles.project}>
            <img alt="My Portfolio" src="./projects/my-portfolio.png"/>
            <span className={styles.projectName}>My Portfolio</span>
          </div>
          <div className={styles.project}>
            <img alt="Domus" src="./projects/domus.png"/>
            <span className={styles.projectName}>Domus</span>
          </div>
          <div className={styles.project}>
            <img alt="Todo App" src="./projects/todo-app.png"/>
            <span className={styles.projectName}>Todo App</span>
          </div>
          <div className={styles.project}>
            <img alt="Calculator" src="./projects/calculator.png"/>
            <span className={styles.projectName}>Calculator</span>
          </div>
        </div>
      </div>
    </>
  );
};