import React, { Children } from 'react';
import styles from './Layout.scss';

interface ILayout {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <div className={styles.layout}>
      { children }
    </div>
  );
}
