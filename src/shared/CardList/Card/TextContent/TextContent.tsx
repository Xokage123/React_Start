import React from 'react';
import styles from './textcontent.scss';

interface ITextContentProps {
  username: string;
  date: string;
  children?: React.ReactNode; 
  className?: 'textContent' | 'textContent-modal';
}

export function TextContent(props: ITextContentProps) {
  const { username, date, children, className = 'textContent'} = props;

  return (
    <div className={styles[className]}>
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src="https://i.redd.it/snk96iikvra51.png" alt="avatar" />
        <a href="#user-url" className={styles.username}>{username}</a>
      </div>
      <span className={styles.createdAt}><span className={styles.publishedLabel}>Опубликовано</span> {date}</span>
    </div>
     {children}
    </div>
  );
}
