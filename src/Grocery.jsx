import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const Grocery = () => {



  return(
    <div>
      <h1>Grocery page</h1>
      {"123".split('').map(() => {
        return <GroceryItem />
      })}
    </div>
)
}

export default Grocery;