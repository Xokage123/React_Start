import React from 'react';
import { Card, ICardProps } from './Card';
import styles from './cardlist.scss';
import { generateRandomString } from '../utils/React/generateRandomIndex';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { usePostsData } from '../../hooks/usePostsData';

export function CardList() {

  usePostsData();
  const postsData = useSelector<RootState, ICardProps[]>(state => state.postsData.postsData);

  return (
    <ul className={styles.cardList}>
      {postsData.map((item: {[N: string]: any}) => (
        <Card 
        key={item.id} 
        id={item.id}
        username={item.username}
        title={item.title}
        score={item.score}
        num_comments={item.num_comments}
        thumbnail={item.thumbnail}
        created={item.created}
        />))}
    </ul>)
}
