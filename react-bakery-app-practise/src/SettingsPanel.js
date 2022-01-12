import { LanguagePanel } from "./LanguagePanel"
import { ThemePanel } from "./ThemePanel"



export const SettingsPanel = ({onLanguageChange, onThemeChange}) => {
    
    
    return (
        <>
        <LanguagePanel onLanguageChange={onLanguageChange}/>
        <ThemePanel onThemeChange={onThemeChange}/>    
        </>
    )
}