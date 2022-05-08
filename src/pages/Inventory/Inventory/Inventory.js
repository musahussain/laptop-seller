import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [decreasedQuantity, setDecreasedQuantity] = useState(0);

    useEffect( () => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));

        const quanti = parseInt(product.quantity);
        setDecreasedQuantity(quanti);
    }, [decreasedQuantity]);
    

    const {name, img, description, price, supplier, quantity} = product;
    
    console.log(decreasedQuantity);
    const decreaseQuantityChange = (id) => {
        const newQuantity = parseInt(decreasedQuantity) - parseInt(1);
        setDecreasedQuantity(newQuantity);

        console.log(decreasedQuantity, id);

        const updatedQuantity = {
            quantity: decreasedQuantity
        }

        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Updated successfully!');
        });
    }

    

    return (
        <div className='single-product-container'>
            <div className="product-manage">
                <img src={img} alt="" />
                <h2><span>Name:</span> {name}</h2>
                <p><span>Description:</span> {description}</p>
                <p><span>Price:</span> {price}</p>
                <p><small><span>Supplier:</span> {supplier}</small></p>
                <p><span>Quantity:</span> {quantity}</p>
                <button onClick={() => decreaseQuantityChange(productId)} style={{cursor: 'pointer', margin: '30px'}} className='btn'>Deleivered</button>
            </div>
         </div>
    );
};

export default Inventory;