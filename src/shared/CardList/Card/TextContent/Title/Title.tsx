import React, { useState } from 'react';
import styles from './title.scss';
import { Link } from 'react-router-dom';

interface ITitleProps { 
  title?: string;
  id?: string;
}

export function Title(props: ITitleProps) {
  const { title, id } = props;
  

  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
