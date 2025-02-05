import React, {useState, useEffect} from 'react';
import InventoryItem from './InventoryItem.jsx';
import IFooter from './IFooter.jsx';
import Modal from './modal.js';
import axios from 'axios';
import AddIIForm from './AddInventoryItem.jsx';
import UpdateIIForm from './UpdateInventoryItem.jsx';
import DeleteIIForm from './DeleteInventoryItem.jsx';
import AddToGLForm from './AddToGrocery.jsx';


const Inventory = ({inventoryList, updateIL, updateGL, user}) => {

  const [viewAdd, setViewAdd] = useState(false);
  const [viewUpdate, setViewUpdate] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [itemObj, setItemObj] = useState({})
  const [viewDelete, setViewDelete] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [viewAddToGL, setViewAddToGL] = useState(false);
  const [AddToGLMode, setAddToGLMode] = useState(false);

  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [searchIssue, setSearchIssue] = useState(false);


  const interpretSearch = (e) => {
    setSearched(e.target.value)
  }

  const searchedListMaker = () => {
    let searchedHolder = []
    inventoryList.forEach((item) => {
      if(item.item.toUpperCase().includes(searched.toUpperCase()) || item.units.toUpperCase().includes(searched.toUpperCase()) || item.item_location.toUpperCase().includes(searched.toUpperCase())) {
        searchedHolder.push(item)
      }
    })

    setFiltered(searchedHolder)
  }

  useEffect(() => {
    if (searched.length !== 2) {
      if (searched.length === 3 && !searching) {
        setSearching(true);
      }
      if (searched.length >= 3) {
        searchedListMaker();
      }
    } else {
      setSearching(false);
    }
  }, [((searched.length > 2) && (searched))])




  return(
    <div>
      <div className="container">
        <h1>User {user}'s Inventory</h1>
        <input name="Searchbar" type='text' placeholder='Search Your Inventory' onChange={interpretSearch} className="search"></input>


        {inventoryList.length > 0 && <div>

          {(!searching || (filtered.length > 0 && searching)) && <InventoryItem key={0} item={{ item: "Item", quantity: "Qty", units: "Units", item_location: "Location", expires: "Expires" }} viewUpdate={false} updateItemObj={() => { console.log('should not have button') }} updateII={() => { console.log('should not have button') }} viewDelete={false} deleteII={() => { console.log('should not have button') }} viewAddToGL={false} addToGL={() => { console.log('should not have button') }} />}

          {!searching && inventoryList.map((item, i) => {
            return <InventoryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x) => { setItemObj(x) }} updateII={() => { setViewUpdate(true) }} viewDelete={deleteMode} deleteII={() => { setViewDelete(true) }} viewAddToGL={AddToGLMode} addToGL={() => { setViewAddToGL(true) }} />
          })}

          {searching && filtered.map((item, i) => {
            return <InventoryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x) => { setItemObj(x) }} updateII={() => { setViewUpdate(true) }} viewDelete={deleteMode} deleteII={() => { setViewDelete(true) }} viewAddToGL={AddToGLMode} addToGL={() => { setViewAddToGL(true) }} />
          })}
        </div>}

        {inventoryList.length == 0 && !searching && <p>No Items Currently On Your Inventory List</p>}
        {filtered.length == 0 && searching && <p>No Items Currently Match Your Search</p>}

        {viewAdd && <Modal close={() => { setViewAdd(false) }} content={<AddIIForm close={() => { setViewAdd(false) }} update={() => { updateIL() }} />} />}

        {viewUpdate && <Modal close={() => { setViewUpdate(false) }} content={<UpdateIIForm item={itemObj} close={() => { setViewUpdate(false) }} update={() => { updateIL() }} />} />}

        {viewDelete && <Modal close={() => { setViewDelete(false) }} content={<DeleteIIForm item={itemObj} close={() => { setViewDelete(false) }} update={() => { updateIL() }} />} />}

        {viewAddToGL && <Modal close={() => { setViewAddToGL(false) }} content={<AddToGLForm item={itemObj} close={() => { setViewAddToGL(false) }} update={() => { updateGL() }} />} />}


      </div>
      <IFooter addII={() => { setViewAdd(true) }} updateII={() => { setUpdateMode(!updateMode); setDeleteMode(false); setAddToGLMode(false) }} deleteII={() => { setDeleteMode(!deleteMode); setUpdateMode(false); setAddToGLMode(false) }} addToGL={() => { setAddToGLMode(!AddToGLMode); setDeleteMode(false); setUpdateMode(false) }} />
    </div>
  )
}

export default Inventory;