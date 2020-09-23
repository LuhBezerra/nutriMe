import React from 'react'
import { useSelector } from 'react-redux';

import closeImg from '../../assets/images/icons/close.svg';
import Item from '../CategoriesModalItem';

import './styles.css'

const Modal = ({id="modal", onClose = () => {}}) => {
  const handleOutsideClick = (e) =>{
    if(e.target.id === id) onClose()
  }

  const dataClickedItem = useSelector(state => state.data );

  const energy = dataClickedItem[0].attributes.energy.kcal;
  const carbohydrate = dataClickedItem[0].attributes.carbohydrate.qty
  const protein = dataClickedItem[0].attributes.protein.qty
  const fiber = dataClickedItem[0].attributes.fiber.qty
  const sodium = dataClickedItem[0].attributes.sodium.qty

  function isNA(attribute){                     
    if (typeof(attribute) === 'number') {
      return attribute.toFixed(1)
    }else {
      return attribute
    }
  } 

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>
          <img src={closeImg} alt="botão-para-fechar"/>
        </button>
        <div className="content">
          <h1>{dataClickedItem[0].description}</h1>

          <div className="info-container">
            <div className="info-container-energy">
              <h2>Valor <br/>energético</h2>

              <p>{isNA(energy)}</p>
              <p>kcal</p>
            </div>

            <div className="info-nutritional-container">
              <Item
                title="Carbo"
                quantity={isNA(carbohydrate)}
                unit={dataClickedItem[0].attributes.carbohydrate.unit}
              />

              <Item
                title="Proteína"
                quantity={isNA(protein)}
                unit={dataClickedItem[0].attributes.protein.unit}
              />

              <Item
                title="Fibra"
                quantity={isNA(fiber)}
                unit={dataClickedItem[0].attributes.fiber.unit}
              />

              <Item
                title="Sódio"
                quantity={isNA(sodium)}
                unit={dataClickedItem[0].attributes.sodium.unit}
              />
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;