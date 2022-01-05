import React, { useState } from 'react';
import styles from './title.scss';
import { Post } from './Post';

interface ITitleProps { 
  title?: string;
}

export function Title(props: ITitleProps) {
  const { title } = props;
  const [ isModalOpened, setIsModalOpened] = useState(false);
  

  return (
    <h2 className={styles.title} onClick={() => { setIsModalOpened(true); }}>
      <a href="#post-url" className={styles.postLink}>
        {title}
      </a>
      {isModalOpened && (
        <Post onClose={setIsModalOpened}/>
      )}
    </h2>
  );
}
