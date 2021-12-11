import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../shared/App';
import { Layout } from '../shared/Layout';



window.addEventListener('load', () => {
  ReactDOM.hydrate(<App/>, document.getElementById('react_root'));
})
