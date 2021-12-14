import React from 'react';
import styles from './menu.scss';

export function Menu() {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <img className={styles.menuButtonImg} src="https://www.pngrepo.com/download/75784/three-dots-menu.png"/>
      </button>
   </div>
  );
}
