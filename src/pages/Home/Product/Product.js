import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, description, price, img, supplier, quantity} = props.pd;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2><span>Name:</span> {name}</h2>
            <p><span>Description:</span> {description}</p>
            <p><span>Price:</span> ${price}</p>
            <p><span>Quantity:</span> {quantity}</p>
            <p><small><span>Supplier:</span> {supplier}</small></p>
            <button className='btn manage-btn'>Manage</button>
        </div>
    );
};

export default Product;