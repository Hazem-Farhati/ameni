import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {Routes,Route} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Categories from "./pages/Categories";
import List_categories from "./component/List_categories";
import { useState } from "react";


function App() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      image: "../image_categorie/GROUPE DE FONTE LOURDE.jpg",
      name: "GROUPE DE FONTE LOURDE",
      produit :{
        id :1,
        title: "hazem"
      }
    },
    {
      id: 2,
      image: "../image_categorie/GROUPE DE CATERPİLLAR.jpg",
      name: "GROUPE DE CATERPİLLAR",
      produit :{
        id :2,
        title: "ameni"
      }
    },
    {
      id: 3,
      image: "../image_categorie/GROUPE DE ZF HİDROMEK.jpg",
      name: "GROUPE DE ZF HİDROMEK",
      produit :{
        id :3,
        title: "hazem"
      }
    },
    {
      id: 4,
      image: "../image_categorie/RADIATEUR et GROUPE DE REFROIDISSEMENT.jpg",
      name: "RADIATEUR et GROUPE DE REFROIDISSEMENT",
      produit :{
        id :4,
        title: "hazem"
      }
    },
    {
      id: 5,
      image: "../image_categorie/ÉTIQUETTE.jpg",
      name: "ÉTIQUETTE",
      produit :{
        id :5,
        title: "hazem"
      }
    },
    {
      id: 6,
      image: "../image_categorie/Autres.jpg",
      name: "Autres",
      produit :{
        id :6,
        title: "hazem"
      }
    },
    {
      id: 7,
      image: "../image_categorie/GROUPE DE PIÈCES CARRARO.jpg",
      name: "GROUPE DE PIÈCES CARRARO",
      produit :{
        id :7,
        title: "hazem"
      }
      
    },
    {
      id: 8,
      image: "../image_categorie/PIÈCES DE MOTEUR.jpg",
      name: "PIÈCES DE MOTEUR",
      produit :{
        id :8,
        title: "hazem"
      }
    },
    {
      id: 9,
      image: "../image_categorie/GROUPE BOUTON.png",
      name: "GROUPE BOUTON",
      produit :{
        id :9,
        title: "hazem"
      }
    },
    {
      id: 10,
      image: "../image_categorie/GROUPE D'ESSİEUX.jpg",
      name: "GROUPE D'ESSİEUX",
      produit :{
        id :10,
        title: "hazem"
      }
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Categories" element={<Categories   categories={categories}/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/List_categories/:id' element={<List_categories categories={categories} />}></Route>

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
