import classNames from 'classnames';
import React from 'react';
import { BlockIcon } from '../BlockIcon';
import styles from './icon.scss';

export enum EIcons {
  block = 'block',
  menu = 'menu',
  warning = 'warning',
}

type ISizes = 28 | 20 | 16 | 14 | 12 | 10;

interface IIconProps {
  name: EIcons,
  size: ISizes; 
}

export function Icon(props: IIconProps) {
  const { name, size} = props;  
  
  return (
    
  );
}
