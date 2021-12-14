import React from 'react';
import styles from './controls.scss';

export function Controls() {
  return (
    <div className={styles.controls}>
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <img className={styles.upImg} src="https://ps.w.org/wpfront-scroll-top/assets/icon.svg?rev=1534312"/>
      </button>
      <span className={styles.karmaValue}>234</span>
      <button className={styles.down}>
        <img className={styles.downImg} src="https://ps.w.org/wpfront-scroll-top/assets/icon.svg?rev=1534312"/>
      </button>
    </div>
    <button className={styles.commentsButton}>
      <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="" />
      <span className={styles.commentsNumber}>13</span>
    </button>
    <div className={styles.actions}>
      <button className={styles.shareButton}>
        <img src="https://cdn0.iconfinder.com/data/icons/multimedia-261/32/Send-512.png" alt="" />
      </button>
      <button className={styles.saveButton}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/save-1659426-1408816.png"/>
      </button>
    </div>
  </div>
  );
}
