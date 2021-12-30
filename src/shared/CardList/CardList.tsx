import React from 'react';
import { Card } from './Card';
import { postsDataContext } from '../context/postsDataContext';
import styles from './cardlist.scss';
import { generateRandomString } from '../utils/React/generateRandomIndex';

export function CardList() {
  const postsData = React.useContext(postsDataContext);

  return (
    <ul className={styles.cardList}>
      {postsData.map((item: {[N: string]: any}) => (
        <Card key={generateRandomString()} id={item.id}
        username={item.username}
        title={item.title}
        score={item.score}
        num_comments={item.num_comments}
        thumbnail={item.thumbnail}/>))}
    </ul>)
}
