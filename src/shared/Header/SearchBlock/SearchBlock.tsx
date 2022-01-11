import React from 'react';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';
import { IUserData, useUserData } from '../../../hooks/useUserData';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';


export function SearchBlock() {
  
  useUserData();
  const {iconImg, name} = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading)

  return (
   <div className={styles.searchBlock}>
     <UserBlock avatarSrc={iconImg} userName={name} loading={loading}/>
   </div>
  );
}
  