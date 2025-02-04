import React, {useState} from 'react';
import GroceryItem from './GroceryItem.jsx';
import Footer from './Footer.jsx';
import Modal from './modal.js';
import AddGIForm from './AddGroceryItem.jsx';
import UpdateGIForm from './UpdateGroceryItem.jsx';
import DeleteGIForm from './DeleteGroceryItem.jsx';
import Receive from './Receive.jsx';

const Grocery = ({groceryList, updateGL, updateIL}) => {

  const [viewAdd, setViewAdd] = useState(false);
  const [viewUpdate, setViewUpdate] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [itemObj, setItemObj] = useState({})
  const [viewDelete, setViewDelete] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [viewReceive, setViewReceive] = useState(false);
  const [receiveMode, setReceiveMode] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState('');
  const [filtered, setFiltered] = useState([]);




  return(
    <div>
      {groceryList.length > 0 && groceryList.map((item, i) => {
        return <GroceryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x)=>{setItemObj(x)}} updateGI={() => {setViewUpdate(true)}} viewDelete={deleteMode} deleteGI={() => {setViewDelete(true)}} viewReceive={receiveMode} receive={()=>{setViewReceive(true)}}/>
      })}
      {groceryList.length == 0 && <p>No Items Currently On Your Grocery List</p>}
      {viewAdd && <Modal close={()=>{setViewAdd(false)}} content={<AddGIForm close={()=>{setViewAdd(false)}} update={()=>{updateGL()}} />}/>}


      {viewUpdate && <Modal close={()=>{setViewUpdate(false)}} content={<UpdateGIForm item={itemObj} close={()=>{setViewUpdate(false)}} update={()=>{updateGL()}} />} />}

      {viewDelete && <Modal close={()=>{setViewDelete(false)}} content={<DeleteGIForm item={itemObj}  close={()=>{setViewDelete(false)}} update={()=>{updateGL()}}/>}  />}

      {viewReceive && <Modal close={()=>{setViewReceive(false)}} content={<Receive item={itemObj}  close={()=>{setViewReceive(false)}} update={()=>{updateGL();updateIL()}}/>}  />}

      <Footer addGI={() => {setViewAdd(true)}} updateGI={() => {setUpdateMode(!updateMode);setDeleteMode(false);setReceiveMode(false)}} deleteGI={() => {setDeleteMode(!deleteMode);setUpdateMode(false);setReceiveMode(false)}} receive={()=>{setReceiveMode(!receiveMode);setDeleteMode(false);setUpdateMode(false)}}/>
    </div>
)
}

export default Grocery;