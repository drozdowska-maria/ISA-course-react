import { useContext, useState } from "react";
import { languageContext } from "./LanguageContext";
import { SettingsTile } from "./SettingsTile"

export const LanguagePanel = ({onLanguageChange}) => {
    
    const language = useContext(languageContext);    

    return (
        <div style={{display: 'flex'}}>
                <SettingsTile content={language==='pl' ? "Polski": "Polish"} foregroundColor="blue" backgroundColor="gray" isSelected={language === 'pl'} onClick={() => onLanguageChange('pl')}/>
                <SettingsTile content={language==='pl' ? "Angielski" : "English"} foregroundColor="blue" backgroundColor="gray" isSelected={language === 'en'} onClick={() => onLanguageChange('en')}/>
                </div>
    )
} 