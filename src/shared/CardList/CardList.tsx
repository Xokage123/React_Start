import React, { useEffect, useRef, useState } from 'react';
import { Card, ICardProps } from './Card';
import styles from './cardlist.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { usePostsData } from '../../hooks/usePostsData';
import { after, postsRequestAsync } from '../store/posts/actions';
import { generateId, generateRandomString } from '../utils/React/generateRandomIndex';

export function CardList() {
  const bottomOfList = useRef(null);
  const dispatch = useDispatch();

  const token = useSelector<RootState, string>(state => state.after.after);
  const postsData = useSelector<RootState, ICardProps[]>(state => state.postsData.postsData);
  const loading = useSelector<RootState, boolean>(state => state.postsData.loading);
  const error = useSelector<RootState, string>(state => state.postsData.error);

  useEffect(() => {
    console.log('hello')
    const observer = new IntersectionObserver(() => {
       dispatch(postsRequestAsync());
    });
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, token])

  return (
    <ul className={styles.cardList}>
      {postsData.length === 0 && !loading && !error && (
        <div className={styles.status}>Нет ни одного поста</div>
      )}

      { postsData.map((item: {[N: string]: any}) => (
      <Card 
      key={generateRandomString()} 
      id={item.id}
      username={item.username}
      title={item.title}
      score={item.score}
      num_comments={item.num_comments}
      thumbnail={item.thumbnail}
      created={item.created}
      />))}
        
      <div ref={bottomOfList}></div>
       {loading && (
         <div className={styles.status}>Загрузка...</div>
       )}
       {error && (
         <div className={styles.status}>{error}</div>
       )}
    </ul>
)}
