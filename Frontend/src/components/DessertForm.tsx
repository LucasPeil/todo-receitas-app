import {useAppSelector, useAppDispatch} from "../TypedHooks"
import React, {useState,useEffect,ChangeEvent,FormEvent} from 'react'
import {IDesserts} from "../interfaces/Desserts"
import styles from "./DessertForm.module.css"

interface Props {
    btnText: string;
    dessertList: IDesserts[] ;
    desertToUpdate: IDesserts | null;
    setDessertList?: React.Dispatch<React.SetStateAction<IDesserts[]>>;
    updateDessert?(id:number, name:string): void;
    
}

const DesertForm = ({btnText, dessertList, setDessertList, updateDessert, desertToUpdate,  }:Props) => {

    const [id, setId] = useState<number>(0)
    const [name,setName] = useState<string>("")
    

    const listContainer = document.querySelector("#list_container")

    useEffect(()=>{
        if(desertToUpdate){
            setId(desertToUpdate.id!)
            setName(desertToUpdate.name)
            
        }
    },[desertToUpdate])

    const addDessertHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(btnText == "Adicionar"){
        const id:number = Math.floor(Math.random()*100000)
        const newDessert:IDesserts = {id,name}
        listContainer?.classList.remove("hide")
        setDessertList!([...dessertList, newDessert])

     
       
        }else if(updateDessert){
            updateDessert(id,name)
        }
        
        
        setName("")
       
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "name"){
            setName(e.target.value)
        }
    }

  return (
    <div>
        <form className="form_content" onSubmit={addDessertHandler}>
                <div>
                    <input required type="text" name="name" placeholder="Sobremesa" className={styles.dessert_input} onChange={onChangeHandler} value={name} />
                    
                </div>       
                  <input className="btn" type="submit" value={btnText} />                       
        </form>
        
            
    </div>
  )
}

export default DesertForm