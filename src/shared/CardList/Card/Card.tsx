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
  thumbnail: string;
  created: number;
}

export function Card(props: ICardProps) {
  
  const { id, username, title, score, num_comments, thumbnail, created } = props;
  
  const createdAt = new Date(created);
  
  let unix_timestamp = created
  let date = new Date(unix_timestamp * 1000);
  let hours = "0" + date.getHours();
  let minutes = "0" + date.getMinutes();
  let month = date.getMonth();
  let day = date.getDay();
  let year = date.getFullYear();
  let formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ' ' + day + '.' + month + '.' + year; 

  return (
   <li className={ styles.card } key={id}>
     <TextContent username={username} title={title} date={formattedTime}/> 
     <Preview thumbnail={thumbnail} />
     <Menu />
     <Controls score={score} num_comments={num_comments}/>
   </li>
  );
}
