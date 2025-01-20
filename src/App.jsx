import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles.js';
import { lightTheme, darkTheme } from './Themes.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import Inventory from './Inventory.jsx';
import Grocery from './Grocery.jsx';


function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const [invMode,setInvMode] = useState(true);
  const [groMode, setGroMode] = useState(false);

  const viewInv = () => {
    setInvMode(true);
    setGroMode(false);
  }
  const viewGro = () => {
    setInvMode(false);
    setGroMode(true);
  }

  const [login, setLogin] =  useState(false);/////////////update after login added

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} viewInv={viewInv} viewGro={viewGro} />
        {invMode && <Inventory/>}
        {groMode && <Grocery />}
        {login && <Footer />}
      </>
    </ThemeProvider>
  )
}

export default App;
