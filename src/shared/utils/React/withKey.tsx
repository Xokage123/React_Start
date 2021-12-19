import React from 'react';
import { IBlockProps } from '../../Function';

export const withIdKey = withKey('id');

export function withKey(key?: string) {
    return <T extends React.ComponentType<IBlockProps>>(component: T) => (props: IBlockProps, index: number) => React.createElement(
        component,
        { ...props, key: key ? props[key as keyof IBlockProps] : index },
        []
    );
}
