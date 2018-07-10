import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();






// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './styles/App.css';
// import App from './App.js';
// import registerServiceWorker from './registerServiceWorker';
// import Baselayout from './components/Baselayout';
// import Home from './components/Home.js';
// import About from './components/About.js';
// import prodID8 from './components/product_pages/prodID8';
//
//
//
//
//
//     <div className="App">
//       <div className="header">
//         <div className="top-header">
//           <div className="header header-v1">
//             <div className="header-language-background">
//               <div className="wrap-container">
//                 <div className="header-wrap">
//                   <div id="welcome-msg">
//                     <strong>CALL NOW: 1-877-MSAIR99</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           <div id="top-nav">
//             <div id="top-links">
//               <a className="active" href="/myaccount">My Account</a>
//               <a href="/checkout">Checkout</a>
//               <a href="/register">Register</a>
//               <a href="/login">Login</a>
//             </div>
//           </div>
//         </div>
//
//
//         <div className="middle-header">
//           <div className="title-wrapper">
//             <div className="title-header">
//               <div className="app-header">
//                 <div className="content">
//                   <div className="title-header-left-div">
//                     <div id="app-title">MS <font color="yellow">AIR</font>
//                     <div><p>Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications</p></div>
//                   </div>
//                 </div>
//
//                 <div className="title-header-right-div">
//                   <div className="social-wrapper right-div">
//
//
//
//                     <div className="checkout-wrapper">
//                       <div className="checkout">
//                         <a href="/viewcart" className="btn btn-info btn-lg">
//                           <p>Shopping Cart</p>
//                             <i className="fas fa-shopping-cart fa-2x"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//
//
//
//
//           </div>
//         </div>
//       </div>
//     </div>
//
//   </div>
// </div>
// </div>
//
//
//
//
//
//
// ReactDOM.render(
//   <BrowserRouter>
//     <Baselayout>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="./App" component={App} />
//         <Route path="/about" component={About} />
//         <Route path="/components/product_pages/prodID8" component={prodID8} />
//       </Switch>
//     </Baselayout>
//   </BrowserRouter>
//   , document.getElementById('root'));
// registerServiceWorker();
