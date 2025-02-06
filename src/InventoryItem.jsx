import React from 'react';

const InventoryItem = ({item, viewUpdate, updateItemObj, updateII, viewDelete, deleteII, viewAddToGL, addToGL, ind, theme}) => {



  return(
    <div>
      {viewUpdate && <button onClick={() => {updateItemObj(item);updateII()}} className={(ind===-1 ? 'hide':'update')}>Update This Item</button>}
      {viewDelete && <button onClick={() => {updateItemObj(item);deleteII()}} className={(ind===-1 ? ' hide':"deletee")}>Delete This Item</button>}
      {viewAddToGL && <button onClick={() => {updateItemObj(item);addToGL()}} className={(ind===-1 ? 'hide':'add')}>Add Item To Grocery List</button>}
      <div className={'icontainer' + (ind%2===0 ? '': ' odd') + (ind%2!==0 && theme==='light'? ' lig':'')}>
        <div className={"open" + (ind===-1 ? ' top':'')}>{item.item}</div>
        <div className={"open" + (ind===-1 ? ' top':'')}>{item.quantity}</div>
        <div className={"open" + (ind===-1 ? ' top':'')}>{item.units}</div>
        <div className={"open" + (ind===-1 ? ' top':'')}>{item.item_location}</div>
        <div className={"close" + (ind===-1 ? ' top':'')}>{item.expires}</div>
      </div>
    </div>
  )
}

export default InventoryItem;