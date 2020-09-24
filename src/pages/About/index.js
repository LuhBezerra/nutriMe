import React from 'react';

import Header from '../../components/Header';

import './styles.css';

export default function LandingPage() {
  return (
    <div id="page-about" >
      <Header
        option1="Home"
        option1Link='/'
        option2="Sobre"
        option2Link="/about"
      />

      <div id="about-container">
        <h1>
          O site Nutrime foi criado a partir do banco
          de dados da api TACO (Brazilian Table of Food Composition),
          a mesma tem como objetivo 
          fornecer dados de um grande número de nutrientes 
          em alimentos nacionais e regionais obtidos 
          através de amostragem representativa e análises realizadas
          por laboratórios com competência 
          analítica comprovada por estudos interlaboratoriais, 
          segundo critérios internacionais.
        </h1>

        <div className="know-more">
          <p>
            Para saber mais consulte: 
          </p>
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="http://www.nepa.unicamp.br/taco/home.php?ativo=home"
          >
            Projeto TACO
          </a>
        </div>
      </div>
    </div>
  )
}