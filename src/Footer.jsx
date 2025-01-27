import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
    bottom: -15px;
    left: 0px;
  z-index: 2;
  padding-right: 10px;
  padding-left: 40px;
  background-color: #29b8ff;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  font-family: 'Bad Script', cursive;
  border-top: solid 4px white;
  padding-left: 10px;
  color: white;

`;


const Footer = ({addGI, updateGI, deleteGI, receive}) => {





  return (
    <FooterContainer >
      <div>
        <button onClick={addGI} >Add</button>
        <button onClick={updateGI}>Update</button>
        <button onClick={deleteGI}>Delete</button>
        <button onClick={receive}>Receive</button>
      </div>

    </FooterContainer>
  );
};




export default Footer;