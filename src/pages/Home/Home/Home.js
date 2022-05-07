import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="description">
                    <h1>Welcome To</h1>
                    <h1>Item Stocker</h1>
                    <p>Here you will find many sports items. You will ssee many types of sports items. You can add more items and also manage items </p>
                    <a href="#inventory">See Items</a>
                </div>

                <div className="img">
                    <img src="https://i.postimg.cc/wjcRxsdz/banner.png" alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Home;