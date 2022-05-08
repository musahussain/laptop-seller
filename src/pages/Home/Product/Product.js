import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {name, description, price, img, supplier, quantity, _id} = props.pd;

    const navigate = useNavigate();

    const goToProduct = productId => {
        navigate(`/inventory/${productId}`);
    }

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2><span>Name:</span> {name}</h2>
            <p><span>Description:</span> {description}</p>
            <p><span>Price:</span> ${price}</p>
            <p><span>Quantity:</span> {quantity}</p>
            <p><small><span>Supplier:</span> {supplier}</small></p>
            <button onClick={() => goToProduct(_id)} className='btn manage-btn'>Manage</button>
        </div>
    );
};

export default Product;