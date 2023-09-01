import Image from 'next/image';
import styles from '@/styles/hero.module.css';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.text_hero}>
                <div className={styles.text_hero1}>
                    <span>Hi </span>
                    <span className={styles.waving}>🖐</span>
                    <span>,</span>
                </div>
                <span className={styles.text_hero1}>My name is </span>
                <span className={styles.text_hero2}>Claudia Vásquez.</span>
                <span className={styles.text_hero1}>I build digital experiences.</span>
            </div>
            <Image className={styles.image} src="/profile.jpg" alt="Picture of the author" width={249} height={249} />
        </div>
    );
}
