import React from 'react';
import styles from './controls.scss';

interface IControlsProps {
  className?: 'controls' | 'controls-modal';
  children?: React.ReactNode;
}

export function Controls({className = 'controls', children}: IControlsProps) {
  

  return (
    <div className={styles[className]}>
     {children}
    </div>
  );
}
