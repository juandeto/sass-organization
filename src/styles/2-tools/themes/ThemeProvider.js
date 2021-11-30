import React, {useContext, useEffect, useState} from "react";

export const initialThemeState = {
  theme: "dark",
  setTheme: () => null
};

const ThemeContext = React.createContext(initialThemeState);




const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialThemeState.theme);
  
    const localStorage = window.localStorage;
  
    useEffect(() => {
      const savedThemeLocal = localStorage.getItem("globalTheme");
  console.log('saved: ', savedThemeLocal)
      if (!!savedThemeLocal) {
        setTheme(savedThemeLocal);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("globalTheme", theme);
    }, [theme]);
    
    console.log('THEME: ', theme)
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme--${theme}`}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeProvider;