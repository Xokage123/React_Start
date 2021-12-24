import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { Feed } from '../../../Header/SortBlock/List';
import { generateId } from '../../../utils/React/generateRandomIndex';
import { merge } from '../../../utils/js/merge';
import styles from './menu.scss';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { MenuItemsList } from './MenuItemsList';
import { Text, EColors} from '../../../Text/Text';

const LIST = [
  { title: 'Rising', class: 'dropItem' },
  { title: 'Powerups', class: 'icon-powerup' },
  { title: 'Premium', class: 'icon-premium' },
  { title: 'Talk', class: 'dropItem' },
  { title: 'Predictions', class: 'dropItem' },
  { title: 'Help Center', class: '' },
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
        <MenuIcon />
      </button>}>
        <div className={styles.dropDown}>
          <MenuItemsList postID='1' />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
   </div>
  );
}
