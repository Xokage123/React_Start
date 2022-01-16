import React from 'react';
import { IBlockProps } from '../../Header/SortBlock/List';

export const withIdKey = withKey('id');

export function withKey(key: string) {
    return <T extends React.ComponentType<IBlockProps>>(component: T) => 
    (props: IBlockProps, index: number) => 
    React.createElement(
        component,
        //@ts-ignore
        { ...props, key: key ? props[key as keyof IBlockProps] : index },
        []
    );
}
