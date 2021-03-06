import React, { useContext, useState } from "react";
import styles from '../Bakery.module.css';
import { useRef } from "react"; 
import { languageContext } from "../LanguageContext";


export const EmployeeForm = (props) => {


    const language = useContext(languageContext);
    
    const nameRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(document.querySelector('#dontDoThat').value);
        // console.log('this is ref', nameRef.current.value);
        console.log(nameRef)
    }
    
    return (
        <div>
            <form className={styles.employeeForm}>
                
                <input value={props.name} onChange={(e) => props.onNameChange(e.target.value)} id="dontDoThat" type="text" placeholder="name..." className={styles.employeeInput} name="name" ref={nameRef}></input>
                <input type="text" placeholder="last name..." className={styles.employeeInput} name="last-name"></input>
                <div className="genderBox">
                    <input type="radio" name="gender" value="male"></input>
                    <label htmlFor="male">{language === 'pl' ? 'Mężczyzna' : "Male"}</label>
                    <input type="radio" name="gender" value="female"></input>
                    <label htmlFor="female">{language === 'pl' ? 'Kobieta' : "Female"}</label>
                </div>
                <input type="number" min="1900" max="2010" placeholder="year of birth..." name="age" className={styles.employeeInput}></input>
                <button className={styles.employeeBtn} onClick={handleSubmit}>Submit</button> 
            </form>
        </div>
    )
}