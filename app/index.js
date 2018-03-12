import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

render(<App />, document.getElementById('app'));
