import React from 'react';
import styles from './textcontent.scss';

export function TextContent() {
  return (
    <div className={styles.textContent}>
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src="https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=400x300" alt="avatar" />
        <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
      </div>
      <span className={styles.createdAt}><span className={styles.publishedLabel}>Опубликовано</span> 4 часа назад</span>
    </div>
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Следует отметить, что новая модкель организационной деятельности Следует отметить, что новая модкель организационной деятельности</a>
    </h2>
  </div>
  );
}
