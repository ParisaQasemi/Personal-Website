import React, {useState} from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../units';



export const Navbar = () => {
    // open/close state of the menu
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}> 
            {/* Portfolio title link */}
            <a className={styles.title} href="/">Portfolio</a>

            <div className={styles.menu}>
                {/* Menu button close and open */}
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl('nav/closeIcon.png')
                            : getImageUrl('nav/menuIcon.png')
                    }
                    alt='menu-button' onClick={() => setMenuOpen(!menuOpen)}
                />

                {/* Menu list */}
                <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>

                    <li><a href="#about">About</a></li>
                    <li><a href="#Skill">Skill</a></li>
                    <li><a href="#form">Form</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </div>
        </nav>
    )
}
