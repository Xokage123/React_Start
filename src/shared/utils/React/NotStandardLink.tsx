import { stopPropagation } from './stopPropagation';
import { preventDefault } from './preventDefault';
import React from 'react';

function NotStandardLink(props: any) {
    return (
        <a onClick={preventDefault(stopPropagation(props.onclick))}>Hello</a>
    );
}
