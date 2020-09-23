import React from 'react'

import closeImg from '../../assets/images/icons/close.svg';
import Item from '../CategoriesModalItem';

import './styles.css'

const Modal = ({id="modal", onClose = () => {}, title}) => {
  const handleOutsideClick = (e) =>{
    if(e.target.id === id) onClose()
  }

  return (
     <div id={id} className="modal" onClick={handleOutsideClick}>
       <div className="container">
         <button className="close" onClick={onClose}>
           <img src={closeImg} alt="botão-para-fechar"/>
         </button>
         <div className="content">
           <h1>Nome do Item</h1>

          <div className="info-container">
            <div className="info-container-energy">
              <h2>Valor <br/>energético</h2>
              <p>123.5</p>
              <p>kcal</p>
            </div>

            <div className="info-nutritional-container">
              <Item
                title="Carboidratos"
                quantity="123.5"
              />

              <Item
                title="Carboidratos"
                quantity="123.5"
              />

              <Item
                title="Carboidratos"
                quantity="123.5"
              />

              <Item
                title="Carboidratos"
                quantity="123.5"
              />
            </div> 
            
           </div>
         </div>
       </div>
     </div>
  )
}

export default Modal;