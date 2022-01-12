import React, { useState } from "react"
import { EmployeeCard } from "./EmployeeCard"
import { EmployeeForm } from "./EmployeeForm"
import styles from '../Bakery.module.css'

export const NewEmployeePage = () => {
    
    const [name, setName] = useState('Jan');

    return (
        <div className={styles.newEmployeePage}>
            <EmployeeForm name={name} onNameChange={setName}/> 
            <EmployeeCard name={name}/>
        </div>
    )
}