
import React, {useState,useEffect,ChangeEvent,FormEvent} from 'react'
import {IDesserts} from "../interfaces/Desserts"


interface Props {
    btnText: string
    dessertList: IDesserts[]
    setDessertList?: React.Dispatch<React.SetStateAction<IDesserts[]>>
}

const DesertForm = ({btnText, dessertList, setDessertList}:Props) => {

    const [id, setId] = useState<number>(0)
    const [name,setName] = useState<string>("")
    const [difficulty,setDifficulty] = useState<number >(0)

    const addDessertHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const id:number = Math.floor(Math.random()*1000)
        const newDessert: IDesserts = {id,name,difficulty}
        setDessertList!([...dessertList, newDessert])

        setName("")
        setDifficulty(0)
        
        console.log(dessertList)
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
        <form onSubmit={addDessertHandler}>
            <div>
                <label htmlFor="name">Sobremesa</label>
                <input type="text" name="name" placeholder="Ex:Pudim" onChange={onChangeHandler} value={name} />
            </div>
            <div>
                <label htmlFor="difficulty">Dificuldade</label>
                <input type="number" name="difficulty" placeholder=" Dificuldade de 1 ( muito fácil) à 5 (muito difícil)" 
                 onChange={onChangeHandler} value={difficulty}/>
            </div>
            <div>
                <input type="submit" value={btnText} />
            </div>

            

        </form>
    </div>
  )
}

export default DesertForm