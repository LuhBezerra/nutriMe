import React from 'react'
import { useSelector } from 'react-redux';

import closeImg from '../../assets/images/icons/close.svg';
import Item from '../CategoriesModalItem';

import './styles.css'

const Modal = ({id="modal", onClose = () => {}}) => {
  const handleOutsideClick = (e) =>{
    if(e.target.id === id) onClose()
  }

  const dataClickedItem = useSelector(state => state.data[0] );

  function isNA(attribute){                     
    if (typeof(attribute) === 'number') {
      return attribute.toFixed(1)
    }else {
      return attribute
    }
  } 

  function attributeExists(type, value) {
    if (typeof dataClickedItem.attributes[type] !== 'undefined' ){
      return isNA(dataClickedItem.attributes[type][value])
    } else {
      return 'NA'
    }
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className='close-button' onClick={onClose}>
        <img src={closeImg} alt="botão-para-fechar"/>
      </div>
      <div className="container">
        <h1>{dataClickedItem.description}</h1>

        <div className="info-container">
          <div className="info-container-energy">
            <h2>Valor <br/>energético</h2>

            <p>{attributeExists('energy','kcal')}</p>
            <p>kcal</p>
          </div>

          <div className="info-nutritional-container">
            <Item
              title="Carbo"
              quantity={attributeExists('carbohydrate','qty')}
              unit={attributeExists('carbohydrate','unit')}
            />

            <Item
              title="Proteína"
              quantity={attributeExists('protein','qty')}
              unit={attributeExists('protein','unit')}
            />

            <Item
              title="Fibra"
              quantity={attributeExists('fiber','qty')}
              unit={attributeExists('fiber','unit')}
            />

            <Item
              title="Sódio"
              quantity={attributeExists('sodium','qty')}
              unit={attributeExists('sodium','unit')}
            />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Modal;