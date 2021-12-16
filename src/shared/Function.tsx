 import { pickFromSyntheticEvent } from './utils/React/pickFromSyntheticEvent';
import { withKey } from './utils/React/withKey';
import React from 'react';
 
 export interface IBlockProps {
     title: string;
     id: string;
 }

 const withIdKey = withKey('id');

 function Feed(props: {blocks: IBlockProps[] }) {
     return (
         <div>
             {props.blocks.map(withIdKey(Block))}
         </div>
     );
 }

 function Block(props: IBlockProps) {
     return (
         <div>{props.title}</div>
     )
 }


