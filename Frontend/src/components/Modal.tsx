import React from 'react'
import styles from "./Modal.module.css"
type Props = {
    children: React.ReactNode
    title: string
}  

const Modal = ({children,title}: Props) => {
  return (
    <div id="modal" className="hide">
        <div className={styles.modalForm}>
            {title}
            {children}
        </div>
        <div className={styles.modal}></div>
    </div>
  )
}

export default Modal