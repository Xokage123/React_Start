import React from 'react';
import { generateRandomString } from '../../utils/React/generateRandomIndex';
import styles from './card.scss';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  id: string;
  username?: string;
  title?: string;
  score?: number;
  num_comments?: number;
}

export function Card(props: ICardProps) {
  
  const { id, username, title, score, num_comments } = props;

  return (
   <li className={ styles.card } key={id}>
     <TextContent username={username} title={title} /> 
     <Preview />
     <Menu />
     <Controls score={score} num_comments={num_comments}/>
   </li>
  );
}
