import { useState, useEffect,createContext, Children } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "Light");

  useEffect(()=>{
    localStorage.setItem('theme',theme);
    console.log(theme);
  },[theme]);
  
  const toggleTheme = () => {
    setTheme((theme) => (theme === "Light" ? "Dark" : "Light"))
  }
 
  return (
    <ThemeContext.Provider value = {{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
