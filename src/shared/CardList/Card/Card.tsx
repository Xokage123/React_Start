import React from 'react';
import { usePostsData } from '../../../hooks/usePostsData';
import styles from './card.scss';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card() {
   const dataa = usePostsData()

  return (
   <li className={ styles.card }>
     <TextContent /> 
     <Preview />
     <Menu />
     <Controls />
   </li>
  );
}
