import React, {useEffect} from 'react';

const GroceryItem = ({item, viewUpdate, updateItemObj, updateGI, viewDelete, deleteGI}) => {
//item object {id: 6, user_num: 7, item: 'Post and Get Test', quantity: 3, units: 'Get Issue'}
//console.log(item);

// useEffect(() => {
//   console.log('update state', viewUpdate)
// }, [viewUpdate])

  return(
    <div>
      {viewUpdate && <button onClick={() => {updateItemObj(item);updateGI()}}>Update This Item</button>}
      {viewDelete && <button onClick={() => {updateItemObj(item);deleteGI()}}>Delete This Item</button>}
      <span>{item.item} {item.quantity} {item.units} </span>
    </div>
  )
}

export default GroceryItem;