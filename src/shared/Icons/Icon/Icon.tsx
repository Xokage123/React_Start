import classNames from 'classnames';
import React from 'react';
import { BlockIcon } from '../BlockIcon';
import { WarningIcon } from '../WarningIcon';
import styles from './icon.scss';

export enum EIcons {
  menu = 'menu',
  warning = 'warning',
  block = "block",
}

type ISizes = 28 | 20 | 16 | 14 | 12 | 10;

interface IIconProps {
  name: EIcons,
  size: ISizes,
}

export function Icon(props: IIconProps) {
  const { 
    name, 
    size
  } = props;  
  const classes = classNames(
    styles[`s${size}`]
  )

  const setIcon = () => {
    switch (name) {
      default:
        return <svg className={classes} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
         <path d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z" fill="#999999"/>
         </svg>;
      case `block`: 
        return <svg className={classes} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
         <path d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z" fill="#999999"/>
         </svg>;
      case 'warning': 
        return <svg className={classes} xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
        <path d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z" fill="#999999"/>
       </svg>;
    }
  }

 
    return (
        setIcon()
    )
}
