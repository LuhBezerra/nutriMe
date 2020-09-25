import React, {useState, useEffect} from 'react';
import $ from 'jquery';

import Header from '../../components/Header/';
import Item from '../../components/Item';
import CategoriesModal from '../../components/CategoriesModal';

import api from '../../services/api';

import './styles.css';

export default function Categories(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  
  const [categoryItens,setCategoryItens] = useState([]);
  
  isModalVisible ? 
  $("#page-categories").css({"position":"fixed"}) : $("#page-categories").css({"position":"relative"})
  
  let info = props.location.state.category;

  useEffect(() => {
    api.get(`/category/${info[0].id}/food`).then(response => {
      setCategoryItens(response.data);
    })
  }, [info]);
  
  return (
    <div id="page-categories" >
      <Header
        option1="Voltar"
        option1Link="/"
        option2=''
        option2Link=''
      />

      <div className="page-categories-title">
        {info[0].category}
      </div>

      <div id="categories-content">
        {categoryItens.map(item => {
          return (
            <Item
            key={item.id}
            data={item} 
            onOpen={()=>setModalVisible(true)}
            />
            )
          })}
      </div>

      {isModalVisible ? (
        <CategoriesModal onClose={() => {setModalVisible(false)}}/>) : null
      }
    </div>
  )
}