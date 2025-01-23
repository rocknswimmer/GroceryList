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


const Footer = ({viewInv, addGI}) => {





  return (
    <FooterContainer >
      {viewInv && <div>
        <button >Add Item</button>
        <button >Update</button>
        <button>Delete</button>
        <button>Add to List</button>
      </div>}
      {!viewInv && <div>
        <button onClick={addGI} >Add</button>
        <button >Update</button>
        <button>Delete</button>
        <button>Receive</button>
      </div> }

    </FooterContainer>
  );
};




export default Footer;