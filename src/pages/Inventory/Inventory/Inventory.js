import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const {productId} = useParams();
    const id = productId;
    const [product, setProduct] = useState({});
    const [decreasedQuantity, setDecreasedQuantity] = useState(0);

    useEffect( () => {
        const url = `https://evening-gorge-19412.herokuapp.com/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);
    





    useEffect( () => {
        setDecreasedQuantity(product.quantity);
    }, [product]);

    const {name, img, description, price, supplier} = product;
    
    const decreaseQuantityChange = (id) => {
        const newQuantity = decreasedQuantity - 1;
        if(decreasedQuantity > 0) {
            setDecreasedQuantity(newQuantity);

            const updatedQuantity = {
                quantity: newQuantity
            }
    
            const url = `https://evening-gorge-19412.herokuapp.com/inventory/${id}`;
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
        if(decreasedQuantity === 0) {
            alert("There are no items in stock");
        }
        
    }

    const handleQuantityIncrease = event => {
        event.preventDefault();
        const quantityToIncrease = event.target.increaseStock.value;
        const convertedQuantity = parseInt(quantityToIncrease);
        const increasedQuantity = decreasedQuantity + convertedQuantity;
        
        const updatedQuantity = {
            quantity: increasedQuantity
        }

        const url = `https://evening-gorge-19412.herokuapp.com/inventory/${id}`;
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
        setDecreasedQuantity(increasedQuantity);
    }
    

    return (
        <div className='single-product-container'>
            <div className="product-manage">
                <img src={img} alt="" />
                <h2><span>Name:</span> {name}</h2>
                <p><span>Description:</span> {description}</p>
                <p><span>Price:</span> {price}</p>
                <p><small><span>Supplier:</span> {supplier}</small></p>
                <p><span>Quantity:</span> {decreasedQuantity}</p>
                <button onClick={() => decreaseQuantityChange(productId)} style={{cursor: 'pointer', margin: '30px'}} className='btn'>Deleivered</button>
            </div>

            <div className="restock-product">
                <h2>Restock Product :{name}</h2>
                <form onSubmit={handleQuantityIncrease}>
                    <input required type="number" name="increaseStock" id="increase-stock" placeholder='Enter number to restock' />
                    <input style={{cursor: 'pointer', margin: '0 0 0 75px'}} className='btn' type="submit" value="Restock" />
                </form>
            </div>
         </div>
    );
};

export default Inventory;