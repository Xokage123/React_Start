import React from 'react';
import styles from './form.scss';

export function Form() {
  return (
    <div>
      <textarea className={styles.textarea} cols={30} rows={10}>
      </textarea>
      <button className={styles.textarea_btn}>Комментировать</button>
     </div>
  );
}
