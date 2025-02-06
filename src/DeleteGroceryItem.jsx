import React, {useState} from 'react';
import axios from 'axios';

const DeleteGIForm = ({item, update, close}) => {

  const deleteGI = () => {
    axios.delete(`/deleteGI/${item.id}`)
    .then((res) => {
      update();
      close();
    })
    .catch((err) => {
      console.log('error deleting grocery item')
      console.log(err)
    })
  }



  return (
    <div>
      <h1>Are You Sure You Want To Delete This Item?</h1>
      <h2>{item.item}</h2>
      {item.quantity > 1 && <p>If you want to change the quantity, you could update the item instead.</p>}
      <button onClick={deleteGI} className="deleteee">Delete Item</button>
    </div>
  )
}

export default DeleteGIForm;