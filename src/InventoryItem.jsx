import React from 'react';

const InventoryItem = ({item, viewUpdate, updateItemObj, updateII, viewDelete, deleteII}) => {



  return(
    <div>
      {viewUpdate && <button onClick={() => {updateItemObj(item);updateII()}}>Update This Item</button>}
      {viewDelete && <button onClick={() => {updateItemObj(item);deleteII()}}>Delete This Item</button>}
      <span>{item.item} {item.quantity} {item.units} {item.item_location} {item.expires}</span>
    </div>
  )
}

export default InventoryItem;