import React from 'react';

const InventoryItem = ({item, viewUpdate, updateItemObj, updateII, viewDelete, deleteII, viewAddToGL, addToGL}) => {



  return(
    <div>
      {viewUpdate && <button onClick={() => {updateItemObj(item);updateII()}}>Update This Item</button>}
      {viewDelete && <button onClick={() => {updateItemObj(item);deleteII()}} className="deletee">Delete This Item</button>}
      {viewAddToGL && <button onClick={() => {updateItemObj(item);addToGL()}}>Add Item To Grocery List</button>}
      <div className='icontainer'>
        <div className="ii">{item.item}</div>
        <div className="ii">{item.quantity}</div>
        <div className="ii">{item.units}</div>
        <div className="ii">{item.item_location}</div>
        <div className="ii">{item.expires}</div>
      </div>
    </div>
  )
}

export default InventoryItem;