import React, {useState} from 'react';
import GroceryItem from './GroceryItem.jsx';
import Footer from './Footer.jsx';
import Modal from './modal.js';
import AddGIForm from './AddGroceryItem.jsx';

const Grocery = ({groceryList, updateGL}) => {

  const [viewAdd, setViewAdd] = useState(false);




  return(
    <div>
      {groceryList.length > 0 && groceryList.map((item, i) => {
        return <GroceryItem key={i} item={item}/>
      })}
      {groceryList.length == 0 && <p>No Items Currently On Your Grocery List</p>}
      {viewAdd && <Modal close={()=>{setViewAdd(false)}} content={<AddGIForm close={()=>{setViewAdd(false)}} update={()=>{updateGL()}} />}/>}

      <Footer viewInv={false} addGI={() => {setViewAdd(true)}}/>
    </div>
)
}

export default Grocery;