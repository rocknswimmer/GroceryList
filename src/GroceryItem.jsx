import React, {useEffect} from 'react';

const GroceryItem = ({item, viewUpdate, updateItemObj, updateGI, viewDelete, deleteGI, viewReceive, receive, ind}) => {
//item object {id: 6, user_num: 7, item: 'Post and Get Test', quantity: 3, units: 'Get Issue'}
//console.log(item);

// useEffect(() => {
//   console.log('update state', viewUpdate)
// }, [viewUpdate])

  return(
    <div>
      {viewUpdate && <button onClick={() => {updateItemObj(item);updateGI()}}>Update This Item</button>}
      {viewDelete && <button onClick={() => {updateItemObj(item);deleteGI()}} className="deletee">Delete This Item</button>}
      {viewReceive && <button onClick={() => {updateItemObj(item);receive()}}>Receive This Item</button>}
      <div className={'gcontainer' + (ind%2===0 ? '': ' odd')}>
        <div className={"open" + (ind===-1 ? ' top':'')}>{item.item}</div>
        <div className={"open" + (ind===-1 ? ' top':'')}>{item.quantity}</div>
        <div className={"close" + (ind===-1 ? ' top':'')}>{item.units}</div>
      </div>
    </div>
  )
}

export default GroceryItem;