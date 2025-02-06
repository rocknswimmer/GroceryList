import React, {useState, useEffect} from 'react';
import GroceryItem from './GroceryItem.jsx';
import Footer from './Footer.jsx';
import Modal from './modal.js';
import AddGIForm from './AddGroceryItem.jsx';
import UpdateGIForm from './UpdateGroceryItem.jsx';
import DeleteGIForm from './DeleteGroceryItem.jsx';
import Receive from './Receive.jsx';

const Grocery = ({groceryList, updateGL, updateIL, user}) => {

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
  const [searchIssue, setSearchIssue] = useState(false);


  const interpretSearch = (e) => {
    setSearched(e.target.value)
  }

  const searchedListMaker = () => {
    let searchedHolder = []
    groceryList.forEach((item) => {
      if(item.item.toUpperCase().includes(searched.toUpperCase()) || item.units.toUpperCase().includes(searched.toUpperCase())) {
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
        <h1>User {user}'s Grocery List</h1>
        <input name="Searchbar" type='text' placeholder='Search Your Grocery List' onChange={interpretSearch} className="search"></input>

        {groceryList.length > 0 && <div>

          {(!searching || (filtered.length > 0 && searching)) && <GroceryItem key={0} item={{ item: "Item", quantity: "Qty", units: "Units", item_location: "Location", expires: "Expires" }} viewUpdate={false} updateItemObj={(x) => { console.log('should not have button') }} updateGI={() => { console.log('should not have button') }} viewDelete={false} deleteGI={() => { console.log('should not have button') }} viewReceive={false} receive={() => { console.log('should not have button') }} ind={1}/>}


          {!searching && groceryList.map((item, i) => {
            return <GroceryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x) => { setItemObj(x) }} updateGI={() => { setViewUpdate(true) }} viewDelete={deleteMode} deleteGI={() => { setViewDelete(true) }} viewReceive={receiveMode} receive={() => { setViewReceive(true) }} ind={i}/>
          })}

          {searching && filtered.map((item, i) => {
            return <GroceryItem key={i} item={item} viewUpdate={updateMode} updateItemObj={(x) => { setItemObj(x) }} updateGI={() => { setViewUpdate(true) }} viewDelete={deleteMode} deleteGI={() => { setViewDelete(true) }} viewReceive={receiveMode} receive={() => { setViewReceive(true) }} ind={i}/>
          })}


        </div>}

        {groceryList.length == 0 && !searching && <p>No Items Currently On Your Grocery List</p>}
        {filtered.length == 0 && searching && <p>No Items Currently Match Your Search</p>}



        {viewAdd && <Modal close={() => { setViewAdd(false) }} content={<AddGIForm close={() => { setViewAdd(false) }} update={() => { updateGL() }} />} />}


        {viewUpdate && <Modal close={() => { setViewUpdate(false) }} content={<UpdateGIForm item={itemObj} close={() => { setViewUpdate(false) }} update={() => { updateGL() }} />} />}

        {viewDelete && <Modal close={() => { setViewDelete(false) }} content={<DeleteGIForm item={itemObj} close={() => { setViewDelete(false) }} update={() => { updateGL() }} />} />}

        {viewReceive && <Modal close={() => { setViewReceive(false) }} content={<Receive item={itemObj} close={() => { setViewReceive(false) }} update={() => { updateGL(); updateIL() }} />} />}


      </div>
      <Footer addGI={() => { setViewAdd(true) }} updateGI={() => { setUpdateMode(!updateMode); setDeleteMode(false); setReceiveMode(false) }} deleteGI={() => { setDeleteMode(!deleteMode); setUpdateMode(false); setReceiveMode(false) }} receive={() => { setReceiveMode(!receiveMode); setDeleteMode(false); setUpdateMode(false) }} />
    </div>
)
}

export default Grocery;