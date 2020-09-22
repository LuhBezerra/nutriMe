import React, {useState} from 'react';

import Header from '../../components/Header/';
import Item from '../../components/Item';
import CategoriesModal from '../../components/CategoriesModal';

import './styles.css';

export default function Categories() {
  const categoryItens = [0,1,2,3,4,5,6,7,8];

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div id="page-categories" >
      <Header
        option1="Voltar"
        option1Link="/"
      />

      <div className="page-categories-title">
        Categoria
      </div>


      <div id="categories-content">
        {categoryItens.map(item => {
          console.log(item)
          return (
            <Item
            key="" 
            title="Arroz, integral, cozido"
            quantity="100 g"
            onOpen={()=>setModalVisible(true)}
            />
            
            
            )
          })}

      </div>

      {isModalVisible ? (
        <CategoriesModal onClose={() => {setModalVisible(false)}}>
          sdsdk 
        </CategoriesModal>
        ) : null
      }
    </div>
  )
}