import React from 'react';

const GroceryItem = ({item}) => {
//item object {id: 6, user_num: 7, item: 'Post and Get Test', quantity: 3, units: 'Get Issue'}
//console.log(item);

  return(<h2>{item.item} {item.quantity} {item.units} </h2>)
}

export default GroceryItem;