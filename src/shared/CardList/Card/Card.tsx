import React from 'react';
import { generateRandomString } from '../../utils/React/generateRandomIndex';
import styles from './card.scss';
import { Controls } from './Controls';
import { Actions } from './Controls/Actions';
import { CommentsButton } from './Controls/CommentsButton';
import { KarmaCounter } from './Controls/KarmaCounter';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { Title } from './TextContent/Title';
import { Post } from '../../Post';

export interface ICardProps {
  selftext?: string;
  id: string;
  username: string;
  title: string;
  score: number;
  num_comments: number;
  thumbnail: string;
  created: number;
}

export function time(created: number) {
  let unix_timestamp = created
  let date = new Date(unix_timestamp * 1000);
  let formattedTime = String(date).substr(4, 20)
  return formattedTime;
 }

export function Card(props: ICardProps) {
  
  const { id, username, title, score, num_comments, thumbnail, created } = props;

  return (
   <li className={ styles.card } >
     <TextContent username={username}  date={time(created)} >
      <Title title={title} id={id}/>
     </TextContent> 
     <Preview thumbnail={thumbnail} />
     <Menu />
     <Controls>
       <KarmaCounter score={score}/>
       <CommentsButton num_comments={num_comments}/>
       <Actions />
     </Controls>
   </li>
  );
}
