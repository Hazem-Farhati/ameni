import React from 'react'
import { useParams } from 'react-router-dom'
import Categorie_card from './Categorie_card'

function List_categories({categories}) {
  const {id} = useParams();
  return (
    <div className='list'>
    {categories.filter((el) => parseInt(id) === el.id).map((cat, i) =>
        <div >
                  <img  src={cat.image} alt="image" />
                  {cat.produit.title}

        </div>
      )}   
</div>
  )
}

export default List_categories