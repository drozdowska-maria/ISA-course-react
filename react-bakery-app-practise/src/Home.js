import React from "react";
import { Nav } from "./Nav";
import { Bakery } from "./Bakery";
import styles from './Bakery.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewEmployeePage } from "./components/NewEmployeePage";
import { Employeeinfo } from "./EmployeeInfo";


export const Home =  () => {
    return (
        <BrowserRouter>
            <div className={styles.home}> 
                <Nav/>
                <div className={styles.content} >
                    <Routes>
                        <Route path='/' element='cześć'/>
                        <Route path='/bakery' element={<Bakery/>}/>
                        <Route path='/employee' element={<NewEmployeePage/>}/>
                        <Route path='/employee/:employeeId' element={<Employeeinfo/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}