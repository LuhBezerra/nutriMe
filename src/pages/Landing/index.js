import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';
import Header from '../../components/Header';

import api from '../../services/api';

import './styles.css';

export default function LandingPage() {
  const [options, setOptions] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState([{
    id: '',
    category: ''
  }]);

  useEffect(() => {
    api.get('/category').then(response => {
      setOptions(response.data);
    })
  }, []);

  function handleSelectChange(event){
    selectedCategory[0] = options[event.target.value - 1]
    setSelectedCategory(selectedCategory)
  }

  return (
    <div id="page-landing" >
      <Header
        option1="Home"
        option1Link='/'
        option2="Sobre"
        option2Link="/about"
      />

      <div id="landing-container" className="container">
        <div id="search-container">
          <h2>
            Encontre todas <strong>informações<br/> 
            nutricionais</strong> do seu alimento<br/>
            preferido
          </h2>

          <div className="select-block">
            <select id="categories" defaultValue='category' onChange={handleSelectChange}>
              <option value='0' selected disabled>Escolha uma categoria</option>
              {options.map( option => (
              <option key={option.category} value={option.id} >{option.category}</option>
              ))}
            </select>

            <div className="button-container">
              <Link
                to={{
                  pathname: "/categories",
                  state: { category: selectedCategory }
                }}
              >
                Buscar
              </Link>
            </div>
          </div>
        </div>  
        
        <div className="landing-image">
          <img src={landingImg} title="Vetor criado por pch.vector - www.freepik.com" alt="hero" className="hero-image"/>
        </div>
      </div>
    </div>
  )
}