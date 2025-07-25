import React,{useState, useContext} from "react";
const ThemeContext = React.createContext();
const ThemeUpdate = React.createContext();
export function useTheme(){
    return  useContext(ThemeContext)
}
export function useThemeupdate (){
    return useContext(ThemeUpdate)
}

export function ThemeProdiver({children}){
    const [darkthem, setdarkthem]= useState(true)

    function toggleTheme(){
        setdarkthem(prev=>!prev)
    }
    
    return(
        <ThemeContext.Provider value={darkthem}>
            <ThemeUpdate.Provider value={toggleTheme}>
            {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
}