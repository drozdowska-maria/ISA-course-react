import React from "react"
import styles from "./Bakery.module.css"
import { NavLink } from 'react-router-dom'
import './index.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <NavLink to="/" activeClassName='active2'>HOME</NavLink>
            <NavLink to='/bakery' className={({isActive}) => isActive ? styles.active : undefined}>Pieczenie</NavLink>
            <NavLink to="/employee" className={({isActive}) => isActive ? styles.active : undefined}>Pracownicy</NavLink>
        </div>
    )
}