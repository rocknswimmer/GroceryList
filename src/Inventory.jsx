import React from 'react';
import InventoryItem from './InventoryItem.jsx';
import Footer from './Footer.jsx';
import Modal from './modal.js';
import axios from 'axios';


const Inventory = () => {

  // need function for each button and for each modal opened by a button if that is how the button will work



  return(
    <div>
      <h1>Inventory page</h1>
      {"1234".split('').map((item, i) => {
        return <InventoryItem key={i}/>
      })}
      <Footer viewInv={true}/>
    </div>
  )
}

export default Inventory;