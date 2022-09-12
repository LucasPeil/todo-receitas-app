
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
    <div className={styles.list}>
    <h3>Sobremesas para fazer e adoçar a vida:</h3>
    <div className={styles.dessert_container}>{dessertList.map((dessert)=>(
      <div className={styles.list_itens} key={dessert.id}>
        <p>Sobremesa:</p>
        <p className={styles.list_item}>{dessert.name}</p>
        <p>Dificuldade:</p>
        <p className={styles.list_item}>{dessert.difficulty}</p>
        
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