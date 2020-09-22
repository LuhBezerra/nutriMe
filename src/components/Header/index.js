import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

const Hearder = (props) => {
  return (
    <header className="header">
      <div className="top-bar-container">
        <img src={logoImg} alt="NutriMe"/>

        <div className="top-bar-options">
          <Link to={props.option1Link}>{props.option1}</Link>
          <Link to={props.option2Link}>{props.option2}</Link>
        </div>
      </div>
    </header>
  )
}

export default Hearder;