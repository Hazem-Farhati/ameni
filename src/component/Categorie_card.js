import React from 'react'
import "../style/Categorie_card.css"


function Categorie_card({categorie}) {
  return (
    <div className='card'>
        <img src={categorie.image} className='im'/>
        <h3>{categorie.name}</h3>
    </div>
  )
}

export default Categorie_card