import React from 'react';
import styles from './textcontent.scss';

interface ITextContentProps {
  username?: string;
  title?: string;
  date?: string;
}

export function TextContent(props: ITextContentProps) {
  const { username, title, date } = props;

  return (
    <div className={styles.textContent}>
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src="https://i.redd.it/snk96iikvra51.png" alt="avatar" />
        <a href="#user-url" className={styles.username}>{username}</a>
      </div>
      <span className={styles.createdAt}><span className={styles.publishedLabel}>Опубликовано</span> {date}</span>
    </div>
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        {title}
      </a>
    </h2>
  </div>
  );
}
