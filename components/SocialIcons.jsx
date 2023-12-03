import React from 'react'
import styles from '@/styles/socialIcons.module.css';
import Link from 'next/link';

export const SocialIcons = () => {
  return (
    <div className={styles.social - importcons}>
      <Link href="https://linkedin.com/in/claudiavas">
        <img alt="Linkedin" src="./linkedin-icon.png" />
      </Link>
      <Link href="https://github.com/claudiavas">
        <img alt="Github" src="./github-icon.png" />
      </Link>
    </div>
  )
}
