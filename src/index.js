import React from 'react';
import { render } from 'react-dom';
import App from './routes/app';

const rootEl = document.getElementById('root');

render(<App />, rootEl);

if (module.hot) {
  module.hot.accept();
}
