import React from 'react'
import styles from "./Modal.module.css"
type Props = {
    children: React.ReactNode
    title: string
    
}  

const Modal = ({children,title}: Props) => {

  return (
    
    <div id="modal" className="hide">
        <div className={styles.modal_background}></div>
        <div className={styles.modal_position}>
          <div className="app_form_content modal">
            <h1 className="app_form_title">{title}</h1>
            <div>{children}</div>
        </div> 
        </div>  
        
    </div>
  )
}

export default Modal