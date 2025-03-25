import { useContext } from "react"
import ThemeProvider, { ThemeContext } from "./ThemeProvider"

const ThemeSwitcher = () =>{

    const {theme,toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            <h1>{theme.toUpperCase()}</h1>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default ThemeSwitcher