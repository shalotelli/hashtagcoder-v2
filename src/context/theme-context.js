import React, {useState, useEffect, createContext} from 'react'

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
})

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const loadTheme = () => localStorage.getItem('theme') || 'light'
    setTheme(loadTheme())
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider