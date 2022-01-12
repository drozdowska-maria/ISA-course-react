import { useContext } from "react"
import { getBackgroundColor, getForegroundColor } from "./Helpers";
import { themeContext } from "./ThemeContext";

export const SettingsTile = ({content, style, isSelected, ...rest}) => {
    const theme = useContext(themeContext);
    const backgroundColor = getBackgroundColor(theme);
    const foregroundColor = getForegroundColor(theme);
    return (
        <div {...rest} style={{...style, display: "inline-block",  padding: 10, border: "3px solid gray", margin: 5, backgroundColor: backgroundColor}}>
            <div style={{display: 'inline-block', padding: 10, margin: 5, backgroundColor: foregroundColor, border: isSelected ? "3px solid yellow" : "none" }}>{content}</div>
        </div>
    )
}