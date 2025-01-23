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
        {login && invMode && <Inventory/>}
        {login && groMode && <Grocery />}
        {!login &&
        <div>
          <h1>Input a user number or sign in as user 100</h1>
          <input type="text" name="userNumber" placeholder="Input a 1-2 digit number"></input>
          <button>Login to a chosen user</button>
          <button>Login as user 100</button>
        </div>}
      </>
    </ThemeProvider>
  )
}

export default App;
