import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home.js';
import About from './components/About.js';
import prodID8 from './components/product_pages/prodID8';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/components/product_pages/prodID8" component={prodID8} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
