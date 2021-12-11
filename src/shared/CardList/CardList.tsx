import React from 'react';
import { Card } from './Card';
import styles from './cardlist.scss';

export function CardList() {
  return (
   <ul className={styles.cardList}>
     <Card />
   </ul>
  );
}
