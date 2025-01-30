import React, {useState} from 'react';
import InventoryItem from './InventoryItem.jsx';
import IFooter from './IFooter.jsx';
import Modal from './modal.js';
import axios from 'axios';
import AddIIForm from './AddInventoryItem.jsx';
import UpdateIIForm from './UpdateInventoryItem.jsx';
import DeleteIIForm from './DeleteInventoryItem.jsx';
import AddToGLForm from './AddToGrocery.jsx';


const Inventory = ({inventoryList, updateIL, updateGL}) => {

  const [viewAdd, setViewAdd] = useState(false);
  const [viewUpdate, setViewUpdate] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [itemObj, setItemObj] = useState({})
  const [viewDelete, setViewDelete] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [viewAddToGL, setViewAddToGL] = useState(false);
  const [AddToGLMode, setAddToGLMode] = useState(false);




  return(
    <div>
      {inventoryList.length > 0 && inventoryList.map((item, i) => {
        return <InventoryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x)=>{setItemObj(x)}} updateII={() => {setViewUpdate(true)}} viewDelete={deleteMode} deleteII={() => {setViewDelete(true)}} viewAddToGL={AddToGLMode} addToGL={()=>{setViewAddToGL(true)}}/>
      })}

      {inventoryList.length == 0 && <p>No Items Currently On Your Inventory List</p>}

      {viewAdd && <Modal close={()=>{setViewAdd(false)}} content={<AddIIForm close={()=>{setViewAdd(false)}} update={()=>{updateIL()}} />}/>}

      {viewUpdate && <Modal close={()=>{setViewUpdate(false)}} content={<UpdateIIForm item={itemObj} close={()=>{setViewUpdate(false)}} update={()=>{updateIL()}} />} />}

      {viewDelete && <Modal close={()=>{setViewDelete(false)}} content={<DeleteIIForm item={itemObj}  close={()=>{setViewDelete(false)}} update={()=>{updateIL()}}/>}  />}

      {viewAddToGL && <Modal close={() =>{setViewAddToGL(false)}} content={<AddToGLForm item={itemObj} close={() =>{setViewAddToGL(false)}} update={() =>{updateGL()}}/>} />}

      {/* recieve thoughts
      import addGIForm
      plug up like update and delete with button saying add to grocery list or something
      after adding DO NOT deleteII ************** delete should only be after use/when user chooses
      will be different for recieve GI

      */}

      <IFooter addII={() => {setViewAdd(true)}} updateII={() => {setUpdateMode(!updateMode);setDeleteMode(false);setAddToGLMode(false)}} deleteII={() => {setDeleteMode(!deleteMode);setUpdateMode(false);setAddToGLMode(false)}} addToGL={() => {setAddToGLMode(!AddToGLMode);setDeleteMode(false);setUpdateMode(false)}} />
    </div>
  )
}

export default Inventory;