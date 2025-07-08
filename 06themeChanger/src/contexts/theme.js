import React from "react";
import { useContext } from "react";
 
export const ThemeContext=React.createContext()

export const ThemeProvider=ThemeContext.Provider

export const useTheme=()=>useContext(ThemeContext)

