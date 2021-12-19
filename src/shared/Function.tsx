import * as React from 'react';
import { pickFromSyntheticEvent } from './utils/React/pickFromSyntheticEvent';
import { withKey } from './utils/React/withKey';
import { withIdKey } from './utils/React/withKey'
 
 export interface IBlockProps {
     title: string;
     id: string;
     onClick: (id: string) => void
 }


 export function Feed(props: {blocks: IBlockProps[] }) {
     return (
         <div>
             {props.blocks.map(withIdKey(Block))}
         </div>
     );
 }

 export function Block(props: IBlockProps) {
     return (
         <div onClick={() => props.onClick(props.id)}>  {props.title}</div>
     )
 }



 

