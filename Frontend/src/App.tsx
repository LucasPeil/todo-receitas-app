
import { useState } from 'react';
import './App.css';
import DessertForm from './components/DessertForm';
import Footer from './components/Footer';
import Header from './components/Header';

import {IDesserts} from "./interfaces/Desserts"

function App() {

  const [dessertList, setDessertList] = useState<IDesserts[]>([])
  const [updatedDessert, setUpdatedDessert] = useState<IDesserts | null>(null)
 
  return (
    <div className="App">
      <Header/>
      <div>
        <h2>Qual sobremesa você quer fazer hoje?</h2>
        <DessertForm btnText = "Adicionar" dessertList={dessertList} setDessertList={setDessertList}/>
      </div>
      <div>
        <h2>Sobremesas:</h2>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
