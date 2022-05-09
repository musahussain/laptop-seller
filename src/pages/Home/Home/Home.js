import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="banner">
                    <div className="description">
                        <h1><span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span> <span>T</span><span>o</span> <span>T</span><span>r</span><span>o</span><span>n</span><span>i</span><span>c</span></h1>
                        <p>Here you will find many sports items. You will ssee many types of sports items. You can add more items and also manage items </p>
                        <a className='btn' href="#inventory">See Items</a>
                    </div>

                    <div className="img">
                        <img src="https://i.postimg.cc/5yFz9Z0H/banner.png" alt="banner" />
                    </div>
                </div>
            </div>

            <div id='inventory' className="inventory-container">
                <Products></Products>
            </div>

            <div className="manage-inventory-link">
                <Link className='btn' to="/manageitems">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Home;