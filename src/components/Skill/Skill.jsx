import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getImageUrl } from '../../units';
import styles from './Skill.module.css'


export const Skill = () => {
  // Responsive the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={styles.container} id='Skill'>
      {/* Skills section title */}
      <h2 className={styles.title}>Skills</h2>

      {/* Carousel component for skills */}
      <Carousel responsive={responsive} className={StyleSheet.content}>

        {/* Skill item JavaScript */}
        <div className={styles.card}>
          <h3>JavaScript</h3>
          <img src={getImageUrl('skills/javascript.png')} alt="JavaScript" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>
        
        {/* Skill item React */}
        <div className={styles.card}>
          <h3>React</h3>
          <img src={getImageUrl('skills/react.png')} alt="React" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>
        
        {/* Skill item Html */}
        <div className={styles.card}>
          <h3>Html</h3>
          <img src={getImageUrl('skills/html.png')} alt="Html" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>
        
        {/* Skill item Css */}
        <div className={styles.card}>
          <h3>Css</h3>
          <img src={getImageUrl('skills/css.png')} alt="Css" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>
        
        {/* Skill item Node Js */}
        <div className={styles.card}>
          <h3>Node Js</h3>
          <img src={getImageUrl('skills/node.png')} alt="Node Js" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>
        
        {/* Skill item Next Js */}
        <div className={styles.card}>
          <h3>Next Js</h3>
          <img src={getImageUrl('skills/next.png')} alt="Next Js" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>
        
        {/* Skill item Vue Js */}
        <div className={styles.card}>
          <h3>Vue Js</h3>
          <img src={getImageUrl('skills/vue.png')} alt="Vue Js" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>
        
        {/* Skill item TailwindCss */}
        <div className={styles.card}>
          <h3>tailwindcss</h3>
          <img src={getImageUrl('skills/tailwindcss.png')} alt="Tailwind CSS" className={styles.caroselImage}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sapiente facilis soluta, obcaecati animi optio aut cumque, eligendi quos iste repudiandae! Totam magnam soluta vero distinctio doloribus animi, adipisci cupiditate?
          </p>
        </div>

      </Carousel>
    </section>
  );
};
