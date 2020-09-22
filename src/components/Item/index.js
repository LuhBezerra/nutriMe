import React from 'react';

import './styles.css';

const Item = ({id="item-container", onOpen = () => {}, title, quantity}) => {
  const handleClick = (e) =>{
    if(e.target.id === id) onOpen()
  }

  return (
    <button className="item-container">
      <div id={id} onClick={handleClick} className="item-modal-toggle"/>
      <div className="item-title">
        <h1>
          {title}
        </h1>
      </div>

      <footer>
        <h2 >
          <div id={id} onClick={handleClick} className="item-footer-modal-toggle"/>
          Quantidade base
          <p>
            {quantity}
          </p>
        </h2>
      </footer>
    </button>
  )
}

export default Item;