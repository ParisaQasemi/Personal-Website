import React from 'react';
import styles from './Contact.module.css'
import { getImageUrl } from '../../units';


export const Contact = () => {
    return (
      <footer id='contact' className={styles.container}>

        {/* Contact section text */}
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>

        {/* Contact section links */}
        <ul className={styles.links}>

          {/* Email contact */}
          <li className={styles.link}>
            <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
            <a href="mailto:parisa.qasemi.1998@gmail.com">parisa.qasemi.1998@gmail.com</a>
          </li>

          {/* LinkedIn contact */}
          <li className={styles.link}>
            <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn Icon" />
            <a href="https://www.linkedin.com/in/parisa-qasemi-53a372223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>

          {/* GitHub contact */}
          <li className={styles.link}>
            <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub Icon" />
            <a href="https://github.com/ParisaQasemi" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>

        </ul>
        
      </footer>
    );
  };
  