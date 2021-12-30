import React from 'react';
import { BlockIcon } from '../../../../Icons/BlockIcon';
import styles from './menuitemslist.scss';
import { WarningIcon } from '../../../../Icons/WarningIcon'
import { Text, EColors } from '../../../../Text/Text';
import { Icon, EIcons } from '../../../../Icons/Icon';


interface IMenuItemsListProps {
  postID : string;
}

export function MenuItemsList({ postID }: IMenuItemsListProps ) {
  return (
    <ul className={styles.menuItemsList}>
      <li onClick={() => console.log(postID)} className={styles.menuItemTablet}>
        <Icon name={EIcons.comment} size={16}/>
        <Text size={12} color={EColors.gray99}>Комментарии</Text>
      </li>

      <div className={styles.dividerTablet}/>
        
      <li onClick={() => console.log(postID)} className={styles.menuItemTablet}>
        <Icon name={EIcons.share} size={16}/>
        <Text size={12} color={EColors.gray99}>Поделиться</Text>
      </li>

      <div className={styles.dividerTablet}/>
      
      <li onClick={() => console.log(postID)} className={styles.menuItem}>
        <Icon name={EIcons.block} size={16}/>
        <Text size={12} color={EColors.gray99}>Скрыть</Text>
      </li>

      <div className={styles.divider}/>

      <li className={styles.menuItemTablet}>
        <Icon name={EIcons.save} size={16}/>
        <Text size={12} color={EColors.gray99}>Сохронить</Text>
      </li>

      <div className={styles.dividerTablet}/>

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={16}/>
       <Text size={12} color={EColors.gray99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
