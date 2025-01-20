import React from 'react';
import InventoryItem from './InventoryItem.jsx';
import Footer from './Footer.jsx';

const Inventory = () => {



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