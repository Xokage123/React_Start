import React from 'react';
import { BlockIcon } from '../../../../Icons/BlockIcon';
import styles from './menuitemslist.scss';
import { WarningIcon } from '../../../../Icons/WarningIcon'

interface IMenuItemsListProps {
  postID : string;
}

export function MenuItemsList({ postID }: IMenuItemsListProps ) {
  return (
    <ul className={styles.menuItemsLink}>
      <li onClick={() => console.log(postID)} className={styles.menuItem}>
        <BlockIcon />
        <span>Скрыть</span> 
      </li>

      <div className={styles.divider}/>

      <li className={styles.menuItem}>
        <WarningIcon />
       <span>Пожаловаться</span>  
      </li>
    </ul>
  );
}
