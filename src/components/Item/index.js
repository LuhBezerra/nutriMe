import React from 'react';
import { useDispatch } from 'react-redux';

import './styles.css';

const Item = ({name="item-container", onOpen = () => {}, data}) => {
  const handleClick = (e) =>{
    if(e.target.id === name) {
      onOpen()
      addData()
    }
  }

  const dispatch = useDispatch();

  function addData(){
    dispatch({ type: 'ADD_CATEGORY_ITEM_DATA', dataItem: data })
  }

  return (
    <button className="item-container">
      <div id={name} onClick={handleClick} className="item-modal-toggle"/>
      <div className="item-title">
        <h1>
          {data.description}
        </h1>
      </div>

      <footer>
        <h2 >
          <div id={name} onClick={handleClick} className="item-footer-modal-toggle"/>
            Quantidade base
          <p>
            {data.base_qty + data.base_unit}
          </p>
        </h2>
      </footer>
    </button>
  )
}

export default Item;