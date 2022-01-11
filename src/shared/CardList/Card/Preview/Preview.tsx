import React from 'react';
import styles from './preview.scss';

interface IPreviewProps {
  thumbnail: string;
  className?: 'preview' | 'preview-modal';
}

export function Preview(props: IPreviewProps) {
  const { thumbnail, className = 'preview' } = props;
  if (!(thumbnail.endsWith('.jpg'))) { return null}
  return (
    <div className={styles[className]}>
    <img className={styles.previewImg} src={thumbnail}/>
  </div>
  );
}
