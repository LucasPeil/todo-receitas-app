
import { useState, useEffect } from 'react';
import DessertForm from './components/DessertForm';
import DessertList from './components/DessertList'
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import styles from "./App.module.css"
import {IDesserts} from "./interfaces/Desserts"
import NewDesserts from './components/NewDesserts';
import {useAppSelector, useAppDispatch} from "./TypedHooks"
import {getAllDesserts} from "./Slice/dessertSlice"


function App() {

  const [dessertList, setDessertList] = useState<IDesserts[]>([])
  const [desertToUpdate, setDesertToUpdate] = useState<IDesserts | null>(null)
  const dispatch = useAppDispatch()
  const {desserts,success,error,loading} = useAppSelector((state)=>state.dessert)
  
  let modal = document.querySelector("#modal")
  let displayNewDesserts: boolean = false;
  
  const handleDelete = (id:number)=>{
    setDessertList(dessertList.filter((dessert :IDesserts)=>(
      dessert.id != id
    )))
  }
 
  const handleEdit = ( dessert: IDesserts)=>{ 
    setDesertToUpdate(dessert)
    modal?.classList.remove("hide")

    
    // 3 - Efetivamente editar a lista (setDessertList)
  }

  const updateDessert = (id:number, name:string, difficulty:number) =>{
    const updatedDessert : IDesserts = {id,name,difficulty}
    const updatedDessertList = dessertList.map((dessert)=>{
    return dessert.id === updatedDessert.id ? updatedDessert : dessert;
    });

    setDessertList(updatedDessertList)
    modal?.classList.add("hide")
    
  }
  useEffect(()=>{
    dispatch(getAllDesserts())
  }, [dispatch])
  
  const generateNewDesserts = ()=>{
    
    console.log(desserts)
  }
 
 
  return (
    <div className="app">
      
      <Modal title="Edite Sua Lista"  children ={<DessertForm btnText='Editar' dessertList={dessertList} setDessertList={setDessertList}  desertToUpdate={desertToUpdate} updateDessert={updateDessert} />} />
      <Header/>
      <div  className="app_form ">
        <div id="" className="app_form_content ">
          <h1 className="app_form_title">Ideia para sobremesa?</h1>
         <DessertForm btnText = "Adicionar" dessertList={dessertList} setDessertList={setDessertList}  desertToUpdate={desertToUpdate} updateDessert={updateDessert}/> 
         <button onClick={()=> generateNewDesserts()} className="btn btn_idea ">Me dê uma ideia!</button> 
        </div>
        
      </div>
      
        
        
        <DessertList dessertList={dessertList} setDessertList={setDessertList} 
        handleDelete={handleDelete} handleEdit={handleEdit} />
       

      <Footer/>
    </div>
  );
}

export default App;
