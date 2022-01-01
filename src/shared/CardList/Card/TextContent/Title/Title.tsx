import React, { useState } from 'react';
import styles from './title.scss';

export function Title({ title, children }: { title?: string; children?: React.ReactNode; }) {
  
  const [ isModalOpened, setIsModalOpened] = useState(false);


  return (
    <h2 className={styles.title} onClick={() => { setIsModalOpened(true); }}>
      <a href="#post-url" className={styles.postLink}>
        {title}
      </a>
      {isModalOpened && (
        children
      )}
    </h2>
  );
}
