import React from 'react'
import { IDesserts } from '../interfaces/Desserts'

type Props = {
  desserts: IDesserts[]
}

const NewDesserts = ({desserts}: Props) => {
  return (
    <div id="new_desserts" className="hide">
      {desserts.map((dessert)=>(
        <div key={dessert.id}>
          <span>{dessert.name}</span>
        </div>
    ))
      }</div>
  )
}

export default NewDesserts