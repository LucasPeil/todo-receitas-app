import React from 'react'
import styles from "./Modal.module.css"
import{AiOutlineCloseCircle} from "react-icons/ai"
type Props = {
    children: React.ReactNode
    title: string
    handleClose():void
    
}  

const Modal = ({children,title, handleClose}: Props) => {
 
  return (
    
    <div id="modal" className="hide">
        <div className={styles.modal_background}></div>
        <div className={styles.modal_position}>
          <div className="app_form_content modal">
            <button onClick={()=> handleClose()} className='btn_close'><AiOutlineCloseCircle/></button>
            <h1 className="app_form_title">{title}</h1>
            <div>{children}</div>
        </div> 
        </div>  
        
    </div>
  )
}

export default Modal