import React, {useState} from 'react';
import axios from 'axios';

const UpdateGIForm = () => {
  const [nameIssue, setNameIssue] = useState(true);
  const [quantityIssue, setQuantityIssue] = useState(true);
  const [unitsIssue, setUnitsIssue] = useState(true);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [units, setUnits] = useState('');

  const submitUpdateGI =  (e) => {
    e.preventDefault();
    if(!nameIssue && !quantityIssue && !unitsIssue){
      axios.post('/updateGI', {})
      .then((res) => {
        //get
        //close modal
      })
      .catch((err) => {
        console.log('error posting GI')
      })
    }
  }


  return (
    <div>
      <h1>Update Grocery List Item</h1>
      <form onSubmit={submitUpdateGI}>
      <lable>Item Name</lable>
        <input onChange={updateName}></input>
        {nameIssue && <p>Name is wrong size or has unapproved characters</p>}
        <br/>
        <lable>Quantity To Purchase</lable>
        <input onChange={updateQuantity}></input>
        {quantityIssue && <p>Quantity is wrong size or is not digits</p>}
        <br/>
        <lable>Units</lable>
        <input onChange={updateUnits}></input>
        {unitsIssue && <p>Units are wrong size or have unapproved characters</p>}
        <br/>
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default UpdateGIForm;