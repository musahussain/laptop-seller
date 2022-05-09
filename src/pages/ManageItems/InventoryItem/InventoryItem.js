import React from 'react';
import './InventoryItem.css';

const InventoryItem = (props) => {
    
    const {deletePd, name, description, price, img, supplier, quantity, _id} = props.pd;



    return (
        <div className='product inventory-item'>
            <img src={img} alt="" />
            <h2><span>Name:</span> {name}</h2>
            <p><span>Description:</span> {description}</p>
            <p><span>Price:</span> ${price}</p>
            <p><span>Quantity:</span> {quantity}</p>
            <p><small><span>Supplier:</span> {supplier}</small></p>
            <button onClick={() => props.deletePd(_id)} className='btn manage-btn delete-btn'>Delete</button>
        </div>
    );
};

export default InventoryItem;