import React from 'react';

const InventoryItem = ({item, viewUpdate, updateItemObj, updateII, viewDelete, deleteII, viewAddToGL, addToGL}) => {



  return(
    <div>
      {viewUpdate && <button onClick={() => {updateItemObj(item);updateII()}}>Update This Item</button>}
      {viewDelete && <button onClick={() => {updateItemObj(item);deleteII()}} className="deletee">Delete This Item</button>}
      {viewAddToGL && <button onClick={() => {updateItemObj(item);addToGL()}}>Add Item To Grocery List</button>}
      <span>{item.item} {item.quantity} {item.units} {item.item_location} {item.expires}</span>
    </div>
  )
}

export default InventoryItem;