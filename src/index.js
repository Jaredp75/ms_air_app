import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import prodID8 from './components/product_pages/prodID8';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={prodID8} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
