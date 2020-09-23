import React from 'react';

import './styles.css';

const NutritionalItem = (props) => {
  return (
    <div className="info-nutritinal-item-container">
      <div className="info-nutritinal-item-title">
        {props.title}
      </div>
      <div className="info-nutritinal-item-value">
        {props.quantity} {props.unit}
      </div>
    </div>
  )
}

export default NutritionalItem;