import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { Feed } from '../../../Header/SortBlock/List';
import { generateId } from '../../../utils/React/generateRandomIndex';
import { merge } from '../../../utils/js/merge';
import styles from './menu.scss';

const LIST = [
  { title: 'Rising', class: 'dropItem' },
  { title: 'Powerups', class: 'icon-powerup' },
  { title: 'Premium', class: 'icon-premium' },
  { title: 'Talk', class: 'dropItem' },
  { title: 'Predictions', class: 'dropItem' },
  { title: 'Help Center', class: 'icon-help' },
].map(generateId);


export function Menu() {
  const [mainButton, setMainButton] = React.useState('Rising')

  const handleClick = (id: string) => {
    const newList = LIST.filter((item) => item.id == id);
    const [newItem] = newList
    setMainButton(newItem.title)
  }

  return (
    <div className={styles.menu}>
      <Dropdown button={<button className={styles.menuButton}>
        <img className={styles.menuButtonImg} src="https://www.pngrepo.com/download/75784/three-dots-menu.png"/>
      </button>}>
        <Feed blocks={LIST.map(merge({ onClick: handleClick}))}/>
      </Dropdown>
   </div>
  );
}
