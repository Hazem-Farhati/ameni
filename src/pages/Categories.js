import React, { useState } from "react";
import List_categories from "../component/List_categories";
import "../style/Categorie_card.css";
import "../style/list.css";
import { Link } from 'react-router-dom'


function Categories({ categories }) {
  const [show, setShow] = useState(false)
  return (
    <div>
         <div className="nos-p">
  <img src='../trax.jpg' id='im_trax'/>
        <div className='tit-p'onClick={()=>setShow(!show)}>Nos produits</div>
      </div>
      {show ? <> {categories.map((cat) => (
        <div className="categories-1">
          <img src={cat.image} alt="image" />
          <h1>{cat.name}</h1>
          <Link to={`/List_categories/${cat.id}`}>
            <button>
              <i ></i>
              More-Details
            </button>
          </Link>
        </div>
      ))}</>:null}
     
    </div>
  );
}

export default Categories;
