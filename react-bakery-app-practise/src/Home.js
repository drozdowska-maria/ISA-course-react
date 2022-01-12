import React, { useState } from "react";
import { Nav } from "./Nav";
import { Bakery } from "./Bakery";
import styles from './Bakery.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewEmployeePage } from "./components/NewEmployeePage";
import { Employeeinfo } from "./EmployeeInfo";
import { languageContext } from "./LanguageContext";
import { themeContext } from "./ThemeContext";


export const Home =  () => {
    const [language, setLanguage] = useState('pl');
    const [theme, setTheme] = useState('light');

    

    return (
        <languageContext.Provider value={language}>
          <themeContext.Provider value={theme}>
            <BrowserRouter>
                <div className={styles.home}> 
                    <Nav onLanguageChange={setLanguage} onThemeChange={setTheme}/>
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
          </themeContext.Provider>  
        </languageContext.Provider>
    )
}