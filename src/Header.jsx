import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
    top: -15px;
    left: 0px;
  z-index: 2;
  padding-right: 10px;
  padding-left: 40px;
  background-color: #cc0023;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  font-family: 'Bad Script', cursive;
  border-bottom: solid 4px #585858;
  padding-left: 10px;
  color: #fff;

`;


const Header = ({ theme, themeToggler,viewInv, viewGro, login, logOut}) => {





  return (
    <HeaderContainer data-testid='header'>
      <h1 className="version">Groceries</h1>
      {login && <div className="nav">
      <button onClick={viewInv}>Inventory</button>
      <button onClick={viewGro}>Grocery</button>
      <button onClick={logOut}>Logout</button>
      </div>}
      <div>
      <label className="switch">
        <input
          type="checkbox"
          />
        <span className="slider round"
          onClick={() => { themeToggler();}}>
          <span className='sun'
            onClick={() => { themeToggler();}}>

          </span>
          <span className='sun'
            onClick={() => { themeToggler();}}>

          </span>
        </span>
      </label>
      </div>

    </HeaderContainer>
  );
};




export default Header;