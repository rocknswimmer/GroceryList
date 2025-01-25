import React, {useState} from 'react';
import axios from 'axios';

const DeleteIIForm = ({item, update, close}) => {

  const deleteII = () => {
    axios.delete(`/deleteII/${item.id}`)
    .then((res) => {
      update();
      close();
    })
    .catch((err) => {
      console.log('error deleting inventory item')
      console.log(err)
    })
  }



  return (
    <div>
      <h1>Are You Sure You Want To Delete This Item?</h1>
      <h2>{item.item}</h2>
      <button onClick={deleteII}>Delete Item</button>
    </div>
  )
}

export default DeleteIIForm;