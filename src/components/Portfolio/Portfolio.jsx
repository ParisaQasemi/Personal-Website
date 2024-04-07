import React from 'react';
import styles from './Portfolio.module.css'
import { getImageUrl } from '../../units';


export const Portfolio = () =>{
  return (
    <section className={styles.container}>

      {/* Main content Portfolio section */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Parisa</h1>
        <p className={styles.description}>
          I’m a FrontEnd developer with 3 years
          of experience using React and NodeJS.
          <br></br>
          Reach out if you’d like to know more!
        </p>
        <a href="mailto:parisa.qasemi.1998@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>

      {/* Image Portfolio */}
      <img src={getImageUrl('Portfolio/Portfolio.png')} alt='Portfolio image of me' className={styles.PortfolioImg} />
      
      {/* Top blur effect of the Portfolio */}
      <div className={styles.topBlur} />
      
      {/* Bottom blur effect of the Portfolio */}
      <div className={styles.bottomBlur} />

    </section>
  );
};


