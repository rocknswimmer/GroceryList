import React from 'react';
import GroceryItem from './GroceryItem.jsx';
import Footer from './Footer.jsx';

const Grocery = () => {



  return(
    <div>
      <h1>Grocery page</h1>
      {"123".split('').map((item, i) => {
        return <GroceryItem key={i}/>
      })}
      <Footer viewInv={false}/>
    </div>
)
}

export default Grocery;