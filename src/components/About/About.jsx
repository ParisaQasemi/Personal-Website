import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../units';


export const About = () => {
    return (
      <section className={styles.container} id='about'>
        
        {/* About section title */}
        <h2 className={styles.title}>About</h2>

        <div className={styles.content}>
          <img src={getImageUrl('about/aboutImage.png')} alt="" className={styles.aboutImage}/>

          <ul className={styles.aboutItems}>

            {/* Item JavaScript */}
            <li className={styles.aboutItem}>
              <img src={getImageUrl('about/cursorIcon.png')} alt="cursor Icon" />
              <div className={styles.aboutItemText}>
                <h3>JavaScript</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iure inventore vitae quo amet labore quis reprehenderit, earum assumenda repellendus nihil excepturi. Fugiat quisquam nihil fugit. A recusandae aut velit!
                </p>
              </div>
            </li>

            {/* Item React */}
            <li className={styles.aboutItem}>
              <img src={getImageUrl('about/serverIcon.png')} alt="server Icon" />
              <div className={styles.aboutItemText}>
                <h3>React</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iure inventore vitae quo amet labore quis reprehenderit, earum assumenda repellendus nihil excepturi. Fugiat quisquam nihil fugit. A recusandae aut velit!
                </p>
              </div>
            </li>

            {/* Item Next.js */}
            <li className={styles.aboutItem}>
              <img src={getImageUrl('about/cursorIcon.png')} alt="cursor Icon" />
              <div className={styles.aboutItemText}>
                <h3>Next.js</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iure inventore vitae quo amet labore quis reprehenderit, earum assumenda repellendus nihil excepturi. Fugiat quisquam nihil fugit. A recusandae aut velit!
                </p>
              </div>
            </li>
            
          </ul>
        </div>
      </section>
    );
  };
  