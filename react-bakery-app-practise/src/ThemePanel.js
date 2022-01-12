
import { useContext } from "react"
import { SettingsTile } from "./SettingsTile"
import { themeContext } from "./ThemeContext"

export const ThemePanel = ({onThemeChange}) => {   
    
    const theme = useContext(themeContext);

    return (
        <div style={{display: 'flex'}}>

            <themeContext.Provider value="light">
                <SettingsTile content="Light" foregroundColor="blue" backgroundColor="gray" isSelected={theme === 'light'} onClick={() => onThemeChange('light')}/>
            </themeContext.Provider>
            <themeContext.Provider value="orange">
                <SettingsTile content="Orange" foregroundColor="blue" backgroundColor="gray" isSelected={theme === 'orange'} onClick={() => onThemeChange('orange')}/>
            </themeContext.Provider>
            <themeContext.Provider value="green">
                <SettingsTile content="Green" foregroundColor="blue" backgroundColor="gray" isSelected={theme === 'green'} onClick={() => onThemeChange('green')}/>
            </themeContext.Provider>
            
        </div>
    )
} 