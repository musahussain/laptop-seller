import { jsonEval } from '@firebase/util';
import React from 'react';
import './AddItems.css';

const AddItems = () => {

    const addNewProduct = event => {
        event.preventDefault();
        let name = event.target.name.value; 
        let description = event.target.description.value;
        let price = event.target.price.value;
        let quantity = event.target.quantity.value;
        let supplier = event.target.supplier.value;
        let imgUrl = event.target.img.value;
        const product = {
            name: name,
            description: description,
            supplier: supplier,
            price: price,
            quantity: quantity,
            img: imgUrl
        }

        const url = `https://evening-gorge-19412.herokuapp.com/product`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log(data));

        alert("added item");
    }

    return (
        <div className='signup-container'>
            <div className="signup">
                <h1>Add New Item</h1>
                
                <form onSubmit={addNewProduct}>
                    <input required type="text" name="name" id="name" placeholder='Enter product name' />
                    <input required type="text" name='description' id='description' placeholder='Enter product description' />
                    <input required type="number" name="price" id="price" placeholder='Enter product price' />
                    <input required type="number" name="quantity" id="quantity" placeholder='Enter product quantity' />
                    <input required type="text" name="supplier" id="supplier" placeholder='Enter product supplier' />
                    <input required type="text" name="img" id="img" placeholder='Enter product image url' />
                    <input className='submit-btn' type="submit" value="Add Item" />
                   <input className='submit-btn' type="reset" value="Reset" />
                </form>
            </div>
    </div>
    )
};

export default AddItems;