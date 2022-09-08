
import React from 'react'
import {BsTrashFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"
import {IDesserts} from '../interfaces/Desserts'

interface Props {
  dessertList: IDesserts[]
  setDessertList: React.Dispatch<React.SetStateAction<IDesserts[]>>
  handleDelete(id:number): void
  handleEdit( dessert: IDesserts):void
}



const DessertList = ({dessertList, handleDelete, handleEdit}: Props) => {

  return (
    <div>{dessertList.map((dessert)=>(
      <div key={dessert.id}>
        <p>{dessert.name}</p>
        <button onClick={() => handleDelete(dessert.id!) }><BsTrashFill/></button>
        <button onClick={() => handleEdit(dessert) }><AiFillEdit/></button>
        
      </div>
    ))}</div>
  )
}

export default DessertList;