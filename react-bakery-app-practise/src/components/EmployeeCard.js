import React from "react";
import styles from '../Bakery.module.css';
import female from './female_icon.png';
import male from './male_icon.png';

export const EmployeeCard = ({name, last , age}) => {
    console.log(name)
    return (
        <div className={styles.employeeCard}>
            <div>
                <img src={female} className={styles.employeeImg}></img>
                <p style={{textAlign: 'center'}}>{age}Age</p>
            </div> 
            <div>
                <h2>{name}</h2> 
                <h2>Last Name</h2>
            </div>
        </div>
    )
}