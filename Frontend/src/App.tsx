
import { useState } from 'react';
import DessertForm from './components/DessertForm';
import DessertList from './components/DessertList'
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import styles from "./App.module.css"
import {IDesserts} from "./interfaces/Desserts"

function App() {

  const [dessertList, setDessertList] = useState<IDesserts[]>([])
  const [desertToUpdate, setDesertToUpdate] = useState<IDesserts | null>(null)
  
  const handleDelete = (id:number)=>{
    setDessertList(dessertList.filter((dessert)=>(
      dessert.id != id
    )))
  }
 
  const handleEdit = ( dessert: IDesserts)=>{ 
    setDesertToUpdate(dessert)
    let modal = document.querySelector("#modal")
    modal?.classList.remove("hide")
    // 3 - Efetivamente editar a lista (setDessertList)
  }

  const updateDessert = (id:number, name:string, difficulty:number) =>{
    const updatedDessert : IDesserts = {id,name,difficulty}
    const updatedDessertList = dessertList.map((dessert)=>{
    return dessert.id === updatedDessert.id ? updatedDessert : dessert;
    });

    setDessertList(updatedDessertList)

    let modal = document.querySelector("#modal")
    modal?.classList.remove("hide")
  }
 
  return (
    <div className={styles.app}>
      <Modal title="Edite Sua Lista" children ={<DessertForm btnText='Editar' dessertList={dessertList} setDessertList={setDessertList}  desertToUpdate={desertToUpdate} updateDessert={updateDessert} />} />
      <Header/>
      <div>
        <h2>Qual sobremesa você quer fazer hoje?</h2>
        <DessertForm btnText = "Adicionar" dessertList={dessertList} setDessertList={setDessertList}  desertToUpdate={desertToUpdate} updateDessert={updateDessert}/>
      </div>
      <div>
        <h3>Sobremesas para fazer e adoçar a vida:</h3>
      </div>
        <DessertList dessertList={dessertList} setDessertList={setDessertList} 
        handleDelete={handleDelete} handleEdit={handleEdit} />

      <Footer/>
    </div>
  );
}

export default App;
