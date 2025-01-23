import React, {useState} from 'react';
import GroceryItem from './GroceryItem.jsx';
import Footer from './Footer.jsx';
import Modal from './modal.js';
import AddGIForm from './AddGroceryItem.jsx';

const Grocery = () => {

  const [viewAdd, setViewAdd] = useState(false);
  const [groceryList, setGroceryList] = useState([]);




  return(
    <div>
      {groceryList.length > 0 && groceryList.map((item, i) => {
        return <GroceryItem key={i}/>
      })}
      {groceryList.length == 0 && <p>No Items Currently On Your Grocery List</p>}
      {viewAdd && <Modal close={()=>{setViewAdd(false)}} content={<AddGIForm close={()=>{setViewAdd(false)}} />}/>}

      <Footer viewInv={false} addGI={() => {setViewAdd(true)}}/>
    </div>
)
}

export default Grocery;