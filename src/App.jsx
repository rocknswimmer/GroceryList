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
  const [user, setUser] = useState('-1');
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
      //get user info
      setLogin(true);
    })
    .catch((err) => {
      console.log('error posting user')
    })
  }

  const logIn = () => {
    if(!issue){postUser();}
  }

  const logIn100 = () => {
    localStorage.user = 100;
    setUser(100);
    //get user info
    setLogin(true);
  }

  const logOut = () => {
    setUser('');
    localStorage.user=-1;
    setLogin(false);
  }

  const [groceryList, setGroceryList] = useState([]);

  const getGL = () => {
    axios.get(`/GL/${user}`)
    .then((res) => {
      //console.log(res.data)
      setGroceryList(res.data.rows);
    })
    .catch((err) => {
      console.log('error getting GL')
    })

  }

  const [inventoryList, setInventoryList] = useState([])

  const getIL = () => {
    axios.get(`/IL/${user}`)
    .then((res) => {
      //console.log(res.data)
      setInventoryList(res.data.rows);
    })
    .catch((err) => {
      console.log('error getting IL')
    })
  }

  useEffect(() => {
    if(localStorage.user >= 0){
      setUser(localStorage.user);
      //get user data
      setLogin(true);
    }
    //console.log("login effect")
  }, [])

  useEffect(()=> {
    if(Number(user) >=0 ){
      getGL();
      getIL();
    }
    //console.log("user effect")
  },[user])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} viewInv={viewInv} viewGro={viewGro} login={login} logOut={logOut}/>
        {login && invMode && <Inventory inventoryList={inventoryList} updateIL={()=>{getIL()}} updateGL={()=>{getGL()}} user={user} />}
        {login && groMode && <Grocery groceryList={groceryList} updateGL={()=>{getGL()}} updateIL={()=>{getIL()}} user={user}/>}
        {!login &&
        <div>
          <h1>Input a user number or sign in as user 100</h1>
          <div>
          <input type="text" name="userNumber" placeholder="Input a 1-2 digit number" onChange={updateUser}></input>
          <button onClick={logIn}>Login to a chosen user</button>
          <button onClick={logIn100}>Login as user 100</button>
          </div>
          {issue && <p className="falert">Input wrong size or not digits</p>}
        </div>}
        {/* <p className="cone">#cc0023</p>
        <p className="ctwo">#fff</p>
        <p className="cthree">#000</p>
        <p className="cfour">#585858</p> */}
      </>
    </ThemeProvider>
  )
}

export default App;
