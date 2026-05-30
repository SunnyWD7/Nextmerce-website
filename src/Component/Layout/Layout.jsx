import React from 'react'
import { useState ,useEffect} from 'react';
import { ThemeProvider } from '../UseContext/UseContext'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import Footersec from '../Foter-second/Footersec';
import { Outlet } from 'react-router-dom'
function Layout() {
   const [thememode, setthememode] = useState("light");
  
    const lightTheme = () => setthememode("light")
    const darkTheme = () => setthememode("dark")
  
    useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(thememode)
    }, [thememode]);
  return (
     <ThemeProvider value={{ thememode, lightTheme, darkTheme }}>
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Footersec/>
    </>
    </ThemeProvider>
  )
}



export default Layout
