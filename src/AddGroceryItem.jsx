import React, {useState} from 'react';
import axios from 'axios';

const AddGIForm = ({close, update}) => {
  const [nameIssue, setNameIssue] = useState(true);
  const [quantityIssue, setQuantityIssue] = useState(true);
  const [unitsIssue, setUnitsIssue] = useState(true);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [units, setUnits] = useState('');

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789., '.split('');

  const updateName = (e) => {
    let cur = e.target.value;
    if(cur.length < 1 || cur.length > 100){
      setNameIssue(true);
      setName(' ');
    } else if (cur.split('').every((char) => {return allowed.indexOf(char) !== -1})) {
      setName(cur);
      setNameIssue(false);
    } else {
      setNameIssue(true);
      setName(' ');
    }
  }

  const updateQuantity = (e) => {
    let cur = e.target.value;
    if(cur.length < 1 || cur.length > 4){
      setQuantityIssue(true);
      setQuantity(' ');
    } else if (cur.split('').every((char) => {return digits.indexOf(char) !== -1})) {
      setQuantity(cur);
      setQuantityIssue(false);
    } else {
      setQuantityIssue(true);
      setQuantity(' ');
    }
  }

  const updateUnits = (e) => {
    let cur = e.target.value;
    if(cur.length < 1 || cur.length > 100){
      setUnitsIssue(true);
      setUnits(' ');
    } else if (cur.split('').every((char) => {return allowed.indexOf(char) !== -1})) {
      setUnits(cur);
      setUnitsIssue(false);
    } else {
      setUnitsIssue(true);
      setUnits(' ');
    }
  }


  const submitAddGI =  (e) => {
    e.preventDefault();
    if(!nameIssue && !quantityIssue && !unitsIssue){
      axios.post('/addGI', {name:name, quantity:quantity, units:units, user:localStorage.user})
      .then((res) => {
        update();
        //console.log(res.data);
        close();
      })
      .catch((err) => {
        console.log('error posting GI',err)
      })
      //console.log(name,quantity, units);

    }
  }


  return (
    <div>
      <h1>Add Item To Grocery List</h1>
      <form onSubmit={submitAddGI}>
        <lable>Item Name</lable>
        <input onChange={updateName} type="text" placeholder="Apples"></input>
        {nameIssue && name.length > 0 && <p>Name is wrong size or has unapproved characters</p>}
        <br/>
        <lable>Quantity To Purchase</lable>
        <input onChange={updateQuantity} type="text" placeholder="2"></input>
        {quantityIssue && quantity.length > 0 && <p>Quantity is wrong size or is not digits</p>}
        <br/>
        <lable>Units</lable>
        <input onChange={updateUnits} type="text" placeholder="Each"></input>
        {unitsIssue && units.length > 0 && <p>Units are the wrong size or have unapproved characters</p>}
        <br/>
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default AddGIForm;