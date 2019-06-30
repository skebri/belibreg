import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
      <Route  component={App}/>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
