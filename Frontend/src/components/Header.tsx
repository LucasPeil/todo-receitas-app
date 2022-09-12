import React from 'react'
import styles from "./Header.module.css"
import logo from "../app-logo.svg"
const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo} alt="desert-logo" className={styles.logo} />
        <h2 className={styles.header_text}></h2>
    </header>
  )
}

export default Header