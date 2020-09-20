import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import searchIcon from '../../assets/images/icons/searchIcon.svg';

import './styles.css';

export default function Header() {
  return (
    <div id="page-landing" >
      <div id="page-landing-content">
        <header className="header">
          <div className="top-bar-container">
            <img src={logoImg} alt="NutriMe"/>

            <div className="top-bar-options">
              <a href="">Home</a>
              <a href="">Sobre</a>
            </div>
          </div>
        </header>

        <div id="landing-container" className="container">
            <h1>
              Encontre todas <strong>informações 
              nutricionais</strong> do seu alimento
              preferido
            </h1>

            <div className="search-container">
              <div className="select-block">
                <select value="" id="">
                  <option value="" disabled hidden>Escolha a categoria</option>
                  <option value="" >teste</option>
                </select>
              </div>

              <div className="button-container">
                <a href="">Buscar</a>
              </div>
            </div>  

            <div className="landing-image">
              <img src={landingImg} alt="hero-image" className="hero-image"/>
            </div>
        </div>
      </div>
   </div>
  )
}