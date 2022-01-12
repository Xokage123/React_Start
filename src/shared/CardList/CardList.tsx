import React from 'react';
import { Card, ICardProps } from './Card';
import styles from './cardlist.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { usePostsData } from '../../hooks/usePostsData';

export function CardList() {

  usePostsData();
  const postsData = useSelector<RootState, ICardProps[]>(state => state.postsData.postsData);
  const loading = useSelector<RootState, boolean>(state => state.postsData.loading);
  const error = useSelector<RootState, string>(state => state.postsData.error);

  return (
    <ul className={styles.cardList}>
      {postsData.length === 0 && !loading && !error && (
        <div className={styles.status}>Нет ни одного поста</div>
      )}

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

       {loading && (
         <div className={styles.status}>Загрузка...</div>
       )}
       {error && (
         <div className={styles.status}>{error}</div>
       )}
    </ul>)
}
