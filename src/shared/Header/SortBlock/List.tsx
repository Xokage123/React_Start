import * as React from 'react';
import { pickFromSyntheticEvent } from '../../utils/React/pickFromSyntheticEvent';
import { withKey } from '../../utils/React/withKey';
import { withIdKey } from '../../utils/React/withKey'
import styles from './sortblock.scss';
 
 export interface IBlockProps {
     title: string;
     id: string;
     onClick: (id: string) => void;
     class: string
 }


 export function Feed(props: {blocks: IBlockProps[] }) {
     return (
         <ul className={styles.dropList}>
             {props.blocks.map(withIdKey(Block))}
         </ul>
     );
 }

 export function Block(props: IBlockProps) {
     return (
         <li className={styles[props.class]} onClick={() => props.onClick(props.id)}>{props.title}</li>
     )
 }



 

