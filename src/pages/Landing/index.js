import React from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';
import Header from '../../components/Header';

import './styles.css';

export default function LandingPage() {
  return (
    <div id="page-landing" >
        <Header
          option1="Home"
          option2="Sobre"
        />

        <div id="landing-container" className="container">
          <div className="search-container">
            <h1>
              Encontre todas <strong>informações<br/> 
              nutricionais</strong> do seu alimento<br/>
              preferido
            </h1>

            <div className="select-block">
              <select value="" id="">
                <option value="" disabled hidden>Escolha a categoria</option>
                <option value="" >teste</option>
              </select>

              <div className="button-container">
                <Link to="/Categories">Buscar</Link>
              </div>
            </div>
          </div>  
          
            <div className="landing-image">
              <img src={landingImg} title="Vector criado por pch.vector - www.freepik.com" alt="hero" className="hero-image"/>
            </div>
        </div>
   </div>
  )
}