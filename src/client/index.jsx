import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Names } from '../shared/Names';



window.addEventListener('load', () => {
  ReactDOM.hydrate(<Names/>, document.getElementById('react_root'));
})
