import React from 'react';
import styles from './preview.scss';

interface IPreviewProps {
  thumbnail?: string;
}

export function Preview(props: IPreviewProps) {
  const { thumbnail } = props;
  if (thumbnail == undefined) return null
 
  if (!(thumbnail.endsWith('.jpg') )) { return null}
  return (
    <div className={styles.preview}>
    <img className={styles.previewImg} src={thumbnail}/>
  </div>
  );
}
