import React from 'react'
import { useState ,useEffect} from 'react';
import Navbar from '../Navbar/Navbar'
import { ThemeProvider } from '../UseContext/UseContext'
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Arivals from '../Arrivals/Arivals';
import OfferSection from '../OfferSection/OfferSection';
import Box from '../Box/Box';
import Selers from '../Sellers/Selers';
import Timmers from '../Timmers/Timmers';
import Fedback from '../Fedback/Fedback';
import Trends from '../Trends/Trends';

function Home() {
  const [thememode, setthememode] = useState("light");

  const lightTheme = () => setthememode("light")
  const darkTheme = () => setthememode("dark")

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(thememode)
  }, [thememode]);

  return (
      <ThemeProvider value={{ thememode, lightTheme, darkTheme }}>
    <div>
     
      <Hero/>
      <Category/>
      <Arivals/>
      <OfferSection/>
      <Box/>
      <Selers/>
      <Timmers/>
      <Fedback/>
      <Trends/>

    </div>
     </ThemeProvider>
  )
}

export default Home
