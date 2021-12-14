import React from 'react';
import styles from './preview.scss';

export function Preview() {
  return (
    <div className={styles.preview}>
    <img className={styles.previewImg} src="https://cdn.dribbble.com/users/4125071/screenshots/17041619/media/c9ade589fb28a581b7ea7930fb1c887e.png?compress=1&resize=1200x900"/>
  </div>
  );
}
