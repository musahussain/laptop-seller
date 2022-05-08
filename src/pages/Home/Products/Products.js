import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useProducts();

    const slicedProducts = products.slice(0, 6);

    return (
        <div className='inventory'>
            <h1>Products</h1>
            <div className="products">
                {
                    slicedProducts.map(pd => <Product key={pd._id} pd={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;