
import React from 'react'
import {BsTrashFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"
import {IDesserts} from '../interfaces/Desserts'
import styles from "./DessertList.module.css"
interface Props {
  dessertList: IDesserts[]
  setDessertList: React.Dispatch<React.SetStateAction<IDesserts[]>>
  handleDelete(id:number): void
  handleEdit( dessert: IDesserts):void
}



const DessertList = ({dessertList, handleDelete, handleEdit}: Props) => {

  return (
    
    <div id="list_container" className="list hide">
    <div className={styles.dessert_container}>{dessertList.map((dessert)=>(
      
      <div  className="list_itens" key={dessert.id}>
        <p className={styles.list_item}>{dessert.name}</p>
        <div className={styles.buttons_container}>
          <button className="btn btnDelete" onClick={() => handleDelete(dessert.id!) }><BsTrashFill/></button>
          <button className="btn btnEdit" onClick={() => handleEdit(dessert) }><AiFillEdit/></button>
        </div>
      </div>
    ))}
    </div>
    </div>
  )
}

export default DessertList;