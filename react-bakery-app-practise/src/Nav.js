import React, { useContext, useState } from "react"
import styles from "./Bakery.module.css"
import { NavLink } from 'react-router-dom'
import './index.css'
import { SettingsPanel } from "./SettingsPanel"
import { languageContext } from "./LanguageContext"




export const Nav = ({onLanguageChange, onThemeChange}) => {
    
    const language = useContext(languageContext);

    return (
        <div className={styles.nav}>
            
            <NavLink to="/" className={({isActive}) => isActive ? styles.active : undefined}>{language=== 'pl' ? "Strona główna" : "Home"}</NavLink>
            <NavLink to='/bakery' className={({isActive}) => isActive ? styles.active : undefined}>{language=== 'pl' ? "Pieczenie" : "Baking"}</NavLink>
            <NavLink to="/employee" className={({isActive}) => isActive ? styles.active : undefined}>{language=== 'pl' ? "Pracownicy" : "Employees"}</NavLink>
            <div style={{flex: 1}}></div>
            <SettingsPanel onLanguageChange={onLanguageChange} onThemeChange={onThemeChange}/>
            
            
        </div>
    )
}