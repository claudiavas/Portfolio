import styles from '@/styles/contact.module.css';
import { WhatsAppButton } from './WhatsappButton';
import { EmailButton } from './EmailButton';

export const ContactComp = () => {
  return (
    <>
      <div className={styles.tech}>
        <p className={styles.title}>Contact Me</p>
        <p className={styles.subtitle}>Let's build something together 🌟</p>
      </div>
      
      <div class={styles.content}>
        <div class={styles.iconContent}>
          <WhatsAppButton phoneNumber={34644469610}/>
        </div>
        <span class={styles.textContent}>+34 644 469 610</span>
        <br/>
        <div class={styles.iconContent}>
          <EmailButton email="claudia.vasquez.as@gmail.com"/>
        </div>
        <span class={styles.textContent}>claudia.vasquez.as@gmail.com</span>

      

      
      </div>


    </>

  );
};
