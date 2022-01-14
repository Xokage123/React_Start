import React, { useEffect, useRef, useState } from 'react';
import { Card, ICardProps } from './Card';
import styles from './cardlist.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { postsRequestAsync } from '../store/posts/actions';

let cycle = 0

export function CardList() {
  const [ isButtonVisible, setIsButtonVisible ] = useState(false);
  const bottomOfList = useRef(null);
  const dispatch = useDispatch();

  const token = useSelector<RootState, string>(state => state.setToken.token)
  const after = useSelector<RootState, string>(state => state.afterData.after)
  const postsData = useSelector<RootState, ICardProps[]>(state => state.postsData.postsData);
  const loading = useSelector<RootState, boolean>(state => state.postsData.loading);
  const error = useSelector<RootState, string>(state => state.postsData.error);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(!token && token == '') return
      if(cycle > 3) {
        console.log(`Cycle over ${cycle}`);
        setIsButtonVisible(true);
        return
      } 
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
        cycle++
        console.log(cycle)
      }
    });
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, after, token])

  return (
    <ul className={styles.cardList}>
      {postsData.length === 0 && !loading && !error && (
        <div className={styles.status}>Нет ни одного поста</div>
      )}

      { postsData.map((item: {[N: string]: any}) => (
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

      { isButtonVisible && <button className={styles.moreButton} onClick={() => {cycle = 0; setIsButtonVisible(false); dispatch(postsRequestAsync());}}>Загрузить ещё</button>}

      <div ref={bottomOfList}></div>
       {loading && (
         <div className={styles.status}>Загрузка...</div>
       )}
       {error && (
         <div className={styles.status}>{error}</div>
       )}
    </ul>
)}
