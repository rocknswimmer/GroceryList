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

  const [login, setLogin] =  useState(false);
  const [user, setUser] = useState('');
  const [issue, setIssue]  = useState(false);
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const updateUser = (e) => {
    let cur = e.target.value;
    if(cur.length > 2 || cur.length == 0){
      setIssue(true);
    } else if (cur.split('').every((char) => {return digits.indexOf(char) !== -1})) {
      setUser(cur);
      setIssue(false);
    } else {
      setIssue(true);
    }
  }

  const postUser = () => {
    axios.post('/user', {user: user})
    .then((res) => {
      localStorage.user = Number(user);
      setLogin(true);
    })
  }

  const logIn = () => {
    if(!issue){postUser();}
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} viewInv={viewInv} viewGro={viewGro} login={login}/>
        {login && <h1>User {user}'s {invMode?'Inventory':'Grocery List'}</h1>}
        {login && invMode && <Inventory/>}
        {login && groMode && <Grocery />}
        {!login &&
        <div>
          <h1>Input a user number or sign in as user 100</h1>
          <div>
          <input type="text" name="userNumber" placeholder="Input a 1-2 digit number" onChange={updateUser}></input>
          <button onClick={logIn}>Login to a chosen user</button>
          <button>Login as user 100</button>
          </div>
          {issue && <p>Input wrong size or not digits</p>}
        </div>}
      </>
    </ThemeProvider>
  )
}

export default App;
