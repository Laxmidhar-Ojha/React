import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import { useEffect, useState } from 'react'

function App() {
  const [themeMode,setThemeMode] =useState("light")
  
  const darkTheme=()=>{
      setThemeMode("dark")
  }
  
  const ligthTheme=()=>{
      setThemeMode("light")
  }

  useEffect(()=>{
    const themeClass=document.getElementsByTagName("html")
    themeClass[0].classList.remove("light","dark")
    themeClass[0].classList.add(themeMode)
  }
  ,[themeMode])
  return (
    <ThemeProvider value={{themeMode,darkTheme,ligthTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
    

  )
}

export default App
