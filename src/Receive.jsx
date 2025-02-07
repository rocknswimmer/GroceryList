import React, {useState} from 'react';
import axios from 'axios';

const Receive = ({item, close, update}) => {
  const [nameIssue, setNameIssue] = useState(false);
  const [quantityIssue, setQuantityIssue] = useState(false);
  const [unitsIssue, setUnitsIssue] = useState(false);
  const [locationIssue, setLocationIssue] = useState(true);
  const [expiresIssue, setExpiresIssue] = useState(true);
  const [name, setName] = useState(item.item?item.item:'');
  const [quantity, setQuantity] = useState(item.quantity?item.quantity+'':'');
  const [units, setUnits] = useState(item.units?item.units:'');
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
    if (!nameIssue && !quantityIssue && !unitsIssue && !locationIssue && !expiresIssue) {
      axios.post('/addII', { name: name, quantity: quantity, units: units, user: localStorage.user, location: location, expires: expires })
        .then((res) => {
          axios.delete(`/deleteGI/${item.id}`)
            .then((res) => {
              update();
              close();
            })
            .catch((err) => {
              console.log('error deleting received grocery item')
              // console.log(err)
            })
        })
        .catch((err) => {
          console.log('error receiving')
        })
      //console.log(name,quantity, units);

    }
  }


  return (
    <div className="form">
      <h1>Receive Grocery Item To Inventory</h1>
      <h2>Doublecheck or fill in the information</h2>
      <form onSubmit={submitAddII}>
      <div className="fitem"><lable>Item Name:</lable></div>
      <div className="fitem"><input onChange={updateName} type="text" defaultValue={item.item}></input></div>
        {nameIssue && name.length > 0 && <p className="falert">Name is wrong size or has unapproved characters</p>}

        <div className="fitem"><lable>Quantity In Inventory:</lable></div>
        <div className="fitem"><input onChange={updateQuantity} type="text" defaultValue={item.quantity}></input></div>
        {quantityIssue && quantity.length > 0 && <p className="falert">Quantity is wrong size or is not digits</p>}

        <div className="fitem"><lable>Units:</lable></div>
        <div className="fitem"><input onChange={updateUnits} type="text" defaultValue={item.units}></input></div>
        {unitsIssue && units.length > 0 && <p className="falert">Units are the wrong size or have unapproved characters</p>}

        <div className="fitem"><lable>Location:</lable></div>
        <div className="fitem"><input onChange={updateLocation} type="text" placeholder="Pantry"></input></div>
        {unitsIssue && units.length > 0 && <p className="falert">Location is the wrong length or has unapproved characters</p>}

        <div className="fitem"><lable>Expires:</lable></div>
        <div className="fitem"><input onChange={updateExpires} type="date" ></input></div>
        {unitsIssue && units.length > 0 && <p className="falert">Date input not recieved</p>}

        <button type="submit">Update Item</button>
      </form>
    </div>
  )
}

export default Receive;