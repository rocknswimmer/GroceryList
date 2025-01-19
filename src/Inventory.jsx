import React from 'react';
import InventoryItem from './InventoryItem.jsx';

const Inventory = () => {



  return(
    <div>
      <h1>Inventory page</h1>
      {"1234".split('').map(() => {
        return <InventoryItem />
      })}
    </div>
  )
}

export default Inventory;