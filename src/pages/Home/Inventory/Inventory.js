import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Inventory.css';

const Inventory = () => {
    const [products, setProducts] = useProducts();

    const slicedProducts = products.slice(0, 6);

    return (
        <div className='inventory'>
            <h1>Inventory</h1>
            <div className="products">
                {
                    slicedProducts.map(pd => <Product pd={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;