import React, {useState} from 'react';
import axios from 'axios';

const AddIIForm = ({close, update}) => {
  const [nameIssue, setNameIssue] = useState(true);
  const [quantityIssue, setQuantityIssue] = useState(true);
  const [unitsIssue, setUnitsIssue] = useState(true);
  const [locationIssue, setLocationIssue] = useState(true);
  const [expiresIssue, setExpiresIssue] = useState(true);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [units, setUnits] = useState('');
  const [location, setLocation] = useState('');
  const [expires, setExpires] = useState('');

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789., -_'.split('');

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

  const updateLocation = (e) => {
    let cur = e.target.value;
    if(cur.length < 1 || cur.length > 100){
      setLocationIssue(true);
      setLocation(' ');
    } else if (cur.split('').every((char) => {return allowed.indexOf(char) !== -1})) {
      setLocation(cur);
      setLocationIssue(false);
    } else {
      setLocationIssue(true);
      setLocation(' ');
    }
  }

  const updateExpires = (e) => {
    let cur = Number(new Date(e.target.value).getTime()) + (3600000*8)//was giving wrong date so added 8 hours to adjust for timezone issues
    //console.log(new Intl.DateTimeFormat('en-US').format(cur));
    setExpires(new Intl.DateTimeFormat('en-US').format(cur));
    setExpiresIssue(false);

    // if(cur.length < 1 || cur.length > 100){
    //   setExpiresIssue(true);
    //   setExpires(' ');
    // } else if (cur.split('').every((char) => {return allowed.indexOf(char) !== -1})) {
    //   setExpires(cur);
    //   setExpiresIssue(false);
    // } else {
    //   setExpiresIssue(true);
    //   setExpires(' ');
    // }
  }


  const submitAddII =  (e) => {
    e.preventDefault();
    if(!nameIssue && !quantityIssue && !unitsIssue && !locationIssue && !expiresIssue){
      axios.post('/addII', {name:name, quantity:quantity, units:units, user:localStorage.user, location:location, expires:expires})
      .then((res) => {
        update();
        //console.log(res.data);
        close();
      })
      .catch((err) => {
        console.log('error posting II')
      })
      //console.log(name,quantity, units);

    }
  }


  return (
    <div>
      <h1>Add Item To Inventory</h1>
      <form onSubmit={submitAddII}>
        <lable>Item Name</lable>
        <input onChange={updateName} type="text" placeholder="Apples"></input>
        {nameIssue && name.length > 0 && <p>Name is wrong size or has unapproved characters</p>}
        <br/>
        <lable>Quantity In Inventory</lable>
        <input onChange={updateQuantity} type="text" placeholder="2"></input>
        {quantityIssue && quantity.length > 0 && <p>Quantity is wrong size or is not digits</p>}
        <br/>
        <lable>Units</lable>
        <input onChange={updateUnits} type="text" placeholder="Each"></input>
        {unitsIssue && units.length > 0 && <p>Units are the wrong size or have unapproved characters</p>}
        <br/>
        <lable>Location</lable>
        <input onChange={updateLocation} type="text" placeholder="Pantry"></input>
        {unitsIssue && units.length > 0 && <p>Location is the wrong length or has unapproved characters</p>}
        <br/>
        <lable>Expires</lable>
        <input onChange={updateExpires} type="date"></input>
        {unitsIssue && units.length > 0 && <p>Date input not recieved</p>}
        <br/>
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default AddIIForm;