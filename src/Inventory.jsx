import React, {useState} from 'react';
import InventoryItem from './InventoryItem.jsx';
import IFooter from './IFooter.jsx';
import Modal from './modal.js';
import axios from 'axios';
import AddIIForm from './AddInventoryItem.jsx';
import UpdateIIForm from './UpdateInventoryItem.jsx';
import DeleteIIForm from './DeleteInventoryItem.jsx';


const Inventory = ({inventoryList, updateIL}) => {

  const [viewAdd, setViewAdd] = useState(false);
  const [viewUpdate, setViewUpdate] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [itemObj, setItemObj] = useState({})
  const [viewDelete, setViewDelete] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);



  return(
    <div>
      {inventoryList.length > 0 && inventoryList.map((item, i) => {
        return <InventoryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x)=>{setItemObj(x)}} updateII={() => {setViewUpdate(true)}} viewDelete={deleteMode} deleteII={() => {setViewDelete(true)}}/>
      })}

      {inventoryList.length == 0 && <p>No Items Currently On Your Inventory List</p>}

      {viewAdd && <Modal close={()=>{setViewAdd(false)}} content={<AddIIForm close={()=>{setViewAdd(false)}} update={()=>{updateIL()}} />}/>}

      {viewUpdate && <Modal close={()=>{setViewUpdate(false)}} content={<UpdateIIForm item={itemObj} close={()=>{setViewUpdate(false)}} update={()=>{updateIL()}} />} />}

      {viewDelete && <Modal close={()=>{setViewDelete(false)}} content={<DeleteIIForm item={itemObj}  close={()=>{setViewDelete(false)}} update={()=>{updateIL()}}/>}  />}

      {/* recieve thoughts
      import addGIForm
      after adding deleteII

      */}

      <IFooter addII={() => {setViewAdd(true)}} updateII={() => {setUpdateMode(!updateMode)}} deleteII={() => {setDeleteMode(!deleteMode)}} />
    </div>
  )
}

export default Inventory;