import React from 'react';
import { Dropdown } from '../../Dropdown';
import { Feed } from './List';
import { merge } from '../../utils/js/merge';
import { generateId } from '../../utils/React/generateRandomIndex';
import styles from './sortblock.scss';

let LIST = [
  { title: 'Everywhere', class: 'dropItem'},
  { title: 'United Kingdom', class: 'dropItem'},
  { title: 'United States', class: 'dropItem'},
  { title: 'Argentina', class: 'dropItem'},
  { title: 'Australia', class: 'dropItem'},
  { title: 'Canada', class: 'dropItem'},
  { title: 'Japan', class: 'dropItem'},
  { title: 'Colombia', class: 'dropItem'},
  { title: 'Brazilia', class: 'dropItem'},
  { title: 'Finland', class: 'dropItem'},
].map(generateId)


export function SortBlock() {
  const [mainButton, setMainButton] = React.useState('Everywhere');
  const handleClick = (id: string) => {
    const newList = LIST.filter((item) => item.id == id);
    const [newItem] = newList
    setMainButton(newItem.title)
  }

  return (
   <Dropdown button={<button className={styles.sortBlock}>{mainButton}</button>}>
     <Feed blocks={LIST.map(merge({ onClick: handleClick}))}/>
   </Dropdown> 
  );
}
