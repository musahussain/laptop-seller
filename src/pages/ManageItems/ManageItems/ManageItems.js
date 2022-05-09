import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import InventoryItem from '../InventoryItem/InventoryItem';
import './ManageItems.css';

const ManageItems = () => {
    const [products, setProducts] = useProducts();

    const deleteItem = id => {
        const agree = window.confirm("Are you sure you want to delete?");
        if(agree) {
            
            const url = `https://evening-gorge-19412.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    
                    const remainingProducts = products.filter(pd => pd._id !== id);
                    setProducts(remainingProducts);
                }
            })
        }
    }

    return (
        <div className='inventory-container'>
            <div className="inventory">
                <h1>Manage Items</h1>
                <div className="products">
                {
                    products.map(pd => <InventoryItem key={pd._id} deletePd={deleteItem} pd={pd}></InventoryItem>)
                }
                </div>

                <div className="manage-inventory-link">
                <Link className='btn' to="/additems">Add New Items</Link>
            </div>
            </div>
        </div>
    );
};


export default ManageItems;