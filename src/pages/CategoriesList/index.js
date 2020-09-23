import React, {useState, useEffect} from 'react';

import Header from '../../components/Header/';
import Item from '../../components/Item';
import CategoriesModal from '../../components/CategoriesModal';

import api from '../../services/api';

import './styles.css';

export default function Categories(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  
  const [categoryItens,setCategoryItens] = useState([]);
  
  let info;

  if (props.location.state != null){
    info = props.location.state.category;
  }else {
    //bloqueia a entrada inadequada na rota category
  }

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