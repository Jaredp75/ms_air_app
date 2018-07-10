import React from "react";
import {Link} from 'react-router-dom';
import '../styles/App.css';

export default class Baselayout extends React.Component {

  render(){

    return(
      <div>
        <nav>
          <Link to={"/"} />

        </nav>
          {this.props.children}
          <footer></footer>
          <terms></terms>
          <privacy></privacy>
          <about></about>
          <login></login>
      </div>
    )
  }
}
