
import React, {useState,useEffect,ChangeEvent,FormEvent} from 'react'
import {IDesserts} from "../interfaces/Desserts"
import styles from "./DessertForm.module.css"

interface Props {
    btnText: string;
    dessertList: IDesserts[] ;
    desertToUpdate: IDesserts | null;
    setDessertList?: React.Dispatch<React.SetStateAction<IDesserts[]>>;
    updateDessert?(id:number, name:string, difficulty:number |undefined): void;
    
}

const DesertForm = ({btnText, dessertList, setDessertList, updateDessert, desertToUpdate,  }:Props) => {

    const [id, setId] = useState<number>(0)
    const [name,setName] = useState<string>("")
    const [difficulty,setDifficulty] = useState<number| undefined>()
    
    const listContainer = document.querySelector("#list_container")

    useEffect(()=>{
        if(desertToUpdate){
            setId(desertToUpdate.id!)
            setName(desertToUpdate.name)
            setDifficulty(desertToUpdate.difficulty)
        }
    },[desertToUpdate])

    const addDessertHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(btnText == "Adicionar"){
        const id:number = Math.floor(Math.random()*100000)
        const newDessert:IDesserts = {id,name,difficulty}
        listContainer?.classList.remove("hide")
        setDessertList!([...dessertList, newDessert])

     
       
        }else if(updateDessert){
            updateDessert(id,name,difficulty)
        }
        
        
        setName("")
        setDifficulty(0)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "name"){
            setName(e.target.value)
        }else{
            setDifficulty(parseInt(e.target.value))
        }

    }
   

  return (
    <div>
        <form className="form_content" onSubmit={addDessertHandler}>
            
                <div>
                    <input type="text" name="name" placeholder="Sobremesa" className={styles.dessert_input} onChange={onChangeHandler} value={name} />
                </div>
                <div>
                    <input type="number" name="difficulty"  className={styles.dessert_input} placeholder=" Dificuldade de 1 ( muito fácil) à 5 (muito difícil)" 
                 onChange={onChangeHandler} value={difficulty}/>
                </div>
                    <input className="btn" type="submit" value={btnText} />
                    
        </form>
        
            
    </div>
  )
}

export default DesertForm