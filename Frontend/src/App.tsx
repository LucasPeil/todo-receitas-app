
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
import {FaRegLightbulb} from "react-icons/fa" 


function App() {

  const [dessertList, setDessertList] = useState<IDesserts[]>([])
  const [desertToUpdate, setDesertToUpdate] = useState<IDesserts | null>(null)
  const dispatch = useAppDispatch()
  const {desserts,success,error,loading} = useAppSelector((state)=>state.dessert)
  const listContainer = document.querySelector("#list_container")
  
  let modal = document.querySelector("#modal")
  let newDesserts = document.querySelector("#new_desserts")
  
  
  const handleDelete = (id:number)=>{
    setDessertList(dessertList.filter((dessert :IDesserts)=>(
      dessert.id != id
    )))
    if(dessertList.length<=1){
      listContainer?.classList.add("hide")
    }
  }
 
  const handleEdit = ( dessert: IDesserts)=>{ 
    setDesertToUpdate(dessert)
    modal?.classList.remove("hide")

    
    // 3 - Efetivamente editar a lista (setDessertList)
  }

  const updateDessert = (id:number, name:string) =>{
    const updatedDessert : IDesserts = {id,name}
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
    newDesserts!.classList.remove("hide")
  }
  const handleClose = ()=>{
    modal?.classList.add("hide")
  }
 
  return (
    <div className="app">
      
      <Modal title="Edite Sua Lista" handleClose={handleClose}  children ={<DessertForm btnText='Editar' dessertList={dessertList} setDessertList={setDessertList}  desertToUpdate={desertToUpdate} updateDessert={updateDessert} />} />
      <Header/>
      <div  className="app_form ">
        <div id="" className="app_form_content ">
          
        <button onClick={()=> generateNewDesserts()} className=" btn_idea "> <FaRegLightbulb/></button>
          <h1 className="app_form_title">Ideia para sobremesa?</h1>
         <DessertForm btnText = "Adicionar" dessertList={dessertList} setDessertList={setDessertList}  desertToUpdate={desertToUpdate} updateDessert={updateDessert} /> 
        </div>
        <DessertList dessertList={dessertList} setDessertList={setDessertList} 
        handleDelete={handleDelete} handleEdit={handleEdit} />
        
      </div> 
       
       <NewDesserts desserts={desserts}/>
       

      <Footer/>
    </div>
  );
}

export default App;
