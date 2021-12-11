import React from 'react';
import styles from './card.scss';

export function Card() {
  return (
   <li className={ styles.card }>
     <div className={styles.textContent}>
       <div className={styles.metaData}>
         <div className={styles.userLink}>
           <img className={styles.avatar} src="https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=400x300" alt="avatar" />
           <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
         </div>
         <span className={styles.createdAt}>4 часа назад</span>
       </div>
       <h2 className={styles.title}>
         <a href="#post-url" className={styles.postLink}>
           Следует отметить, что новая модкель организационной деятельности Следует отметить, что новая модкель организационной деятельности</a>
       </h2>
     </div>
     <div className={styles.preview}>
       <img className={styles.previewImg} src="https://cdn.dribbble.com/users/4125071/screenshots/17041619/media/c9ade589fb28a581b7ea7930fb1c887e.png?compress=1&resize=1200x900"/>
     </div>
     <div className={styles.menu}>
       <button className={styles.menuButton}>
        <img className={styles.menuButtonImg} src="https://www.pngrepo.com/download/75784/three-dots-menu.png"/>
       </button>
     </div>
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
   </li>
  );
}
