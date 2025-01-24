import React, {useState} from 'react';
import GroceryItem from './GroceryItem.jsx';
import Footer from './Footer.jsx';
import Modal from './modal.js';
import AddGIForm from './AddGroceryItem.jsx';
import UpdateGIForm from './UpdateGroceryItem.jsx';

const Grocery = ({groceryList, updateGL}) => {

  const [viewAdd, setViewAdd] = useState(false);
  const [viewUpdate, setViewUpdate] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [itemObj, setItemObj] = useState({})




  return(
    <div>
      {groceryList.length > 0 && groceryList.map((item, i) => {
        return <GroceryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x)=>{setItemObj(x)}} updateGI={() => {setViewUpdate(true)}}/>
      })}
      {groceryList.length == 0 && <p>No Items Currently On Your Grocery List</p>}
      {viewAdd && <Modal close={()=>{setViewAdd(false)}} content={<AddGIForm close={()=>{setViewAdd(false)}} update={()=>{updateGL()}} />}/>}

      {/* need to pass item number!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {viewUpdate && <Modal close={()=>{setViewUpdate(false)}} content={<UpdateGIForm item={itemObj} close={()=>{setViewUpdate(false)}} update={()=>{updateGL()}} />} />}

      <Footer viewInv={false} addGI={() => {setViewAdd(true)}} updateGI={() => {setUpdateMode(!updateMode)}}/>
    </div>
)
}

export default Grocery;