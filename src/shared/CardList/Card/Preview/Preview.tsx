import React from 'react';
import styles from './preview.scss';

interface IPreviewProps {
  thumbnail?: string;
}

export function Preview(props: IPreviewProps) {
  const { thumbnail } = props;
  return (
    <div className={styles.preview}>
    <img className={styles.previewImg} src={thumbnail == 'self' ? undefined : thumbnail}/>
  </div>
  );
}
